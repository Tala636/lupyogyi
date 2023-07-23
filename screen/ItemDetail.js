import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,Dimensions,ScrollView } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
const Wid=Dimensions.get('screen').width;


 
const ItemD=({navigation,route})=>{

    

    const {SelectedItem}=route?.params;
    
    
    return(
    
    
    <SafeAreaView style={{flex:1}}>
    <HeaderComponent navigation={navigation}/>
   
    <View style={{alignItems:'center',marginTop:90,backgroundColor:'white',height:300,}}>
        
        <Image style={{width:"100%",height:"100%",padding:5,resizeMode:'cover'}} source={SelectedItem.subImg}/>
        
      
   </View>
   <View style={{alignItems:'center'}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>{SelectedItem.name}</Text></View>
   <View style={{alignItems:'center'}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>Price: {SelectedItem.price} mmk</Text></View>
       <ScrollView>
        <View style={{backgroundColor:'white',marginHorizontal:10,padding:5,marginTop:10,marginBottom:120}}>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Light:</Text>
        <Text>{SelectedItem.light}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Soil:</Text>
        <Text>{SelectedItem.soil}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Water:</Text>
        <Text>{SelectedItem.water}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Temperature:</Text>
        <Text>{SelectedItem.temp}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Fertilizer:</Text>
        <Text>{SelectedItem.fertilizer}</Text>
        

        </View>


       </ScrollView>
        
       
        
        
        <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',bottom:0,backgroundColor:'white',width:Wid}}>
         <View style={{flexDirection:'row',position:'absolute',left:15}}>
         <Text style={{fontWeight:'bold',}}>Amount:</Text>
          <Text style={{marginLeft:10}}>1</Text>
         </View>
         
          <View style={{flexDirection:'row',marginLeft:40}}>


         
            <TouchableOpacity style={{marginRight:10}}>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-plus-50.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity style={{backgroundColor:'red',alignItems:'center',height:40,justifyContent:'center',position:'absolute',right:20,padding:5,borderRadius:5}}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{position:'absolute',top:100,right:20,}}>
            <TouchableOpacity style={{}}>
            <Image style={{tintColor:'#FFA500',width:45,height:45,}} source={require('../assets/icons/icons8-heart-32.png')} />
            </TouchableOpacity>
        </View>

        

    </SafeAreaView>
    
    )
}

export default ItemD;