import React from "react";
import { SafeAreaView,View,Text,Image,TouchableOpacity,TextInput,Dimensions } from "react-native";

 const screenWidth =Dimensions.get("screen").width
const Signup=()=>{
    return(
        <SafeAreaView style={{flex:1,}}>
          <View style={{}}>
          <Image style={{resizeMode:"contain",width:screenWidth,height:400,}} source={require('../assets/proflie/SignUpback.jpg')}/>
          </View>
          <View style={{position:'absolute',top:80,right:100}}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:"white"}}>Register</Text>
            <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold',color:'white'}}>Create your new account</Text>
          </View>
            <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',position:"absolute",top:250,right:0,width:screenWidth,borderTopLeftRadius:150}}>
                <TextInput
               style={{width:300,height:45,backgroundColor:'gray',borderRadius:15,padding:10,marginVertical:10,marginTop:80,}}
            placeholder="name"
            
                
                />
                 <TextInput
               style={{width:300,height:45,backgroundColor:'gray',borderRadius:15,padding:10,marginVertical:10}}
            placeholder="name"
            
                
                />
                 <TextInput
               style={{width:300,height:45,backgroundColor:'gray',borderRadius:15,padding:10,marginVertical:10}}
            placeholder="name"
            
                
                />
                 <TextInput
               style={{width:300,height:45,backgroundColor:'gray',borderRadius:15,padding:10,marginVertical:10}}
            placeholder="name"
            
                
                />
                 <TextInput
                 placeholderTextColor="#17692e"
               style={{width:300,height:45,backgroundColor:'gray',borderRadius:15,padding:10,marginVertical:10,}}
            placeholder="name"
            
                
                />
                <TouchableOpacity style={{width:300,height:45,backgroundColor:'#17692e',borderRadius:15,padding:10,marginTop:50,marginBottom:100}}>
                    <Text style={{textAlign:'center',color:'white',fontWeight:'900'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
         
    </SafeAreaView>

    )
    }
export default Signup;