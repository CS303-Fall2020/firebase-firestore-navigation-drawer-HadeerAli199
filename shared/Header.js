import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation}){

    const openMenu =() =>{
navigation.openDrawer();
    }
    
        return (
            <View style={styles.header}>
                
                <MaterialIcons name ='menu' size ={28} onPress={openMenu}/>
               </View>
        )
    }
    
    
    const styles = StyleSheet.create({
    header: {
    width :'100%',
    height: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red'

    
    }
    ,
    headerText: {
       fontWeight:'bold',
       fontSize:20,
       color:'white',

    
    }
    
    
    });