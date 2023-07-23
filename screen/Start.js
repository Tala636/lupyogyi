import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,Image, } from "react-native"; 

const StartScreen=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>StartScreen</Text>
            <Image source={require}/>

            
        </View>
        </SafeAreaView>
    )
}

export default StartScreen;