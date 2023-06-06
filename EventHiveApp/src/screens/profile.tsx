import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Link, Navigate} from 'react-router-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigate } from 'react-router-dom';



const Profile = () => {

    const navigate = useNavigate();
    const backArrowPress =async () => {
        navigate('/');
    }
    const settingButtonPress =async () => {
        navigate('/settings');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
    
                <TouchableOpacity onPress={backArrowPress}>
                    <Ionicons name="md-caret-back-circle-sharp" size={24} color="black" style={styles.backButtonIcon}/>
                </TouchableOpacity>


                <TouchableOpacity onPress={settingButtonPress}>
                    <Ionicons name="settings" size={24} color="black" style={styles.backButtonIcon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.middleView}>
                <Text>Profile Picture</Text>
                <Text>Friends</Text>
                <Text>Hosted</Text>
                <Text>Supported</Text>
            </View>
            
            <View style={styles.bottomView}>
                <Text>List Event</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 20 : 40, //30, 40
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

    middleView: {
        flex:1,
        alignItems: 'center',
    },
    bottomView: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:"#e2b13c",
    },

})

export default Profile;