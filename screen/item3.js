import React from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,FlatList,Dimensions  } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import Plants from "../Products/Plants";
 const Wid=Dimensions.get('screen').width;



const ShowItems3=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <HeaderComponent navigation={navigation}/>
         <View style={{flex:1,marginTop:80,backgroundColor:'#8df7db'}}>
         <Text style={{marginBottom:10,fontSize:18,fontWeight:"bold",width:Wid,textAlign:'center'}}>စက်မှုကုန်ကြမ်းသုံး အပင်များ</Text>
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

export default ShowItems3;