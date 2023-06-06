import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View, StyleSheet, Platform, ScrollView} from 'react-native';
import {Link} from 'react-router-native';
import { Ionicons } from '@expo/vector-icons'; 

const ListEvent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
          <Link to="/">
              <Ionicons name="md-caret-back-circle-sharp" size={24} color="black" style={styles.backButtonIcon}/>
          </Link>
        </View>

        <View style={styles.listEventText}>
            <Text>List Event</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 20 : 40, //30, 40
        //paddingHorizontal: 5,
        backgroundColor: "white",
    },
    topView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 3,
        margin: 0,
    },
    backButtonIcon: {
        backgroundColor:"white",
    },
    listEventText: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
    
})

export default ListEvent;