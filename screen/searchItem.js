import React,{useState} from "react";
import { View,SafeAreaView,Text,TouchableOpacity,TextInput,FlatList,Image } from "react-native";

  const Arr =[{Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},
  {Name:'I Phnoe',model:'14 pro max'},



]


const Search=({navigation})=>{

     
     const [searchText,setSearchText]=useState('')


     const Cross=()=>{
        setSearchText('')
     }


    return(
        <SafeAreaView style={{flex:1}}>
         
         <View style={{flexDirection:'row',height:40,marginTop:50,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            style={{justifyContent:'center',marginRight:10}}>
                <Image source={require('../assets/icons/icons8-back-50.png')} style={{width:35,height:35}}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',alignItems:'center',height:40,width:320,borderRadius:15,borderWidth:0.5}}>

                <Image style={{width:25,height:25,position:'absolute',left:10}} source={require('../assets/icons/icons8-search-24.png')}/>
                <TextInput style={{position:'absolute',left:40}}
                 placeholder="Search products"
                 keyboardType="web-search"
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
         
        <View style={{backgroundColor:'red',height:50,marginTop:20}}>

        </View>

        </SafeAreaView>
    )
}

export default Search;