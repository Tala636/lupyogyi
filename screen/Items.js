import React,{useState,useEffect} from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions, BackHandler,StatusBar } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Flowers from "../Products/Flowers";

 const Wid=Dimensions.get('screen').width;

const ShowItems=({navigation,route})=>{


    return(
        <SafeAreaView style={{flex:1}}>
          <StatusBar
          backgroundColor={'#17692e'}
          />
        <HeaderComponent navigation={navigation}/>
        
         <View style={{flex:1,backgroundColor:'#8df7db'}}>
         <Text style={{marginBottom:10,fontSize:18,fontWeight:"bold",width:Wid,textAlign:'center',marginTop:20}}>ဥယျာဉ်ခြံပန်းမန်အပင်များ</Text>
           <FlatList 
           style={{}}
            data={Flowers}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                  
                         <TouchableOpacity 
                         onPress={()=>{navigation.navigate('detail',{product:item})}}

                         key={index} 
                         style={{flex:1,width:Wid/2,margin:10,borderRadius:10,backgroundColor:'white',elevation:5,height:280, }}>
                          <Image style={{width:'100%',height:'70%',borderRadius:10,padding:10,resizeMode:'cover',}} source={item.subImg}/>
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Text style={{}}>{item.name}</Text>
                            <Text>Price: {item.price} mmk</Text>
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

export default ShowItems;