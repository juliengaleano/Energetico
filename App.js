import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform,ScrollView} from 'react-native';
import CountryPicker from './src/component/countries';


export default function App() {
 


  return (
    
<ScrollView>
<View style={styles.container}>
        <CountryPicker/>
       
       
      
      <StatusBar style="auto" /> 
      
      
      
    </View>

</ScrollView>
      

      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: 'white',
    alignItems: 'center',
    
    
  },
});
