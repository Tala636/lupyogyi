import React from "react";
import { View,Text,Dimensions,TouchableOpacity,Image,StyleSheet } from "react-native";
import { colors } from "../constant/theme";
const Wid =Dimensions.get('screen').width;

const BottomTabComponent =({navigation,ScreenName})=>{
    return(
        <View style={{flexDirection:'row',height:60,width:Wid,shadowColor:'black',backgroundColor:'white',elevation:5,position:'absolute',bottom:0}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('home')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-home-24.png')} style={[styles.icons,{tintColor:ScreenName=='HomeScreen'? colors.primary:'#C0C0C0'}]}/>
            <Text style={{color:ScreenName=='HomeScreen'?colors.primary:'#C0C0C0'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('category')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/icons8-categorize-80.png')} style={[styles.icons,{tintColor:ScreenName=='CategoScreen'? colors.primary:'#C0C0C0'}]} />
            <Text style={{color:ScreenName=='CategoScreen'?colors.primary:'#C0C0C0'}}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('cart')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/icons8-fast-cart-32.png')} style={[styles.icons,{tintColor:ScreenName=='CartScreen'? colors.primary:'#C0C0C0'}]} />
            <View style={{backgroundColor:'orange',height:18,borderRadius:11,position:'absolute',left:16,top:0}}>
            <Text style={{fontSize:12}}>12</Text>
            </View>
            </View>
            <Text style={{color:ScreenName=='CartScreen'?colors.primary:'#C0C0C0'}}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('profile')}
        style={{width:Wid/4,justifyContent:'center',alignItems:'center'}}>
            
            <Image source={require('../assets/icons8-profile-32.png')} style={[styles.icons,{tintColor:ScreenName=='ProfileScreen'? colors.primary:'#C0C0C0'}]} />
            
            
            <Text style={{color:ScreenName=='ProfileScreen'?colors.primary:'#C0C0C0'}}>Account</Text>
        </TouchableOpacity>



        



        </View>
    )
}

export default BottomTabComponent;

const styles=StyleSheet.create({
    icons:{width:25,height:25},
    
})