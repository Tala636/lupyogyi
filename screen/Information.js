import React,{useState,useEffect} from "react";
 import {SafeAreaView,View,Text,Image, TouchableOpacity} from 'react-native';
 import BackHead from "../Components/backHeader";
 import AsyncStorage from "@react-native-async-storage/async-storage";
 import {useDispatch, useSelector } from "react-redux";
 import totalQtyAction from '../stores/action/qty';
 import cartAction from '../stores/action/cart';

 

 const Inform=({navigation,route})=>{

     let totalQty=useSelector(state=>state.TotalQty)
     let cartProducts=useSelector(state=>state.Cart)
      const dispatch=useDispatch()

        useEffect(()=>{

        const getCartProducts=async()=>{
           const CartfromAsync=await AsyncStorage.getItem('cart')
           const cartProducts=JSON.parse(CartfromAsync)

           if(cartProducts==null){
            AsyncStorage.setItem('cart',JSON.stringify([]))
            dispatch(cartAction.addToCart([]))
           }
           else{
            AsyncStorage.setItem('cart',JSON.stringify(cartProducts))
            dispatch(cartAction.addToCart(cartProducts))
           }
        }
        const getTotalQty=async()=>{
            const CartfromAsync=await AsyncStorage.getItem('cartTotalQty')
            const totalQty=JSON.parse(CartfromAsync)
 
            if(totalQty==null){
             AsyncStorage.setItem('cartTotalQty',JSON.stringify(0))
             dispatch(totalQtyAction.setTotalQty(0))
            }
            else{
             AsyncStorage.setItem('cartTotalQty',JSON.stringify(totalQty))
             dispatch(totalQtyAction.setTotalQty(totalQty))
            }
         }


             getTotalQty();
            getCartProducts();
            console.log({cartProducts})
            console.log({totalQty})

        },[])

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