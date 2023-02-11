import React from 'react'
import {StyleSheet} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize' 
import CreateStory from '../Screens/createStory'
import Feed from '../Screens/Feed'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createMaterialBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
render(){
  return(
    <Tab.Navigator   
    labeled={false}
    barStyle={styles.bottomTabsStyle}

     screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = "home";
              } else if (route.name === "Story") {
                iconName = "add-circle-outline";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={RFValue(25)}
                  color={color}
                  style={styles.icons}
                  />
              )
            }
            })}>
    <Tab.Screen name='Feed' component={Feed} options={{headerShown:false}}/>
    <Tab.Screen name='Story' component ={CreateStory} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}
}

const styles = StyleSheet.create({
  bottomTabsStyle:{
    backgroundColor:'#2f345d',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute',  
  },
  icons:{
    width:50,
    height:50,
  }
})