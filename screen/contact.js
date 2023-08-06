import React from "react";
 import {SafeAreaView,View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
 import BackHead from "../Components/backHeader";
 

 const Contact=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <BackHead navigation={navigation}/>

            <View style = {{marginTop:90}}>

        
        <TouchableOpacity 
            style = {styles.card}>

                <Image style = {{width:80,height:80}} source = {require('../assets/proflie/icons8-contact-us-32.png')}/>

                <Text style = {{fontSize:17,color:'white',fontWeight:'bold',marginTop:5}}>Contact Us</Text>

            </TouchableOpacity>


        <View style = {styles.card2}>

            <Image style = {{width:25,height:25}} source = {require('../assets/icons/icons8-user-40.png')}/>

            <Text style = {{fontSize:17,marginTop:7,textAlign:'center'}}>Address</Text>
     

         </View>

        <View style = {styles.card2}>

            <Image style = {{width:25,height:25}} source = {require('../assets/proflie/icons8-phone-48.png')}/>

            <Text style = {styles.card2text}>09867747773</Text>


        </View>

        <View style = {styles.card2}>

            <Image style = {{width:25,height:25}} source = {require('../assets/proflie/icons8-email-64.png')}/>    

            <Text style = {styles.card2text}>tahldhha@gmail.com</Text>


        </View>

        <View style = {styles.card2}>

            <Image style = {{width:25,height:25}} source = {require('../assets/icon.png')}/>    

            <Text style = {{fontSize:17,textAlign:'center',marginTop:7,}}>open time</Text>

            <Text style = {{fontSize:17,textAlign:'center',marginTop:7,}}>close time</Text>



        </View>

     
        </View>


            
            
        </SafeAreaView>
    )
 }

 export default Contact;

 const styles = StyleSheet.create({


    container : {flex:1,backgroundColor:'white'},
    
    content : {flex:1,backgroundColor:'white'},
    
    card :  {padding:50,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginTop:20},
    
    card2 : {alignItems:'center',marginTop:20,justifyContent:'center'},
    
    card2text : {fontSize:16,textAlign:'center',marginTop:7}
    
    })