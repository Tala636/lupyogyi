import React from "react";
 import {SafeAreaView,View,Text,Image, TouchableOpacity} from 'react-native';
 import BackHead from "../Components/backHeader";

 const Inform=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <BackHead navigation={navigation}/>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>Account Information Screen</Text>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                >
                    <Text>go back</Text>
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    )
 }

 export default Inform;