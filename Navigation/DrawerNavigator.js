import React from 'react'
import Profile from '../Screens/Profile'
import BottomTabNavigator from './BottomTabNavigator'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
  render(){
    return(
      <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name='Home' component={BottomTabNavigator}/>
      <Drawer.Screen name='Profile' component={Profile}/>
      </Drawer.Navigator>
    )
  }
}