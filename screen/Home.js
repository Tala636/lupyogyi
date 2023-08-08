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
  const [Img,setImg]=useState([]);
  const [activeIndex,setActiveIndex]=useState(0)

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

   const renderDotIndicator=()=>{
    return Img.map((dot,index)=>{
       if(activeIndex===index){
        return(
          <View key={index} style={{backgroundColor:'green',
          height:10,width:10,marginHorizontal:5,
          borderRadius:5}}>
          
          </View>
        )
       }
       else{
        return(
          <View key={index} style={{backgroundColor:'red',
          height:10,width:10,marginHorizontal:5,
          borderRadius:5}}>
          
          </View>
        )
       }
      })
    
   }

   const handleScroll=(event)=>{
     //get the scroll position
     const scrollPosition =event.nativeEvent.contentOffset.x
     console.log({scrollPosition})
     console.log({screenWidth})
     const index =(scrollPosition)/(screenWidth);
     console.log({index})

     setActiveIndex(index)
     
   }

   const renderItem=({item,index})=>{
     return(
      <View style={{elevation:5}}>
      <Image source={item.img} style={{height:300,width:screenWidth}} />
    </View>
     )
    
   }
     


 return(
     <SafeAreaView style={{flex:1}}>
      
      <View style={{flexDirection:'row',height:40,marginTop:50,justifyContent:'center',alignItems:'center'}}>
        
         <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',alignItems:'center',height:40,width:320,borderRadius:15,borderWidth:0.5}}>

             <Image style={{width:25,height:25,position:'absolute',left:10}} source={require('../assets/icons/icons8-search-24.png')}/>
             <TextInput style={{position:'absolute',left:40}}
              placeholder="Search products"
              keyboardType="web-search"
              underlineColorAndroid={'transparent'}
              onChangeText={(text)=>setSearchText(text)}
              value={searchText}
             />
             { searchText===''? <View/>:

<TouchableOpacity onPress={()=>Cross()} style={{position:'absolute',right:10}}>
<Image source={require('../assets/icons/icons8-cross-sign-50.png')} style={{width:25,height:25,}}/>
</TouchableOpacity>
             
             }
         </View>
      </View>
      
     { searchText=== '' ?
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
     <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>{renderDotIndicator()}</View>

     
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