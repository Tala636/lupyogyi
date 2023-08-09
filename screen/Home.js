import React,{useState,useEffect} from "react";
import { SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,ScrollView,TextInput,StyleSheet,Dimensions } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import AllProduct from "../Products/AllProduct";
import {SliderBox} from "react-native-image-slider-box";
import indoor from "../Products/indoor";

const data=[
  require('../assets/carousel/jackie.png'),
  require('../assets/carousel/kauf.png'),
  require('../assets/carousel/midcal-fotor.png'),
  require('../assets/carousel/midgrf.png'),
  require('../assets/carousel/wore.png'),
];
    const screenWidth = Dimensions.get('window').width
 
const Home=({navigation,route})=>{
  
  const [searchText,setSearchText]=useState('')
  const [filterData,setFilterdata]=useState([])
  const[plant,setPlant]=useState([])
  const [activeIndex,setActiveIndex]=useState(0)
  
  
  
  useEffect(()=>{

      const getData=()=>{
        setFilterdata(AllProduct)
        setPlant(indoor)
        
        
      }
      getData();

      

     
  },[])
  

  const Cross=()=>{
     setSearchText('')
  }
    const renderIndicator=()=>{
      return plant.map((dot,index)=>{
       if(Math.ceil(activeIndex)==index){
        return(
          <View key={index} style={{backgroundColor:'green',height:5,width:20,margin:5,borderRadius:5}}>
              
          </View>
        )
       }
       else{
        return(
          <View key={index} style={{backgroundColor:'white',height:5,width:20,margin:5,borderRadius:5}}>
              
          </View>
        )
       }
      })
    }

   
    

    const handleScroll=(event)=>{
      const scrollPosition=event.nativeEvent.contentOffset.x
       const index =scrollPosition/screenWidth;
       setActiveIndex(index);
    }

    
  



 return(
     <SafeAreaView style={{flex:1}}>
      
      <View style={{flexDirection:'row',height:40,marginTop:50,justifyContent:'center',alignItems:'center'}}>
        
         <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',alignItems:'center',height:40,width:320,borderRadius:15,borderWidth:0.5}}>

             <Image style={{width:25,height:25,position:'absolute',left:10}} source={require('../assets/icons/icons8-search-24.png')}/>
             <TextInput style={{position:'absolute',left:40,width:210,height:50}}
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
     <ScrollView style={{marginTop:10,}}>
       <View style={{marginBottom:200}}>
       <Text style={{fontSize:24,fontWeight:'bold',marginLeft:10,marginBottom:5}}>Welcome!</Text>
      <SliderBox images={data}
       dotColor="green"
       inactiveDotColor="white" dotStyle={{
        height:5,width:20,borderRadius:50
       }}
       imageLoadingColor="orange"
       autoplay={true}
       autoplayInterval={5000}
       circleLoop={true}
       paginationBoxVerticlal={20}
       sliderBoxHeight={250}
       
       
       
       />
       <Text style={{position:'absolute',top:90,right:3,color:'white',fontWeight:'bold',fontSize:16}}>
       ရာသီဥတုပြောင်းလဲမှုကို တိုက်ဖျက်ရန်၊ ဂေဟစနစ်များ ပြန်လည်ထူထောင်ရန်၊ လေထုအရည်အသွေးကို မြှင့်တင်ပေးပြီး မျိုးဆက်သစ်များအတွက် ရေရှည်တည်တံ့သော အနာဂတ်ကို မြှင့်တင်ပေးသောကြောင့် စိုက်ပျိုးခြင်းသည် ကျွန်ုပ်တို့၏ပတ်ဝန်းကျင်ကို ထိန်းသိမ်းရန်အတွက် အရေးကြီးပါသည်။

       </Text>
       <View style={{flex:1,flexDirection:'row',marginVertical:15,justifyContent:'center',alignItems:'center',}}>
      
       <Text style={{fontSize:18,fontWeight:'900',position:'absolute',left:10,}}>Indoor plants</Text>
       
       <TouchableOpacity style={{position:'absolute',right:10,}}>
       <Image style={{width:45,height:45,}} source={require('../assets/icons/icons8-right-arrow-50.png')}/>
       </TouchableOpacity>
       </View>
       <View style={{backgroundColor:'black',marginTop:15}}>
        <FlatList
        data={plant}
        renderItem={({item,index})=>{
          return(
            <View style={{borderStartColor:'white',shadowColor:'gray',elevation:5}}>
              <TouchableOpacity onPress={()=>navigation.navigate('detail',{product:item})}>
                <Image style={{width:screenWidth,height:332,resizeMode:"stretch"}} source={item.subImg}/>
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={(item,index)=>index.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        />
       <View style={{flexDirection:'row',position:'absolute',top:300,right:50}}>{renderIndicator()}</View>
       </View>
         
       
       <View style={{marginTop:20,alignItems:'center',justifyContent:'center',padding:5}} >
        <Text>Indoor Plants</Text>
        <Text style={{marginTop:10}}>     အိမ်တွင်းအပင်များသည် ပိုမိုကျန်းမာပျော်ရွှင်စေပြီး
            စိတ်ပိုင်းဆိုင်ရာနှင့် ရုပ်ပိုင်းဆိုင်ရာကျန်းမာရေးဆိုင်ရာ
            အကျိုးကျေးဇူးများကို ပေးဆောင်သည်။</Text>
       </View>

       </View>
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