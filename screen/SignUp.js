import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,TextInput,Dimensions,StyleSheet } from "react-native";

const Wid=Dimensions.get('screen').width;

const Signup=({navigation,route})=>{
    return(
        
        <SafeAreaView style={{flex:1}}>
           <View style={{marginTop:60,alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'600'}}>Registration Form</Text>
            <Text>Please fill in the form below</Text>
           </View>
           <View style={{backgroundColor:'white',padding:10,marginTop:50,marginHorizontal:10}}>
            <View style={{}}>
            <Text style={{marginRight:280,marginBottom:5,fontWeight:'bold'}}>Full Name:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your name"

            />
             
            </View>

            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold',}}>Phone Number:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your phone number"

            />

            </View>
            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold'}}>Email Address:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your email address"

            />

            </View>
            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold'}}>Password:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="create your password"
             secureTextEntry={true}
            />
            <Text style={{marginTop:5,color:'red'}}>Your password should have 6 charaters at least.</Text>
            </View>
            

            <TouchableOpacity 
             onPress={()=>navigation.navigate('login')}
            style={styles.but}>
                <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Register</Text>
            </TouchableOpacity>
            
           
           </View> 


        </SafeAreaView>
    )
}


export default Signup;

const styles=StyleSheet.create({
    but:{alignItems:'center',
    marginTop:50,
    marginBottom:20,
    backgroundColor:'green',
    width:200,height:50,justifyContent:'center',
    borderRadius:15,
    marginLeft:80}
})