import React from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image,FlatList,ScrollView,Dimensions,StatusBar } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import HeaderComponent from "../Components/HeaderComponent";

const Items=[
  {img1: {uri:"https://i.pinimg.com/564x/53/ac/7b/53ac7b1bfbe65df8dec3353eb97fbabd.jpg"},
  img2: {uri:"https://rb.gy/qfyhm"},
  img3: {uri:"https://i.pinimg.com/564x/34/13/08/34130872d812f4f500aca0858b08860b.jpg"},
  img4: {uri:"https://i.pinimg.com/564x/62/24/ad/6224ad672b3c25b1f40dfb09d22879c9.jpg"},
  
  _id: "1",
  plantCateName: "ဥယျာဉ်ခြံပန်းမန်အပင်များ",
},
{img1: {uri:"https://i.pinimg.com/564x/e0/4f/63/e04f630f3de48ec06d306a9927adcaaa.jpg"},
img2: {uri:"https://i.pinimg.com/564x/16/90/dc/1690dcc624b9cd38c9d3bb1779d6fff2.jpg"},
img3: {uri:"https://i.pinimg.com/564x/1d/32/68/1d3268d6dac953424852cfdc36f53209.jpg"},
img4: {uri:"https://i.pinimg.com/564x/42/0e/48/420e48430dad33a855c6dc018fb9f927.jpg"},
_id: "2",
plantCateName: "နှစ်ရှည်သီးပင်စားပင်များ",
},

 {
  img1: {uri:"https://www.bridgestone.com/technology_innovation/natural_rubber/para_rubber_tree/images/img_01.jpg"},
  img2: {uri:"https://media.istockphoto.com/id/462180853/photo/rubber-tree.jpg?s=612x612&w=0&k=20&c=JdvgezAgv_9BywvMmwSPpXsCxtz8-yTsQOvKi1W6Tow="},
  img3:{uri:"https://img.freepik.com/premium-photo/small-rubber-tree-nursery_5207-319.jpg?w=2000"},
  img4: {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ac%C3%A1cia_Mangium_-_S%C3%ADtio_Caramon%C3%A3.jpg/640px-Ac%C3%A1cia_Mangium_-_S%C3%ADtio_Caramon%C3%A3.jpg"}
  ,
  _id: "3",
  plantCateName: "စက်မှုကုန်ကြမ်းသုံး အပင်များ",
  

 }
  
]
   const screenWidth=Dimensions.get("screen").width

const Category=({navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1}}>
         <StatusBar
          backgroundColor={'#8df7db'}
          />
        <View style={{backgroundColor:'#8df7db'}}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20,}}>
          <Text style={{marginBottom:15,fontSize:24,fontWeight:'bold'}}>Categories</Text>
          <FlatList
             data={Items}
             renderItem={({item,index})=>{
              return(
                <View style={{backgroundColor:'white'}}>
                  <Text style={{fontSize:16,fontWeight:'bold',marginVertical:5,marginLeft:10}}>{item.plantCateName}</Text>
                <TouchableOpacity
                onPress={()=>{
                 switch(item._id){
                  case "1":
                 return navigation.navigate('showItem');
                  case "2":
                 return   navigation.navigate('showItem2');
                 case "3" :
                  return navigation.navigate('showItem3');
                   
                 }
                }}
                style={{height:190,width:screenWidth,backgroundColor:'white',elevation:5,}}
                key={index}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center',marginVertical:20}}>
                    <Image style={{height:190,width:'100%',}} source={item.img2}/>
                    
                  </View>
                </TouchableOpacity>


                
                </View>
              )
             }}

             keyExtractor={(item,index)=>index.toString()}
             
             showsHorizontalScrollIndicator={false}




          />


          
         </View>
        </View>
          
    
          <BottomTabComponent navigation={navigation} ScreenName="CategoScreen"/>
        </SafeAreaView>
    )
}

export default Category;