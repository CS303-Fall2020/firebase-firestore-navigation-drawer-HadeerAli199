import React, { useState } from 'react';
import {StyleSheet, Text, View,Button,TouchableWithoutFeedback,Keyboard,TextInput,Alert} from 'react-native';
import * as firebase from 'firebase';


export default function Forgetpassword({navigation}) {
  
    const [email, setEmail] = useState('')
    const [reset, setreset] = useState('')
   const onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
               Alert.alert("Email sent successfully,please follow instructions to reset your password");
            }, (error) => {
                if(email=='' )
                {
                    Alert.alert('error','invaild',[{text:'dismess'}
                    ]);
                }
              
                
                
                else{
                    
                    if(error.message=='The email address is badly formatted.'){
                        Alert.alert('auth/invaild-email',error.message,[{text:'dismess'}
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
<View style={styles.container} >


  
    <View>
        <Text style={styles.text}>Forget Password?</Text>
        
    </View>
    < TextInput
        style={styles.input}
            placeholder='email'
            value={email}
            onChangeText={(text) =>  setEmail( text)} 
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        
           />
           {/* <View>       <  Text> style={styles.message}>Email was sent successfully,please follow instructions to reset your password</Text>
</View> */}

    <View style={styles.container}>
     

                  <Button onPress={() =>onResetPasswordPress() }title='SEND RESET EMAIL' /> 
                   <Button onPress={() => navigation.navigate('Signup')} title='signup' color='red' /> 
                  <Button onPress={() => navigation.navigate('Login')} title='login' color='red'/> 

    </View>
    
 </View>
 </TouchableWithoutFeedback>
)}
   


const styles=StyleSheet.create({
    message:{
       
             
        color:'black',
        fontSize: 20,
          },
    input2:{
      //  marginTop:35,
           
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
