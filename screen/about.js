import React from "react";
 import {SafeAreaView,View,Text,Image,StyleSheet} from 'react-native';
 import BackHead from "../Components/backHeader";

 const About=({navigation})=>{
    return(
        <SafeAreaView style = {styles.container}>

        <BackHead navigation={navigation}/>

    <View style={{marginTop:90}}>

        <View style = {styles.aboutUsContainer}>

            <Image style = {{width:80,height:80}} source = {require('../assets/proflie/icons8-about-50.png')}/>

            <Text style = {styles.aboutUstxt}>About Us</Text>


        </View>


        {

            

               
                    
                    <View style = {styles.outerView}>

                    

                        <View style = {{backgroundColor:'green',width:20,height:20}}/>

                        <Text style = {styles.innerTxt}>fdfffs</Text>


                    </View>


                



        }

    </View>

    </SafeAreaView>
    )
 }

 export default About;

 const styles = StyleSheet.create({

    container : {flex:1},
    
    content   : {flex:1,},
    
    aboutUsContainer : {justifyContent:'center',alignItems:'center',backgroundColor:'white',height:200,},
    
    aboutUstxt       : {fontSize:18,fontWeight:'bold',color:'white',marginTop:5},
    
    outerView        : {flexDirection:'row', alignItems:'center',paddingHorizontal:15,paddingVertical:10,marginTop:10},
    
    innerTxt         : {flex:1,fontSize:16,color:'grey',marginLeft:15}
    
    })