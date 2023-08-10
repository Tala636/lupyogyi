import React,{useState,useEffect} from "react";
 import {SafeAreaView,View,Text,Image, TouchableOpacity} from 'react-native';
 import BackHead from "../Components/backHeader";
 import AsyncStorage from "@react-native-async-storage/async-storage";
 import {useDispatch, useSelector } from "react-redux";
 import totalQtyAction from '../stores/action/qty';
 import cartAction from '../stores/action/cart';
 import BottomTabComponent from "../Components/Bottom";

 

 const Inform=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <BackHead navigation={navigation}/>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text></Text>
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