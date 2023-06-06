import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, Text, View, StyleSheet, Platform, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import {GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import { Picker } from "@react-native-picker/picker";



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


  const handleSubmit = () => {
      // Validation and submission logic
      if (!eventName || !date || !country || !postalCode) {
        console.log('Please fill out all required fields');
      return;
      }

      const formData = {
      eventName,
      organization,
      eventType,
      ageLimit,
      date,
      startTime,
      endTime,
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
          smallDescription,
          aboutEvent,
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

      console.log(formData);
  };

  const handleSearch = async (data:any, details:any) => {
    console.log(data);
    console.log(details);
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
              <Text>Listing Public Event</Text>
            </View>
        </View>

        
        <View>
        
          {/* Event Privacy */}
          {eventPrivacyComponent &&
            <View>
              <Text style={styles.sectionTitle}>Event Privacy</Text>
              <Picker
                selectedValue={eventPrivacy}
                onValueChange={(itemValue) => setEventPrivacy(itemValue)}
                style={styles.dropdown}
              >
                <Picker.Item label="Public Event" value="Public Event" />
                <Picker.Item label="Private Event" value="Private Event" />
              </Picker>

              <Button title="Continue" onPress={eventPrivacySubmit} />
            </View>
          }

          {/* Event Details */}
          {eventDetailsComponent &&
            <View>
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
              <Button title="Continue" onPress={eventDetailsSubmit} />
            </View>
          }
          

          {/* Date/Time */}
          {dateTimeComponent &&
            <View>
              <Text style={styles.sectionTitle}>Date/Time</Text>
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
              <Button title="Continue" onPress={dateTimeSubmit} />
            </View>
          }


          {/* Location */}
          {locationComponent &&
            <View>
            <Text style={styles.sectionTitle}>Location</Text>
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

              <Button title="Continue" onPress={locationSubmit} />
            </View>
          }

          {/* Event Description */}
          {eventDescriptionComponent &&
            <View>
              <Text style={styles.sectionTitle}>Event Description</Text>
              <TextInput
                  style={styles.textArea}
                  placeholder="Small Description"
                  value={smallDescription}
                  onChangeText={text => setSmallDescription(text)}
                  multiline={true}
              />
              <TextInput
                  style={styles.textArea}
                  placeholder="About Event"
                  value={aboutEvent}
                  onChangeText={text => setAboutEvent(text)}
                  multiline={true}
              />

              <Button title="Continue" onPress={eventDescriptionSubmit} />
            </View>
          }

          {/* Contact */}
          {contactComponent &&
            <View>
              <Text style={styles.sectionTitle}>Contact</Text>
              <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={text => setPhone(text)} />
              <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
              <TextInput style={styles.input} placeholder="Website" value={website} onChangeText={text => setWebsite(text)} />
              <TextInput style={styles.input} placeholder="Instagram" value={ig} onChangeText={text => setIG(text)} />
              <TextInput style={styles.input} placeholder="Twitter" value={twitter} onChangeText={text => setTwitter(text)} />
              <TextInput style={styles.input} placeholder="Snapchat" value={snapchat} onChangeText={text => setSnapchat(text)} />
              <TextInput style={styles.input} placeholder="TikTok" value={tiktok} onChangeText={text => setTiktok(text)} />
              <TextInput style={styles.input} placeholder="YouTube" value={youtube} onChangeText={text => setYoutube(text)} />

              <Button title="Continue" onPress={contactSubmit} />
            </View>
          }


          {/* Special Accommodation */}
          {specialAccommodationComponent &&
            <View>
              <Text style={styles.sectionTitle}>Special Accommodation</Text>
              <View style={styles.checkboxContainer}>
                  <CheckBox
                  title="Wheelchair Accessibility"
                  checked={wheelchairAccessibility}
                  onPress={() => setWheelchairAccessibility(!wheelchairAccessibility)}
                  />
                  {/* Add more checkboxes for other accommodations */}
              </View>

              {/* Submit Button */}
              <Button title="Submit" onPress={handleSubmit} />
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
    paddingTop: Platform.OS === 'android' ? 20 : 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  topView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  backButtonIcon: {
    backgroundColor: 'white',
  },
  listEventText: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  searchBarContainer: {
    marginBottom: 10,
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
    marginBottom: 10,
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
    backgroundColor: 'white', // Add this style
    marginTop: 10, // Add this style
    borderWidth: 1, // Add this style
    borderColor: '#CCCCCC', // Add this style
  },
  listViewRow: {
    paddingVertical: 10, // Add this style
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    marginBottom: 30,
  },
});

export default ListEvent;
function Float(lng: any): React.SetStateAction<number> {
  throw new Error('Function not implemented.');
}

