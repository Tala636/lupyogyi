import React from "react";
import {View,Image,Text,TouchableOpacity,Dimensions,SafeAreaView} from 'react-native';

const Wid=Dimensions.get('screen').width

const BackHead=({navigation})=>{
    return(
      <SafeAreaView style={{elevation:5,height:40,backgroundColor:'#8df7db',width:Wid,padding:5}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',justifyContent:'space-between'}}>
   <TouchableOpacity 
   onPress={()=>navigation.goBack()}
   style={{marginLeft:5}}>
   <Image style={{width:35,height:35}} source={require('../assets/icons/icons8-back-50.png')}/>
   </TouchableOpacity>
   
  
 

  </View>
  </SafeAreaView>
    )
}

export default BackHead;