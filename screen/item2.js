import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions  } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Fruits from "../Products/Fruits";
 const Wid=Dimensions.get('screen').width;



const ShowItems2=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <HeaderComponent navigation={navigation}/>
         <View style={{flex:1,marginTop:80,backgroundColor:'#8df7db'}}>
         <Text style={{marginBottom:10,fontSize:18,fontWeight:"bold",width:Wid,textAlign:'center'}}>နှစ်ရှည်သီးပင်စားပင်များ</Text>
           <FlatList 
           style={{}}
            data={Fruits}
            numColumns={2}
            renderItem={({item,index})=>{
                return(
                   
                  
                         <TouchableOpacity 
                         onPress={()=>navigation.navigate('detail',{product:item})}
                         key={index} style={{flex:1,width:Wid/2,margin:10,borderRadius:10,backgroundColor:'white',elevation:5,height:280, }}>
                          <Image style={{width:'100%',height:'70%',borderRadius:10,resizeMode:'cover',}} source={item.subImg}/>
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
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