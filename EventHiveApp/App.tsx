import Homepage from './src/screens/homepage';
import ListEvent from './src/screens/listEvent';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';



function App(){
    console.log("Start");
   
    return (
      <NativeRouter>
        <View style ={styles.container}>
  
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path= "/listevent" element={<ListEvent/>} />
            </Routes>
    
        </View>
      </NativeRouter>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? 0 : 0,
    },
});


export default App;