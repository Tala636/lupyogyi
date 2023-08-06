import React from "react";
 import {SafeAreaView,View,Text,Image} from 'react-native';
 import BackHead from "../Components/backHeader";

 const Favo=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <BackHead navigation={navigation} />
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>Contact Us Screen</Text>
            </View>
        </SafeAreaView>
    )
 }

 export default Favo;