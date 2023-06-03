import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View, StyleSheet, Platform} from 'react-native';
import {Link} from 'react-router-native';
import { Ionicons } from '@expo/vector-icons'; 
import {Auth} from 'aws-amplify';
import { Entypo } from '@expo/vector-icons'; 

const Settings = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Link to="/profile">
                <Ionicons name="md-caret-back-circle-sharp" size={24} color="black" style={styles.backButtonIcon}/>
            </Link>
        </View>
        
        <View style={styles.settingsText}>
            <Text>Settings</Text>
        </View>

        <View style={styles.logOut}>
            <Text style={styles.logOutText}>Log out</Text>
            <Entypo name="log-out" size={24} color="black" style={styles.logOutButton} onPress={() => {
                Auth.signOut();
            }}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 20 : 40, //30, 40
        backgroundColor: "#CDCDCD",
    },
    topView: {
        backgroundColor: '#CDCDCD',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 3,
        margin: 0,
    },
    backButtonIcon: {
        backgroundColor:"#CDCDCD",
    },
    settingsText: {
      
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logOut: {
        flexDirection:'row',
        padding: 10,
        alignItems: "flex-start",
        marginTop: 30,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:"black",
    },
    logOutText:{
        color:"red",
    },
    logOutButton: {
        paddingHorizontal: 10,
        color:"red"
    },
})

export default Settings;