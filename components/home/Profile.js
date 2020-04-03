import React from 'react';
import {
  StyleSheet
  , Text
  , TouchableOpacity, View} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as firebase from 'firebase';



export default function Profile({ navigation }) {

 

  

  onSignoutPress = () => {
    firebase.auth().signOut();
  };


  return (

      <View style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity onPress={() => onSignoutPress()}>
                <Text style={styles.title}>SignOut</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Profile page</Text>
            </View>

     </View>

   

  );
}

const styles = StyleSheet.create({

 title :{
   color : 'white',
   fontSize :25,
   fontWeight:'bold',
   marginLeft:10,
   marginBottom:15
 }  
,
  container: {
    flex: 1,
    backgroundColor: 'red',
    height :20,
    paddingTop :20,
    flexDirection: 'column',

  },
 
});

