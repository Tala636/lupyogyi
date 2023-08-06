import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions  } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Fruits from "../Products/Fruits";
 const Wid=Dimensions.get('screen').width;



const ShowItems2=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <HeaderComponent navigation={navigation}/>
         <View style={{flex:1,backgroundColor:'white',marginTop:100}}>
           <FlatList 
           style={{}}
            data={Fruits}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                  
                         <TouchableOpacity 
                         onPress={()=>navigation.navigate('detail',{product:item})}
                         key={index} style={{flex:1,alignContent:'center',justifyContent:'center',width:Wid/2,margin:10,borderRadius:10,backgroundColor:'white',elevation:5,height:300, }}>
                          <Image style={{width:175,height:220,borderRadius:10,padding:10,resizeMode:'cover',marginBottom:20}} source={item.subImg}/>
                          <View style={{alignItems:'center',justifyContent:'center',marginTop:5,}}>
                            <Text style={{}}>{item.name}</Text>
                            <Text>Price:{item.price} mmk</Text>
                          </View>
                        </TouchableOpacity>
                       
                  
                )
            }}
            keyExtractor={(item,index)=>index.toLocaleString()}
            showsVerticalScrollIndicator={false}

           />
         </View>
        </SafeAreaView>
    )
}

export default ShowItems2;