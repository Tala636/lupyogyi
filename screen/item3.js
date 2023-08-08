import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions  } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Plants from "../Products/Plants";
 const Wid=Dimensions.get('screen').width;



const ShowItems2=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <HeaderComponent navigation={navigation}/>
         <View style={{flex:1,marginTop:100}}>
           <FlatList 
           style={{}}
            data={Plants}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                  
                         <TouchableOpacity 
                         onPress={()=>navigation.navigate('detail',{product:item})}
                         key={index} style={{flex:1,width:Wid/2,margin:10,borderRadius:10,backgroundColor:'white',elevation:5,height:280, }}>
                          <Image style={{width:'100%',height:'70%',borderRadius:10,resizeMode:'cover',}} source={item.subImg}/>
                          <View style={{justifyContent:'center',paddingLeft:5,flex:1}}>
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