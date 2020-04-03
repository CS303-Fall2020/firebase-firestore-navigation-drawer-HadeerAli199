import React, { useState} from 'react';

import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function Details({ navigation }) {
    const [text,setText] = useState(navigation.getParam('item').title)

    const changeHandle = ( val )=>{
        setText(val)
    }
    const h = navigation.getParam('PressUpdateHandler');
    return (
        
            
            <View style={styles.container}>
                <View style={styles.header}>
            <Text style={styles.title}> more details</Text>
        
                 <View style= {styles.container}>
                <TextInput 
                style = {styles.input}
              
                value={text == '' ?navigation.getParam('item').title:text }
                onChangeText={(text)=>changeHandle(text)}
                multiline={true}
                />
                <Button  title='done' color='red' 
                onPress={()=>{h(navigation.getParam('item' ).id,text)
                 navigation.navigate('Home')}}
                    />
                    </View>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title :{
        textAlign :'center',
        color : 'white',
        fontSize :20,
        fontWeight:'bold',
      }  ,
    header :{
        flex: 1,
        height :80,
        paddingTop :38,
        backgroundColor :'red',
     } ,
    input: {
        
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        
    
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
      }
    
    
    });
