    import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Forgetpassword from "../components/auth/Forgetpassword";
import RootDrawerNavigator from './Drawer';
import MainTapNavigator from './MainTapNavigator';


const screens ={
 
    Login: { 
        screen: Login,
        navigationOptions:{
            title:'LOGIN',
            headerLeft: null,

            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
              },

        }
    },
    
    Signup: {
        screen: Signup,
        navigationOptions:{
            title:'SIGNUP',
            headerLeft: null,
            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    },
    Forgetpassword: { 
        screen: Forgetpassword,
        navigationOptions:{
            title:'ForgetPassword',
            headerLeft: null,
            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    },
    
  
    main: { 
        screen: RootDrawerNavigator,
      
    },
}
const RootNavigation = createStackNavigator(screens);

export default createAppContainer(RootNavigation);