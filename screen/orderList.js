import React from "react";
 import {SafeAreaView,View,Text,Image} from 'react-native';
import BackHead from "../Components/backHeader";

 const OderList=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <BackHead navigation={navigation}/>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>My Order List Screen</Text>
            </View>
        </SafeAreaView>
    )
 }

 export default OderList;