import React,{useState,useEffect,useRef} from "react";
import { SafeAreaView,View,Text,TouchableOpacity,
  Image,FlatList,ScrollView,TextInput,StyleSheet,Dimensions } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import AllProduct from "../Products/AllProduct";
import HomeImg from "../Products/Carousel";

const screenWidth=Dimensions.get("window").width

const Home=({navigation,route})=>{
  
  const [searchText,setSearchText]=useState('')
  const [filterData,setFilterdata]=useState([])
  
  useEffect(()=>{

      const getData=()=>{
        setFilterdata(AllProduct)
        setImg(HomeImg)
        
      }
      getData();

  },[])
   

  const Cross=()=>{
     setSearchText('')
  }



 return(
     <SafeAreaView style={{flex:1}}>
     <ScrollView style={{marginTop:20}}>
        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginBottom:10}}>Welcome!</Text>
      <FlatList 
       data={Img}
       renderItem={renderItem}
       onScroll={handleScroll}
       keyExtractor={(item)=>item.id}
       horizontal={true}
       pagingEnabled={true}
       
      />
     
     </ScrollView>
      
    
     //Items show view                                      
     
     :   

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

     </View> //filter view...!

     }
     <BottomTabComponent navigation={navigation} ScreenName='HomeScreen'/> 
     </SafeAreaView>
 )
}

export default Home;

const styles = StyleSheet.create({

  listContainer:{alignItems:'center',
  justifyContent:'center',
  backgroundColor:'white',
  marginHorizontal:10,marginVertical:2,
  height:50,flexDirection:'row',
  borderRadius:5,shadowColor:'gray',
  elevation:5
   

}

})