import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class Profile extends React.Component{

render(){
  return(
    <View style={styles.container}>
    <Text style = {styles.text1}>Profile</Text>
    </View>





  )
}
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'black',
 }, 
text1:{
  color:'white',
  fontSize:40,
  fontWeight:'bold',
}
})