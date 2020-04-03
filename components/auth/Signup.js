import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,TouchableWithoutFeedback,Keyboard,TextInput,Alert} from 'react-native';
import * as firebase from 'firebase';


 export default function Signup({navigation}) {

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

   const onSignupPress = () => {
   
    if (password !== confirm) {
        Alert.alert("Passwords do not match");
return;
    }
       
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() => { 

            }, (error) => {
                if(error.message=='The email address is already in use by another account.'){
                    Alert.alert('auth/email-already-in-use',error.message,[{text:'dismess'}
                ]);
                }
                
                
                else{
                    
                    if(email==''&& password==''&& confirm=='' )
                    {
                        Alert.alert('error','invaild',[{text:'dismess'}
                        ]);
                    }
                  else  if(error.message=='The email address is badly formatted.'){
                        Alert.alert('auth/invaild-email',error.message,[{text:'dismess'}
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
            <Text style={styles.text}>signup</Text>
        </View>
        <TextInput
            style={styles.input}
                placeholder='email'
                value={email}
                onChangeText={(text) =>  setEmail( text)} 
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            
            />
  <TextInput
            style={styles.input2}
                placeholder='password'
                value={password}
                onChangeText={(text) => setPassword(text) }
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            
            />
                      
  <TextInput
            style={styles.input3}
                placeholder=' confirm password'
                value={confirm}
                onChangeText={(text) =>  setConfirm( text) }
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            


            />
                  <View style={styles.container}>
                          <Button onPress={() =>onSignupPress() }  title='signup' color='blue' /> 
                        
                      <Button onPress={() => navigation.navigate('Login')} title='login' color='green'/> 
                      <Button  onPress={() => navigation.navigate('Forgetpassword')}title='forget password' color='red' /> 
                      </View>
</View>
     
     </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
      
    },
    input2:{
        marginTop:20,
           
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: 'black'
        },
        input3:{
            marginTop:25,
               
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

    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'red'
    },
    title:{
      
        color:'white',
        fontSize: 20,
         fontWeight:'bold',
         marginLeft:10,marginTop:10
    },
    text:{
      
        color:'black',
        fontSize: 20,
        paddingTop: 30,
         marginLeft:30
    }
})
