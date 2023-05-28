import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import { Ionicons } from '@expo/vector-icons'; 

const ListEvent = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
        <Link to="/">
          <Ionicons name="md-caret-back-circle-sharp" size={24} color="black" />
        </Link>
        <Text>List Event</Text>
        

    </View>
  );
};

export default ListEvent;