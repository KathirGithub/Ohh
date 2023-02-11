import * as React from 'react';
import DrawerNavigator from './Navigation/DrawerNavigator'
import {NavigationContainer} from '@react-navigation/native'

global.__reanimatedWorkletInit=()=>{}

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>

    )
  }
}
