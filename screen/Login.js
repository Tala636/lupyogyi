import React from "react";
import { SafeAreaView,Text,TextInput,TouchableOpacity,View,Image } from "react-native";


const Login=(Props)=>{
    return(
        <SafeAreaView style={{flex:1,padding:20,justifyContent:'center',backgroundColor:'white'}}>
            <View style={{alignItems:'center',marginBottom:20}}>
                 <Image style={{width:75,height:75}} source={require('../assets/icons/icons8-plant-48.png')}/>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>လူပျိုကြီး</Text>
                <Text style={{marginTop:10}}>ပန်းပင်မျိုးစုံနဲ့ တခြားပျိုးပင်များ ရောင်းချပေးနေသည်</Text>
            </View>
             <View style={{alignItems:'center',marginTop:50}}>
             <Text style={{color:'red'}}>
                Something is wrong!
             </Text>
             <Text style={{color:'red'}} >Please check your email address or password.</Text>
             </View>
            <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>Email ID</Text>
                <TextInput 
                placeholder="Enter your email"
                style={{borderWidth:1,height:45,borderRadius:10,padding:5,marginTop:5,}}/>
            </View>

            <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>Password</Text>
                <TextInput 
                secureTextEntry={true}
                placeholder="Enter your password"
                style={{borderWidth:1,height:45,borderRadius:10,padding:5,marginTop:5}}/>
            </View>

            <TouchableOpacity 
              onPress={()=>Props.navigation.navigate('home')}
            style={{backgroundColor:'blue',alignItems:'center',marginTop:20,height:45,justifyContent:'center',borderRadius:10}}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={{marginRight:5}}>I am a new user.</Text>
                <TouchableOpacity 
                onPress={()=>Props.navigation.navigate('signup')}
                >
                    <Text style={{fontWeight:'bold',color:'blue'}}>Sign up</Text>
                    <View style={{backgroundColor:'blue',height:1,}}/>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Login