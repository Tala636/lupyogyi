import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,ScrollView, } from "react-native";
import BottomTabComponent from "../Components/Bottom";

const Plant=[
  {name:'Pant1',
   prcie:1500,
   img: require('../assets/photo/1_birds-nest-plant-beige-pot_53876-134284.png')},
   {name:'Pant2',
   prcie:1500,
   img: require('../assets/photo/2_cereus-cactus-pot_53876-134292.png')},

   {name:'Pant3',
   prcie:1500,
   img: require('../assets/photo/3_isometric-plant-3d-rendering_28315-3608.png')},

   {name:'Pant4',
   prcie:1500,
   img: require('../assets/photo/4_monstera-deliciosa-plant-pot_53876-133119.png')},
   {name:'Pant5',
   prcie:1500,
   img: require('../assets/photo/5_monstera-plant-black-pot_53876-134313.png')},
   
]
const Home=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',}}>
       <ScrollView>
       
       <View style={{marginTop:100}}>
        <Text style={{fontSize:20,marginLeft:20}}>Popular Items</Text>
            <FlatList 
              data={Plant}
              renderItem={({item,index})=>{
                return (
                  <TouchableOpacity 
                  style={{height:200,width:150,backgroundColor:'white',marginHorizontal:5,padding:5,elevation:2,borderRadius:10,marginLeft:10,marginTop:10}}
                   key={index}>
                   <Image style={{height:'100%',width:'100%'}} source={item.img}/>
                  </TouchableOpacity>
                )

              }}
              keyExtractor={(item,index)=>index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View style={{marginTop:20}}>
              
              <Text style={{fontSize:20,marginLeft:20}}>New Items</Text>
            <FlatList 
              data={Plant}
              renderItem={({item,index})=>{
                return(
                  <TouchableOpacity 
                  style={{height:200,width:150,backgroundColor:'white',marginHorizontal:5,padding:5,elevation:2,borderRadius:10,marginLeft:10,marginTop:10}}
                   key={index}>
                   <Image style={{height:'100%',width:'100%'}} source={item.img}/>
                  </TouchableOpacity>
                )

              }}
              keyExtractor={(item,index)=>index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <View style={{marginBottom:100,marginTop:20}}>
            <Text style={{fontSize:20,marginLeft:20}}>Popular Items</Text>
            <FlatList 
              data={Plant}
              renderItem={({item,index})=>{
                return(
                  <TouchableOpacity 
                  style={{height:200,width:150,backgroundColor:'white',marginHorizontal:5,padding:5,elevation:2,borderRadius:10,marginLeft:10,marginTop:10}}
                   key={index}>
                   <Image style={{height:'100%',width:'100%'}} source={item.img}/>
                  </TouchableOpacity>
                )

              }}
              keyExtractor={(item,index)=>index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            </View>
            </View>
          </View>
       </ScrollView>
          <BottomTabComponent navigation={navigation} ScreenName="HomeScreen" /> 
        </SafeAreaView>
    )
}

export default Home;