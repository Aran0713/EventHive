import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, Text, View, StyleSheet, Platform, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import {GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import { Picker } from "@react-native-picker/picker";
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { format } from 'date-fns';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createEvent } from '../graphql/mutations';



const ListEvent = () => {
  const navigate = useNavigate();
  const backArrowPress =async () => {
      navigate('/');
  }

  // Form data
  const [eventPrivacy, setEventPrivacy] = useState('');
  const [eventName, setEventName] = useState('');
  const [organization, setOrganization] = useState('');
  const [eventType, setEventType] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [smallDescription, setSmallDescription] = useState('');
  const [aboutEvent, setAboutEvent] = useState('');
  const [schedule, setSchedule] = useState('');
  const [ticketInfo, setTicketInfo] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [ig, setIG] = useState('');
  const [twitter, setTwitter] = useState('');
  const [snapchat, setSnapchat] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [youtube, setYoutube] = useState('');
  const [wheelchairAccessibility, setWheelchairAccessibility] = useState(false);
  const [signLanguageInterpretation, setSignLanguageInterpretation] = useState(false);
  const [closedCaptioning, setClosedCaptioning] = useState(false);
  const [assistiveListeningSystems, setAssistiveListeningSystems] = useState(false);
  const [brailleMaterials, setBrailleMaterials] = useState(false);
  const [flexibleCommunicationOptions, setFlexibleCommunicationOptions] = useState(false);
  const [accessibleSeating, setAccessibleSeating] = useState(false);
  const [serviceAnimalAccommodation, setServiceAnimalAccommodation] = useState(false);
  const [sensoryAccommodations, setSensoryAccommodations] = useState(false);

  // Component rendering
  const [eventPrivacyComponent, setEventPrivacyComponent] = useState(true);
  const [eventDetailsComponent, setEventDetailsComponent] = useState(false);
  const [dateTimeComponent, setDateTimeComponent] = useState(false);
  const [locationComponent, setLocationComponent] = useState(false);
  const [eventDescriptionComponent, setEventDescriptionComponent] = useState(false);
  const [contactComponent, setContactComponent] = useState(false);
  const [specialAccommodationComponent, setSpecialAccommodationComponent] = useState(false);
  
  // Error Handling, required fields
  const [formErrors, setFormErrors] = useState(false);

  // Button Presses
  const eventPrivacySubmit = () => {
    setEventPrivacyComponent(false);
    setEventDetailsComponent(true);
  }
  const eventDetailsSubmit = () => {
    if (eventName === '' || organization === '') {
      setFormErrors(true);
    }else{
      setFormErrors(false);
      setEventDetailsComponent(false);
      setDateTimeComponent(true);
    }
  }
  const dateTimeSubmit = () => {
    if (date === '') {
      setFormErrors(true);
    }else{
      setFormErrors(false);
      setDateTimeComponent(false);
      setLocationComponent(true);
    }
  }
  const locationSubmit = () => {
    if (city === '') {
      setFormErrors(true);
    }else{
      setFormErrors(false);
      setLocationComponent(false);
      setEventDescriptionComponent(true);
    }
  }
  const eventDescriptionSubmit = () => {
    setEventDescriptionComponent(false);
    setContactComponent(true);
  }
  const contactSubmit = () => {
    setContactComponent(false);
    setSpecialAccommodationComponent(true);
  }

  // Handle the calendar event
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const handleConfirm = (selectedDate: Date) => {
  //   const formattedDate = format(selectedDate, 'yyyy-MM-dd');
  //   setDate(formattedDate);
  //   hideDatePicker();
  // };
  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };


  // Final submit Button
  const handleSubmit = async () => {
      // Validation and submission logic
      if (!eventName || !date || !country || !postalCode) {
        console.log('Please fill out all required fields');
      return;
      }

      const formData = {
        organization,
        eventName,
        eventPrivacy,
        eventType,
        smallDescription,
        ageLimit,
        ticketInfo,
        dateTime: {
          date,
          startTime,
          endTime,
        },
        location: {
          country,
          province,
          city,
          postalCode,
          address,
          coordinates: {
          longitude,
          latitude,
          },
        },
        description: {
          aboutEvent,
          schedule
        },
        contact: {
          phone,
          email,
          website,
          ig,
          twitter,
          snapchat,
          tiktok,
          youtube,
        },
        specialAccommodation: {
          wheelchairAccessibility,
          signLanguageInterpretation,
          closedCaptioning,
          assistiveListeningSystems,
          brailleMaterials,
          flexibleCommunicationOptions,
          accessibleSeating,
          serviceAnimalAccommodation,
          sensoryAccommodations,
        },
      };

  
    

    try {

      const user = await Auth.currentAuthenticatedUser(); 

      const response = await API.graphql(graphqlOperation(createEvent, {
        input: {
          organization: formData.organization,
          userName: user.username,
          userId: user.attributes.sub,
          eventName: formData.eventName,
          eventPrivacy: formData.eventPrivacy,
          eventType: formData.eventType,
          smallDescription: formData.smallDescription,
          ageLimit: formData.ageLimit,
          ticketInfo: formData.ticketInfo,
          dateTime: {
            date: formData.dateTime.date,
            startTime: formData.dateTime.startTime,
            endTime: formData.dateTime.endTime
          },
          location: {
            country: formData.location.country,
            province: formData.location.province,
            city: formData.location.city,
            postalCode: formData.location.postalCode,
            address: formData.location.address,
            coordinates: {
              longitude: formData.location.coordinates.longitude,
              latitude: formData.location.coordinates.latitude
            }
          }, 
          description: {
            aboutEvent: formData.description.aboutEvent,
            schedule: formData.description.schedule
          },
          contact: {
            phone: formData.contact.phone,
            email: formData.contact.email,
            website: formData.contact.website,
            ig: formData.contact.ig,
            twitter: formData.contact.twitter,
            snapchat: formData.contact.snapchat,
            tiktok: formData.contact.tiktok,
            youtube: formData.contact.youtube
          },
          specialAccommodation: {
            wheelchairAccessibility: formData.specialAccommodation.wheelchairAccessibility,
            signLanguageInterpretation: formData.specialAccommodation.signLanguageInterpretation,
            closedCaptioning: formData.specialAccommodation.closedCaptioning,
            assistiveListeningSystems: formData.specialAccommodation.assistiveListeningSystems,
            brailleMaterials: formData.specialAccommodation.brailleMaterials,
            flexibleCommunicationOptions: formData.specialAccommodation.flexibleCommunicationOptions,
            accessibleSeating: formData.specialAccommodation.accessibleSeating,
            serviceAnimalAccommodation: formData.specialAccommodation.serviceAnimalAccommodation,
            sensoryAccommodations: formData.specialAccommodation.sensoryAccommodations
          },
        }
      }))

      console.log("Response: ", response);

    } catch (e) { 
      console.log(e);
    }


  };

  const handleSearch = async (data:any, details:any) => {
    setCountry(details?.address_components?.find((component: { types: string | string[]; }) => component.types.includes('country'))?.long_name || '');
    setProvince(details?.address_components?.find((component: { types: string | string[]; }) => component.types.includes('administrative_area_level_1'))?.long_name || '');
    setCity(details?.address_components?.find((component: { types: string | string[]; }) => component.types.includes('locality'))?.long_name || '');
    setPostalCode(details?.address_components?.find((component: { types: string | string[]; }) => component.types.includes('postal_code'))?.long_name || '');
    setAddress(details?.formatted_address || '');
    setLongitude(String(details?.geometry.location.lng) || "");
    setLatitude(String(details?.geometry?.location?.lat) || "");
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topView}>
          <TouchableOpacity onPress={backArrowPress}>
            <Ionicons name="md-caret-back-circle-sharp" size={24} color="black" style={styles.backButtonIcon} />
          </TouchableOpacity>

          <View style={styles.listEventText}>
            <Text>Event Listing</Text>
          </View>
      </View>

      
      <View style={styles.middleView}>
      
        {/* Event Privacy */}
        {eventPrivacyComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Event Privacy</Text>
            <Picker
              selectedValue={eventPrivacy}
              onValueChange={(itemValue) => setEventPrivacy(itemValue)}
              style={styles.dropdown}
            >
              <Picker.Item label="Public Event" value="Public Event" />
              <Picker.Item label="Private Event" value="Private Event" />
            </Picker>
            
            <View style={styles.submitButton}>  
              <Button title="Continue" onPress={eventPrivacySubmit} color='#265999'/>
            </View>
          </View>
        }

        {/* Event Details */}
        {eventDetailsComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Event Details</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Event Name*"
              value={eventName}
              onChangeText={text => setEventName(text)}
            
            />
      
            <TextInput
              style={styles.input}
              placeholder="Organization*"
              value={organization}
              onChangeText={text => setOrganization(text)}
            />
        
            <TextInput
              style={styles.input}
              placeholder="Event Type"
              value={eventType}
              onChangeText={text => setEventType(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Age Limit"
              value={ageLimit}
              onChangeText={text => setAgeLimit(text)}
            />  
          
            <View style={styles.submitButton}>
              <Button title="Continue" onPress={eventDetailsSubmit} color='#265999'/>
            </View>
          </View>
            
        }
        

        {/* Date/Time */}
        {dateTimeComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Date/Time</Text>
            {/* <Button onPress={showDatePicker} title="Show Date Picker" />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            /> */}
            <TextInput
                style={styles.input}
                placeholder="Date* e.g., 2023-07-25"
                value={date}
                onChangeText={text => setDate(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Start Time"
                value={startTime}
                onChangeText={text => setStartTime(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="End Time"
                value={endTime}
                onChangeText={text => setEndTime(text)}
            />
            <View style={styles.submitButton}>
              <Button title="Continue" onPress={dateTimeSubmit} color='#265999'/>
            </View> 
      
          </View>
        }


        {/* Location */}
        {locationComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Event Location</Text>
            <GooglePlacesAutocomplete
              placeholder="Search by address*"
              fetchDetails={true}
              query={{ key: 'AIzaSyCkzeZxS3W1bWGiP0uCV2vmzp6ndK-2cqY', language: 'en', components: 'country:ca' }}
              onPress={(data, details) => handleSearch(data, details)}
              styles={{
                  container: styles.searchBar,
                  textInputContainer: styles.searchBarInputContainer,
                  textInput: styles.searchBarInput,
                  listView: styles.listView, // Add this style
                  row: styles.listViewRow, // Add this style
              }}
            />
          
            <TextInput style={styles.input} placeholder="Country" value={country} editable={false} />
            <TextInput style={styles.input} placeholder="Province" value={province} editable={false} />
            <TextInput style={styles.input} placeholder="City" value={city} editable={false} />
            <TextInput style={styles.input} placeholder="Postal Code" value={postalCode} editable={false} />
            <TextInput style={styles.input} placeholder="Address" value={address} editable={false} />
            <TextInput style={styles.input} placeholder="Longitude*" value={String(longitude)} editable={false} />
            <TextInput style={styles.input} placeholder="Latitude*" value={String(latitude)} editable={false} />

            <View style={styles.submitButton}>
              <Button title="Continue" onPress={locationSubmit} color='#265999'/>
            </View>
          </View>
        }

        {/* Event Description */}
        {eventDescriptionComponent &&

          <View style={styles.bottomView}>
          
            
            <ScrollView style={styles.eventDescriptionContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                
                <View>
                  <Text style={styles.sectionTitle}>Event Description</Text>

                  <Text style={styles.inputDescription}>Provide a small description of the event. Remember to keep it short and sweet.</Text>
                  <TextInput
                      style={[{ height: 70 }, styles.textArea]}
                      placeholder="Small Description"
                      value={smallDescription}
                      onChangeText={text => setSmallDescription(text)}
                      multiline={true}
                  />

                  <Text style={styles.inputDescription}>Provide a comprehensive overview of the event, detailing what attendees can expect. This is an opportunity to communicate the complete experience and what they will encounter throughout the event.</Text>
                  <TextInput
                      style={[{ height: 200 }, styles.textArea]}
                      placeholder="Large Description"
                      value={aboutEvent}
                      onChangeText={text => setAboutEvent(text)}
                      multiline={true}
                  />

                  <Text style={styles.inputDescription}>Share the event schedule, including important timings and highlights. Choose to emphasize key moments or provide a comprehensive breakdown of the event.</Text>
                  <TextInput
                      style={[{ height: 150 }, styles.textArea]}
                      placeholder="Event Schedule"
                      value={schedule}
                      onChangeText={text => setSchedule(text)}
                      multiline={true}
                  />

                  <Text style={styles.inputDescription}>Offer details about ticket information. Inform users about how they can purchase tickets to attend the event.</Text>
                  <TextInput
                    style={[{ height: 100 }, styles.textArea]}
                    placeholder="Ticket Information"
                    value={ticketInfo}
                    onChangeText={text => setTicketInfo(text)}
                    multiline={true}
                  /> 
                </View>
         
              </TouchableWithoutFeedback>
            </ScrollView>
            
            <View style={styles.submitButton}>
              <Button title="Continue" onPress={eventDescriptionSubmit} color='#265999'/>
            </View>
          </View>
          
          
        }

        {/* Contact */}
        {contactComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={text => setPhone(text)} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.input} placeholder="Website" value={website} onChangeText={text => setWebsite(text)} />
            <TextInput style={styles.input} placeholder="Instagram" value={ig} onChangeText={text => setIG(text)} />
            <TextInput style={styles.input} placeholder="Twitter" value={twitter} onChangeText={text => setTwitter(text)} />
            <TextInput style={styles.input} placeholder="Snapchat" value={snapchat} onChangeText={text => setSnapchat(text)} />
            <TextInput style={styles.input} placeholder="TikTok" value={tiktok} onChangeText={text => setTiktok(text)} />
            <TextInput style={styles.input} placeholder="YouTube" value={youtube} onChangeText={text => setYoutube(text)} />
            
            <View style={styles.submitButton}>
              <Button title="Continue" onPress={contactSubmit} color='#265999'/>
            </View>
          </View>
        }


        {/* Special Accommodation */}
        {specialAccommodationComponent &&
          <View style={styles.bottomView}>
            <Text style={styles.sectionTitle}>Special Accommodation</Text>
            <ScrollView style={styles.checkboxContainer}>
              <CheckBox
              title="Wheelchair Accessibility"
              checked={wheelchairAccessibility}
              onPress={() => setWheelchairAccessibility(!wheelchairAccessibility)}
              />
              <CheckBox
                title="Sign Language Interpretation"
                checked={signLanguageInterpretation}
                onPress={() => setSignLanguageInterpretation(!signLanguageInterpretation)}
              />
              <CheckBox
                title="Closed Captioning"
                checked={closedCaptioning}
                onPress={() => setClosedCaptioning(!closedCaptioning)}
              />
              <CheckBox
                title="Assistive Listening Systems"
                checked={assistiveListeningSystems}
                onPress={() => setAssistiveListeningSystems(!assistiveListeningSystems)}
              />
              <CheckBox
                title="Braille Materials"
                checked={brailleMaterials}
                onPress={() => setBrailleMaterials(!brailleMaterials)}
              />
              <CheckBox
                title="Flexible Communication Options"
                checked={flexibleCommunicationOptions}
                onPress={() => setFlexibleCommunicationOptions(!flexibleCommunicationOptions)}
              />
              <CheckBox
                title="Accessible Seating"
                checked={accessibleSeating}
                onPress={() => setAccessibleSeating(!accessibleSeating)}
              />
              <CheckBox
                title="Service Animal Accommodation"
                checked={serviceAnimalAccommodation}
                onPress={() => setServiceAnimalAccommodation(!serviceAnimalAccommodation)}
              />
              <CheckBox
                title="Sensory Accommodations"
                checked={sensoryAccommodations}
                onPress={() => setSensoryAccommodations(!sensoryAccommodations)}
              />
            </ScrollView>

            <View style={styles.submitButton}>
              <Button title="Submit" onPress={handleSubmit} color='#265999'/>
            </View>
          </View>
        }


        

        {/* Required field Error message */}
        {formErrors && 
          <Text style={styles.error}>Please enter values for the required fields</Text>
        }
    
      </View>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    //paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'android' ? 20 : 40,
  },
  topView: {
    backgroundColor: '#265999',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:10,
    
  },
  middleView: {
    flex: 1,
    backgroundColor:"white",
  },
  backButtonIcon: {
    paddingRight: 10,
    backgroundColor: '#265999',
  },
  listEventText: {
    //flex: 1,
    alignItems: 'center',
    color: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: "5%",
    textAlign: 'center',
  },
  inputDescription: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: "2%",
  
    marginHorizontal: 40,
    textAlign:'left',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 50,
  },
  textArea: {
    // height: 100,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: 50,
    textAlignVertical: 'top',
  },
  searchBarContainer: {
    //marginBottom: 10,
    flex: 0,
  
  },
  searchBar: {
    flex: 0,
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,

  },
  searchBarInputContainer: {
    flex: 0,
    height: 54,
    marginHorizontal: 15,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInput: {
    height: 40,
    color: '#5d5d5d',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#E5E4E2',
    borderWidth: 2,
    borderColor: 'black',
  },
  checkboxContainer: {
    marginBottom: 120,
    paddingLeft: 20,
    paddingRight: 50,
    // alignSelf: 'center',
  },
  eventDescriptionContainer: {
    marginBottom: 120,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  listView: {
    backgroundColor: 'white', 
    marginTop: 10, 
    borderWidth: 1,
    borderColor: '#CCCCCC', 
    zIndex: 1,
  },
  listViewRow: {
    paddingVertical: 10,
    zIndex: 1,
  },
  error: {
    color: 'red',
    position: "absolute",
    // top: 565,
    bottom: 0,
    alignSelf: 'center',
    zIndex: -1,

  },
  dropdown: {
    height: 10,
    marginHorizontal: 50,
  },
  submitButton: {
    position: "absolute",
    // top: 520,
    bottom: 30,
    //flexDirection: 'row',
    //justifyContent:"center",
    alignSelf: "center",

  },
  bottomView: {
    flex: 1,
    // backgroundColor: "blue",
  },
});

export default ListEvent;


// function Float(lng: any): React.SetStateAction<number> {
//   throw new Error('Function not implemented.');
// }

