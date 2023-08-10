import React from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image, } from "react-native";
import { colors } from "../constant/theme";
import BottomTabComponent from "../Components/Bottom";
const Proflie=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
          <View style={{backgroundColor:"#8df7db",height:250,marginTop:40,flexDirection:'row',alignItems:'center',padding:10}}>
            <Image style={{width:100,height:100,}} source={require('../assets/icons/icons8-user-40.png')}/>
            <View style={{flex:1,marginLeft:20,}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Name : Mg Kyaw Gyi</Text>
              <Text style={{fontSize:14,fontWeight:'bold',marginTop:5}}>Phone Number: 098787574</Text>
              <Text style={{fontSize:14,fontWeight:'bold',marginTop:5}}>Email Address:kyawgyi123@gmail.com</Text>
            </View>
          </View>
          <View style={{marginTop:10,}}>
           <View style={{backgroundColor:'white',marginTop:10,height:50,justifyContent:'center',}}>
            <TouchableOpacity 
            
            onPress={()=>navigation.navigate('information')}
            
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/proflie/icons8-my-account-32.png')}/>
              <Text>Account Information</Text>
            </TouchableOpacity>
            
           </View>
           <View style={{height:0.5,backgroundColor:'black'}}/>

           <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('orderList')}
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/proflie/icons8-purchase-order-50.png')}/>
              <Text>My Order List</Text>
            </TouchableOpacity>
            
           </View>
           <View style={{height:0.3,backgroundColor:'black'}}/>
           <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Favourite')}
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/proflie/icons8-heart-32.png')}/>
              <Text>My Favorite</Text>
            </TouchableOpacity>
            
           </View>
           <View style={{height:0.3,backgroundColor:'black'}}/>
           <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
            <TouchableOpacity 
            
            onPress={()=>navigation.navigate('about')}
            
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/proflie/icons8-about-50.png')}/>
              <Text>About</Text>
            </TouchableOpacity>
            
           </View>
           <View style={{height:0.5,backgroundColor:'black'}}/>
           <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
            <TouchableOpacity 
            
            onPress={()=>navigation.navigate('contact')}
            
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/proflie/icons8-contact-us-32.png')}/>
              <Text>Contact us</Text>
            </TouchableOpacity>
           </View>
           <View style={{height:0.3,backgroundColor:'black'}}/>
           <View style={{backgroundColor:'white',height:50,justifyContent:'center'}}>
            <TouchableOpacity 
            
            onPress={()=>navigation.navigate('contact')}
            
            style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
              <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/icons/icons8-logout-50.png')}/>
              <Text>logout</Text>
            </TouchableOpacity>
           </View>
          </View>
         <BottomTabComponent navigation={navigation} ScreenName="ProfileScreen"/>
        </SafeAreaView>
    )
}

export default Proflie;