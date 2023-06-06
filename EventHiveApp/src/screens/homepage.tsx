import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator, TextInput, ScrollView, Animated, NativeSyntheticEvent, NativeScrollEvent, Alert, Linking  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, LatLng, Camera, Marker, Callout} from 'react-native-maps';
import MapViewRef from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, FontAwesome5, EvilIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Markers } from '../Data/mapData';
import { Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Link} from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from 'react-router-dom';



const {width, height} = Dimensions.get('window')



const Homepage = () => {
    console.log("Startttt")

    const [currentLocation, setCurrentLocation] = useState<LatLng>({latitude: 0, longitude: 0}); // {latitude: 42.3100, longitude: -83.0623}
    const [isLoading, setIsLoading] = useState(false);
    const mapRef = useRef<MapViewRef>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number>(-1);
    const [mapAnimation] = useState(new Animated.Value(0));
    const [shouldAnimateMap, setShouldAnimateMap] = useState(true);
    const navigate = useNavigate();

    

    // For Find my location button
    const handleLocate = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          const storedLocation = await AsyncStorage.getItem('location');
          if (storedLocation) {
            AsyncStorage.removeItem('location')
          }
          Alert.alert(
            "Location Permission Required",
            "\nEventHive is designed to help you discover the best local events in your area. To provide this service, we need access to your location. Please grant location permissions to enhance your EventHive experience.\n\n" +
            "To do this, please follow these steps:\n" +
            "1. Press the 'Open Settings' button below. This will take you directly to the settings for EventHive.\n" +
            "2. Look for a setting that says 'Location' and tap on it.\n" +
            "3. Select 'While Using the App' or 'Always Allow'.\n" +
            "4. You're all set! Head back to EventHive and let's find some local events!",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Open Settings",
                onPress: () => Linking.openSettings(),
              },
            ]
          );
          return;
        }

        const storedLocation = await AsyncStorage.getItem('location');
        if (!storedLocation){
          try { 
            setIsLoading(true);
            const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, timeInterval:1500});
            setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            });
            const newLocation = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            };
            setCurrentLocation(newLocation);
            await AsyncStorage.setItem('location', JSON.stringify(newLocation));
          } catch (error) {
              console.log("Error when setting location: ", error);
              return;
          } finally {
            setIsLoading(false); 
            return;
          }
        }

        if (status == 'granted') {
          try {
            mapRef.current?.animateCamera({
                center: {
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                },
                zoom: 17,
            });
            
            } catch (error) {
              console.error('Error:', error);
            }
          return;
        }
    }

    // For Search bar
    const handleSearch = async (data:any, details:any) => {
        let latitude = details?.geometry.location.lat;
        let longitude = details?.geometry.location.lng;

        (async function() {
        try {
            mapRef.current?.animateCamera({
            center: {
                latitude: latitude,
                longitude: longitude,
            },
            zoom: 19,
            });
            
            console.log(latitude, longitude)
        } catch (error) {
            console.error('Error:', error);
        }
        })();

    }

    // To Render the markers
    const renderMarkers = () => {
      return Markers.map((marker, index) => (
        <Marker
            key={`${marker.coordinate.latitude}-${marker.coordinate.longitude}`}
            coordinate={marker.coordinate}
            title={marker.title}
            //description={marker.smallDescription}
            pinColor='navy'
            onPress={() => onMarkerPress(index)}
        >
        </Marker>
      ));
    };

    // const onMarkerPress = async(index: number) => {
    //     setTimeout(() => {
    //     setSelectedMarkerIndex(index);
    //     }, 500); // change the delay time as needed
    //     await new Promise(resolve => setTimeout(resolve, 500));

    //     // Wait for the scrolling to finish before setting should animate map to true
    //     setShouldAnimateMap(false);
    //     scrollViewRef.current?.scrollTo({ x: index * width, y: 0, animated: true });
    //     await new Promise(resolve => setTimeout(resolve, 500));
    //     setShouldAnimateMap(true);

    // };
    const onMarkerPress = async(index: number) => {
      setTimeout(() => {
        setSelectedMarkerIndex(index);
      }, 100);

      setTimeout(() => {
        setShouldAnimateMap(false);
      }, 100);

      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ x: index * width, y: 0, animated: true });
      }, 500); // Adjust the delay as per your requirements

      setTimeout(() => {
        setShouldAnimateMap(true);
      }, 1000);
  };
  
    const onMapPress = () => {
        setShouldAnimateMap(false)
        setSelectedMarkerIndex(-1);
        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    };

    const onRightArrowPress = () => {
        const markerSize = Markers.length-1
        if (selectedMarkerIndex === markerSize || selectedMarkerIndex === -1){
        return
        }
        setSelectedMarkerIndex(selectedMarkerIndex+1);
        scrollViewRef.current?.scrollTo({ x: (selectedMarkerIndex+1) * width, y: 0, animated: true });
    };

    const onLeftArrowPress = () => {
        if (selectedMarkerIndex === 0 || selectedMarkerIndex === -1){
        return
        }
        setSelectedMarkerIndex(selectedMarkerIndex-1);
        scrollViewRef.current?.scrollTo({ x: (selectedMarkerIndex-1) * width, y: 0, animated: true });
    };

    const onProfilePress = async () => {
      await AsyncStorage.setItem('lastIndex', JSON.stringify(selectedMarkerIndex));
      navigate('/profile');
    }

    const onListEventPress = async () => {
      await AsyncStorage.setItem('lastIndex', JSON.stringify(selectedMarkerIndex));
      navigate('/listevent');
    }

    useEffect(() => {
      (async () => {
        const storedLocation = await AsyncStorage.getItem('location');
        const storedLastIndex = await AsyncStorage.getItem('lastIndex');

        console.log(storedLocation, storedLastIndex)
  
        if (storedLocation) {
          setCurrentLocation(JSON.parse(storedLocation));
          if (storedLastIndex != "-1" && storedLastIndex){
            setSelectedMarkerIndex(parseInt(storedLastIndex));

            setTimeout(() => {
              try {
              mapRef.current?.animateCamera({
                  center: {
                  latitude: Markers[parseInt(storedLastIndex)].coordinate.latitude,
                  longitude: Markers[parseInt(storedLastIndex)].coordinate.longitude,
                  },
                  zoom: 16,
              });
              } catch (error) {
                console.error('Error:', error);
              }
            }, 500);

            setTimeout(() => {
              setShouldAnimateMap(false);
            }, 100);
      

            setTimeout(() => {
              scrollViewRef.current?.scrollTo({ x: parseInt(storedLastIndex) * width, y: 0, animated: true });
            }, 100); 

            setTimeout(() => {
              setShouldAnimateMap(true);
            }, 1000);

          }

        } else {
          handleLocate();
        }
      })(); 
    }, []);



    return (
      <View style={styles.container}>
        
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
            ref={mapRef}
            onPress={onMapPress}
        >

            {renderMarkers()}

        </MapView>


        {/* Search Bar, filter, profile */}
        <View style={styles.topView} >
            <GooglePlacesAutocomplete

                placeholder="Search by address"
                fetchDetails={true}
                query={{ key: 'AIzaSyCkzeZxS3W1bWGiP0uCV2vmzp6ndK-2cqY', language: 'en', components: 'country:ca' }}
                onPress={(data, details = null) => {handleSearch(data, details)}}
                styles={{
                    container: {
                    flex: 4,
                    top: 0,
                    left: 0,
                    width: '60%',
                    zIndex: 1,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    },
                    textInputContainer: {
                    flex: 0,
                    height: 54,
                    marginHorizontal: 15,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    },
                    textInput: {
                    height: 40,
                    color: '#5d5d5d',
                    fontSize: 16,
                    borderRadius: 10,
                    backgroundColor: '#E5E4E2',
                    borderWidth: 2,
                    borderColor: '#e2b13c',
                    
                    },
                    predefinedPlacesDescription: {
                    color: 'red',
            
                    },
                }}
                />

            <TouchableOpacity style={styles.filter}>
              <FontAwesome name="filter" size={30} color="#e2b13c" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => onProfilePress()}>
              <Ionicons name="person-circle-outline" size={35} color="#4169E1" style={styles.profile}/>
            </TouchableOpacity>

        </View>
            
        {/* {selectedMarkerIndex >= 0 && 
        <View style={{ alignItems: 'center', padding: 10 }}>
            <QRCode
            value={`myapp://marker?index=${selectedMarkerIndex}`}
            size={150}
            />
        </View>
        } */}


        {/* Cards */}
        {selectedMarkerIndex >= 0 && 
        <Animated.ScrollView
            horizontal
            ref={scrollViewRef}
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={styles.eventScrollView}
            pagingEnabled
            snapToInterval={width}
            snapToAlignment="center"
            onScroll={Animated.event(
            
            [{nativeEvent: { contentOffset: { x: mapAnimation }}}],
            {
                listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                const selectedIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                if (shouldAnimateMap && selectedMarkerIndex !== selectedIndex) {
                    console.log(selectedIndex)
                    setSelectedMarkerIndex(selectedIndex);
                    const { coordinate } = Markers[selectedIndex];
                    mapRef.current?.animateCamera({
                    center: {
                        latitude: coordinate.latitude,
                        longitude: coordinate.longitude,
                    },
                    //zoom: 17,
                    });
                    
                }
                },
                useNativeDriver: false,
            },
            
            )}
    
        >
            {Markers.map((Marker, index) =>
            <View style={styles.eventCard} key={index}>
                <View style={styles.eventTextContent}>
                <Text numberOfLines={1} style={styles.eventPrivacy}>{Marker.privacy} Event</Text>
                <Text numberOfLines={1} style={styles.eventTitle}>{Marker.title}</Text>
                
                <Text numberOfLines={1} style={styles.eventDate}>{Marker.date}, {Marker.time}</Text>
                <Text numberOfLines={1} style={styles.eventSmallDescription}>{Marker.smallDescription}</Text>
                </View>
            </View>
            )}

        </Animated.ScrollView>

        }


    
        
        {/* Zoom, event finder, list event, arrow buttons  */}
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={onLeftArrowPress}>
              <FontAwesome name="arrow-left" size={24} color="black" style={styles.flipEvent}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listEvent} onPress={onListEventPress}>
                <MaterialIcons name="event" size={40} color="#265999" style={styles.listEvent}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.zoomInButton} onPress={handleLocate}>
              <Ionicons name="ios-locate-outline" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialCommunityIcons name="bullseye-arrow" size={40} color="#265999" style={styles.findEvent}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={onRightArrowPress}>
              <FontAwesome name="arrow-right" size={24} color="black" style={styles.flipEvent}/>
            </TouchableOpacity>
        </View>

        {isLoading && <ActivityIndicator style={styles.loadingIcon} size="large" color="#4169E1" />}
        {isLoading && <Text style={styles.loadingText}>Locating your position. This may take a few seconds...</Text>} 
        
        </View>
    );


};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? 25 : 40, //30, 40
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    
    loadingIcon: {
      position: 'absolute',
      alignSelf: 'center',
      top: '50%',
      zIndex: 1,
    },
    loadingText: {
      position: 'absolute',
      top: '60%',
      fontSize: 10,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'black',
    },
    topView: {
      //flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"flex-start",
      //zIndex: 2,
      backgroundColor:"transparent",
      color: "transparent",
      marginRight: 10,
    },
    filter:{
      flex:1,
      marginTop: 5
    },
    profile:{
      padding:1,
      //backgroundColor:"#e2b13c",
      //borderRadius: 50,

    },
    bottomView: {
      position: 'absolute',
      bottom: 20,
      left: 60,
      right: 60,
      zIndex: 1,
      flexDirection: 'row',
      justifyContent:"space-between",
      alignItems:"center",
      
      backgroundColor: '#e2b13c',
      borderRadius: 10,
      padding: 10,
      elevation: 5,
      color:"#e2b13c"
      
      // width:300
    },
    zoomInButton: {
      backgroundColor: '#265999',
      padding: 5,
      borderRadius: 10,
    },
    listEvent:{
      backgroundColor:"#e2b13c",
    },
    findEvent: {

    },
    flipEvent: {
      marginHorizontal: 10
    },
    eventDescriptionContainer: {
      flex: 1,
      height:100,
      overflow:"scroll"
    },
    eventDescription:{
      flexDirection:'column',
      alignSelf:"flex-start",
      backgroundColor:"white",
      borderRadius:6,
      borderColor: "#5d5d5d",
      borderWidth:0.5,
      padding:5,
      width:200,
      maxHeight: 100,
      
    },
    eventScrollView:{
      position:'absolute',
      bottom:"15%",
      left:0,
      right:0,
      paddingVertical: 1,
      //paddingHorizontal:10
    },
    eventCard:{
      elevation:5,
      
      borderTopLeftRadius:55,
      borderTopRightRadius:55,
      borderBottomLeftRadius:55,
      borderBottomRightRadius:55,
      height:200,
      width:width,
      overflow:"hidden",
      borderWidth:2,
      borderColor:"#E5E4E2",
      
    },
    eventTextContent:{
      flex: 1,
      flexDirection:'column',
      paddingHorizontal:25,
      paddingVertical:20,
      alignContent:'flex-start',
      justifyContent:'flex-start',
      backgroundColor:"#265999",

      // Blue Gray Hex #98AFC7 #6082B6 #DBE2E9 #4169E1
    },
    eventTitle:{
      alignSelf:'center',
      padding:10,
      color:"white",
      fontSize:20,
      fontWeight:"bold",
    },
    eventSmallDescription:{
      paddingVertical:10,
      alignSelf:'center',
      color:"white",
      fontSize:16,
      fontWeight:"bold",
    },
    eventPrivacy:{
      color:"white",
    },
    eventDate:{
      fontSize:14,
      fontWeight:"bold",
      color:"#d8bcab",
    }
});
  
  
  
  
  


export default Homepage;