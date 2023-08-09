import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useEffect} from "react";
import { View,TouchableOpacity,Image,SafeAreaView,Dimensions,Text } from "react-native";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import totalQtyAction from '../stores/action/qty';


const Wid =Dimensions.get('screen').width;

const HeaderComponent=({navigation})=>{
     const totalQty=useSelector(state=>state.TotalQty)
     const dispatch= useDispatch()


       useEffect(()=>{
        
         const getTotalQty=async()=>{
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

        <SafeAreaView style={{elevation:5,height:50,backgroundColor:'white',width:Wid,position:'absolute',top:35,padding:5}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',justifyContent:'space-between'}}>
         <TouchableOpacity 
         onPress={()=>navigation.goBack()}
         style={{marginLeft:5}}>
         <Image style={{width:35,height:35}} source={require('../assets/icons/icons8-back-50.png')}/>
         </TouchableOpacity>
         
         <TouchableOpacity onPress={()=>navigation.navigate('favorite')} style={{flexDirection:'row',position:'absolute',left:180}}>
            <Image source={require('../assets/icons/icons8-heart-32.png')}/>
            <Text style={{backgroundColor:'orange',height:18,borderRadius:11,fontSize:12,position:'absolute',left:28,top:0}}>22</Text>
         </TouchableOpacity>
         

         <View style={{flexDirection:'row',position:'absolute',right:40}}>
         <TouchableOpacity 
         onPress={()=>navigation.navigate('cart')}
         style={{marginRight:10}}>
         <Image style={{width:35,height:35}} source={require('../assets/icons/icons8-bag-64.png')}/>
         </TouchableOpacity>
         {totalQty!=0 &&
         
         <View style={{borderRadius:15,height:18,backgroundColor:'orange',position:'absolute',left:25}}>
         <Text style={{padding:2,fontSize:12}}>{totalQty}</Text>
         </View>
         }

         </View>
        
       

        </View>
        </SafeAreaView>
    )
}

export default HeaderComponent;