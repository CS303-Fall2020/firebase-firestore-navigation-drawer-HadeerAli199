import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MainTapNavigator from './MainTapNavigator';
import ProfileStack from './profilestack';

const RootDrawerNavigator = createDrawerNavigator({
    Home :{
        screen: MainTapNavigator,
    },
   
    Profile :{
        screen:ProfileStack,
    },
   
   
})
export default createAppContainer(RootDrawerNavigator);