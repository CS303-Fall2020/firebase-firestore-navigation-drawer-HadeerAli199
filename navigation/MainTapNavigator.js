import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/home/Home";
import Details from "../components/home/Details";

const screens ={
    Home: { 
        screen: Home,
        navigationOptions:{
            title:'',
            headerStyle:{backgroundColor:'white'},
          

        }
    },
    Details: {
        screen: Details,
        navigationOptions:{
            title:'',
            headerStyle:{backgroundColor:'white'}
        }
    },
}
const MainTapNavigator = createStackNavigator(screens);

export default createAppContainer(MainTapNavigator);