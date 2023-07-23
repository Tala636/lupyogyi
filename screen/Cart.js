import React from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image, } from "react-native";
import BottomTabComponent from "../Components/Bottom";
 
const Cart=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        
          <View>
            <Text>Cart Screen</Text>
          </View>
          <BottomTabComponent navigation={navigation} ScreenName="CartScreen"/>
        </SafeAreaView>
    )
}

export default Cart;