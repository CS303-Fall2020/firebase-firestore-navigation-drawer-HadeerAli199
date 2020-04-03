import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,TouchableWithoutFeedback,Keyboard,FlatList,TextInput,Alert} from 'react-native';
import * as firebase from 'firebase';


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   const onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

             }, (error) => { 
                if(email==''&& password=='')
                {
                    Alert.alert('error','invaild',[{text:'dismess'}
                    ]);
                }
                
                
                else{
                    if(error.message=='The email address is badly formatted.'){
                        Alert.alert('auth/invaild-email',error.message,[{text:'dismess'}
                    ]);
                    }
                  else if(error.message=='The password is invalid or the user does not have a password.'){
                    Alert.alert('auth/wrong-password',error.message,[{text:'dismess'}
                ]);
                  }
                  
                    
                  else  if(error.message=='There is no user record corresponding to this identifier. The user may have been deleted.'){
                    Alert.alert('auth/user-not-found',error.message,[{text:'dismess'}
                ]);
                }
                    else{
                        Alert.alert('auth/network-request-faild',error.message,[{text:'dismess'}
                    ]);
                    }
                }
              });
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }}>
              
               
    <View style={styles.container}>

   

   <View>
       <Text style={styles.text}>login</Text>
            
   </View> 
       
             <View >
                    <TextInput
                    style={styles.input}
                        placeholder='email'
                        value={email}
                        onChangeText={(text) =>  setEmail( text)} 
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                                   
                    />
                    </View>
                    <View>
                    <TextInput
                    style={styles.input2}
                        placeholder='password'
                        value={password}
                        onChangeText={(text) => setPassword(text) }
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    
                    
                    />
                    </View>
                    <View style={styles.container}>
                    <Button onPress={() =>onLoginPress() }   title='login'  style={{  paddingTop:30}}/> 
                    <Button onPress={() => navigation.navigate('Signup')} title='signup' color='green'/> 
                    <Button onPress={() => navigation.navigate('Forgetpassword')} title='forget password' color='red' /> 
       
               </View>
                          
     </View>
       
       
     </TouchableWithoutFeedback>
    )}

const styles=StyleSheet.create({
    input2:{
      marginTop:20,
           
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: 'black'
        },
    input:{
    marginTop:40,
       
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: 'black'
    },
    container:{
        flex:1,
        justifyContent:'space-around',
        
},
    header: {
        height: 20,
        paddingTop: 20,
        backgroundColor: 'red',
        marginBottom:10
    },
    title:{
      
        color:'white',
        fontSize: 20,
         fontWeight:'bold',
         marginLeft:10,marginBottom:100
    },
    text:{
      
        color:'black',
        fontSize: 20,
        paddingTop: 30,
         marginLeft:30
    }
})
