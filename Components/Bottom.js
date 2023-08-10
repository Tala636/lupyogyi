import React,{useEffect} from "react";
import { View,Text,Dimensions,TouchableOpacity,Image,StyleSheet } from "react-native";
import { colors } from "../constant/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import totalQtyAction from '../stores/action/qty';





const Wid =Dimensions.get('screen').width;

const BottomTabComponent =({navigation,ScreenName})=>{
      const totalQty= useSelector(state=>state.TotalQty)
      const dispatch =useDispatch()

      useEffect(()=>{

             const getTotalQty =async()=>{
                const totalQtyFromAsync =await AsyncStorage.getItem('cartTotalQty')
                const qty =JSON.parse(totalQtyFromAsync)

                if(qty==null){
                    AsyncStorage.setItem('cartTotalQty',JSON.stringify(0))
                    dispatch(totalQtyAction.setTotalQty(0))
                }
                else{
                    AsyncStorage.setItem('cartTotalQty',JSON.stringify(qty))
                    dispatch(totalQtyAction.setTotalQty(qty))
                }
             }

             getTotalQty();


      },[])


    return(
        <View style={{flexDirection:'row',height:60,width:Wid,shadowColor:'black',backgroundColor:'#17692e',elevation:5,position:'absolute',bottom:0}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('home')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-home-24.png')} style={[styles.icons,{tintColor:ScreenName=='HomeScreen'? "#0cf5ca":'#C0C0C0'}]}/>
            <Text style={{color:ScreenName=='HomeScreen'?"#0cf5ca":'#C0C0C0'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('category')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-categorize-80.png')} style={[styles.icons,{tintColor:ScreenName=='CategoScreen'? "#0cf5ca":'#C0C0C0'}]} />
            <Text style={{color:ScreenName=='CategoScreen'?"#0cf5ca":'#C0C0C0'}}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('cart')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/icons8-fast-cart-32.png')} style={[styles.icons,{tintColor:ScreenName=='CartScreen'? "#0cf5ca":'#C0C0C0'}]} />
            
           { totalQty!=0  &&
               <View style={{backgroundColor:'orange',height:18,borderRadius:11,position:'absolute',left:16,top:0}}>
               <Text style={{fontSize:12}}>{totalQty}</Text>
               </View>
        }
            </View>
            <Text style={{color:ScreenName=='CartScreen'?"#0cf5ca":'#C0C0C0'}}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('profile')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            
            <Image source={require('../assets/icons8-profile-32.png')} style={[styles.icons,{tintColor:ScreenName=='ProfileScreen'? colors.primary:'#C0C0C0'}]} />
            
            
            <Text style={{color:ScreenName=='ProfileScreen'?"#0cf5ca":'#C0C0C0'}}>Account</Text>
        </TouchableOpacity>



        



        </View>
    )
}

export default BottomTabComponent;

const styles=StyleSheet.create({
    icons:{width:25,height:25},
    
})