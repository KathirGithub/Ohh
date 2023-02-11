import React from 'react'
import {Text,View,StyleSheet,SafeAreaView,StatusBar,Platform,Image,FlatList} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import StoryCard from './StoryCard'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
var customFonts = {'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')}
var stories = require('../temp_stories.json')


export default class Feed extends React.Component{

constructor(){
  super()
  this.state = {
    fontsLoaded: false

  }
}

async loadFontsAsync(){
  await Font.loadAsync(customFonts)
  this.setState({fontsLoaded:true})
}

componentDidMount(){
this.loadFontsAsync()
}
renderItem=({item:story})=>{
return <StoryCard story={story}/>
}

render(){
  if(this.state.fontsLoaded){
    SplashScreen.hideAsync()
  
  return(
    <View style={styles.container}>
   <SafeAreaView style={styles.droidSafeArea}/>
  
   <View style={styles.appTitle}>
   
   <View style={styles.appIcon}>
   <Image style={styles.iconImage}
   source={require('../assets/logo.png')}
   />
   </View>
   
   <View  style={styles.appTitleTextContainer}>
   <Text style={styles.appTitleText}>Story Telling</Text>
   </View>
   
   </View>

  <View  style={styles.cardContainer} >
  <FlatList
  data={stories}
  renderItem={this.renderItem}
  keyExtractor={this.keyExtractor}
  />
  </View>   
    
    </View>
  )
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});