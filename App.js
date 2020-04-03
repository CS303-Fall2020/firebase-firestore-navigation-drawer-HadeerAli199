import React,{useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import RootNavigation from './navigation/RootNavigation';
import ApiKeys from './constant/ApiKeys';
import * as firebase from 'firebase';
import Home from './components/home/Home';
export default function App () {
  
 const[isAuthenticated,setIsAuthenticated]=useState(false)

      if(!firebase.apps.length){firebase.initializeApp(ApiKeys.firebaseConfig);}
   firebase.auth().onAuthStateChanged(function(user){
     setIsAuthenticated(!!user)
   })
  

 
      return (
        <TouchableWithoutFeedback>
    {(isAuthenticated) ? <Home/>:<RootNavigation/>} 
    </TouchableWithoutFeedback>

      );
    }
  

  
  
 

