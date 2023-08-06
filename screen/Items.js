import React,{useState,useEffect} from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions, BackHandler, } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import CartAction from '../stores/action/cart';
import totalQty from '../stores/action/qty';
import {useDispatch} from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Flowers from "../Products/Flowers";


 const Wid=Dimensions.get('screen').width;

 





const ShowItems=({navigation,route})=>{

  





    return(
        <SafeAreaView style={{flex:1}}>
        <HeaderComponent navigation={navigation}/>
         <View style={{flex:1,marginTop:100}}>
           <FlatList 
           style={{}}
            data={Flowers}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                  
                         <TouchableOpacity 
                         onPress={()=>{navigation.navigate('detail',{product:item})}}

                         key={index} 
                         style={{flex:1,width:Wid/2,margin:10,borderRadius:10,backgroundColor:'white',elevation:5,height:280, }}>
                          <Image style={{width:'100%',height:'70%',borderRadius:10,padding:10,resizeMode:'cover',}} source={item.subImg}/>
                          <View style={{marginTop:5,flex:1,paddingLeft:5,justifyContent:'center'}}>
                            <Text style={{}}>{item.name}</Text>
                            <Text>Price: {item.price} mmk</Text>
                          </View>
                        </TouchableOpacity>
                       
                  
                )
            }}
            keyExtractor={(item,index)=>index.toLocaleString()}
            showsVerticalScrollIndicator={false}

           />
         </View>
        </SafeAreaView>
    )
}

export default ShowItems;