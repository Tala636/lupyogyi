import React,{useState} from "react";
import { View,SafeAreaView,Text,TouchableOpacity,TextInput,FlatList,Image,Dimensions } from "react-native";
import Carousel from "../Products/Carousel";
import AllProduct from "../Products/AllProduct";


const Search=({navigation})=>{
   return(
        <SafeAreaView>
            <View style={{marginTop:20}}> 
       <FlatList 
        data={filterData}
       
        renderItem={({item,index})=>{
          if(item.name.includes((searchText))){
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('detail',{product:item})} style={styles.listContainer}>
              <Text style={{position:'absolute',left:15}}>{item.name}</Text>
               <Image style={{position:'absolute',right:10}} source={require('../assets/icons/listArrow.png')}/>
            </TouchableOpacity>
            )
          }
         
        }}
        
        keyExtractor={(item,index)=>index.toString()}
        showsVerticalScrollIndicator={false}
       />
       </View>
        </SafeAreaView>
   )
    
}

export default Search;