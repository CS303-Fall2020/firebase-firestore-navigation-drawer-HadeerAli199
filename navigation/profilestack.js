import { createStackNavigator } from "react-navigation-stack";
import Profile from "../components/home/Home";


const screens ={
    Profile: { 
        screen: Profile,
        navigationOptions:{
            title:'',
            headerStyle:{backgroundColor:'white'},
          

        }
    },
   
}
const ProfileStack = createStackNavigator(screens);

export default ProfileStack;