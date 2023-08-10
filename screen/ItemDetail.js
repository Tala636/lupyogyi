import React,{useState,useEffect} from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,Dimensions,ScrollView,Alert } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch,useSelector } from "react-redux";
import cartAction from '../stores/action/cart';
import totalQtyAction from '../stores/action/qty';
import wishListAction from '../stores/action/wishList';

const Wid=Dimensions.get('screen').width;

 
 
const ItemD=({navigation,route})=>{
  const cartProducts=useSelector(state=>state.Cart)
  const totalQty=useSelector(state=>state.TotalQty)
  let {product}=route.params;
   const [isInWishList,setIsInWishList]=useState(false)
   const [qty,setQty]=useState(1)
    
   const dispatch =useDispatch()//redux..!

   useEffect (() =>{
    AsyncStorage.getItem('wishlist').then((res) =>{
      const wishListData = JSON.parse(res)
      if(wishListData == null){
        setIsInWishList(false)
      }else{
        let isWishListId = null
        for(let i=0;i<wishListData.length; i++){
          if(wishListData[i]._id == product._id){
            isWishListId = product._id
          }
        }
        if(isWishListId != null){
          setIsInWishList(true)
        }else{
          setIsInWishList(false)
        }
      }
    })
  },[route])


   const saveTocart=(prodItem)=>{
    
    prodItem.qty=qty
    let  totalQty=prodItem.qty
    AsyncStorage.getItem('cart').then((res)=>{
      const cartProducts =JSON.parse(res)
 
      let cartArr=[]
      if(cartProducts==null){
        cartArr.push(prodItem)
        AsyncStorage.setItem('cart',JSON.stringify(cartArr))
        dispatch(cartAction.addToCart(cartArr))

        AsyncStorage.setItem('cartTotalQty',JSON.stringify(totalQty))
        dispatch(totalQtyAction.setTotalQty(totalQty))
        
      }
      else{
        let isInCart=null

        for(let i=0;i<cartProducts.lenght;i++){
          totalQty+=cartProducts[i].qty

          if(cartProducts[i]._id==prodItem._id){
            cartProducts[i].qty+=1
            isInCart=prodItem._id
          }
        }
        if(isInCart==null){
          cartProducts.push(prodItem)
        }
        AsyncStorage.setItem('cart',JSON.stringify(cartProducts))
        dispatch(cartAction.addToCart(cartProducts))

        AsyncStorage.setItem('cartTotalQty',JSON.stringify(totalQty))
        dispatch(totalQtyAction.setTotalQty(totalQty))

        setQty(1)
      }

      Alert.alert('Alert Title', 'Item added to cart', [
       
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);

    })
    .catch((error)=>{
      console.log('catch error',error)
    })
   }


   const clickMinus=()=>{
    if(qty>1){
      setQty(qty-1)
    }
    
   }
    const clickPlus=()=>{
      setQty(qty+1)
    }

    const addToWishList = (product) =>{

      if(isInWishList){
        AsyncStorage.getItem('wishlist').then((res)=>{
          const wishListData = JSON.parse(res)
          let products =[]
          if(wishListData != null){
            products = wishListData.filter(prod => prod._id != product._id)
          }
          AsyncStorage.setItem('wishlist', JSON.stringify(products))
          dispatch(wishListAction.addToWishList(products))
        })
        setIsInWishList(false)
      }
      else{
        AsyncStorage.getItem('wishlist').then((res) =>{
          
          const wishListData = JSON.parse(res)
          let products =[]
          if(wishListData == null){
            products.push(product)
  
            dispatch(wishListAction.addToWishList(products))
            AsyncStorage.setItem('wishlist', JSON.stringify(products))
  
          }else{
            let isWishListId = null
            for(let i=0; i<wishListData.length; i++){
              if(wishListData[i]._id == products._id){
                isWishListId = product._id
              }
            }
            console.log("Is ID null? ", isWishListId)
            
           if(isWishListId == null){
             wishListData.push(product)
           }
           AsyncStorage.setItem('wishlist', JSON.stringify(wishListData))
           dispatch(wishListAction.addToWishList(wishListData))
          }
          setIsInWishList(true)
        })
      }
    }
  

    
    
    return(
    
    <SafeAreaView style={{flex:1,backgroundColor:'#8df7db'}}>
    {/* <HeaderComponent navigation={navigation}/> */}
   
    <View style={{alignItems:'center',backgroundColor:'#8df7d',height:300,}}>
        
        <Image style={{width:"100%",height:"100%",padding:5,resizeMode:'cover',borderBottomLeftRadius:25,
      borderBottomRightRadius:25,}} source={product.subImg}/>
        
      <TouchableOpacity 
      onPress={() => navigation.goBack()}
      style={{
        position:'absolute',left:10,top:30,borderRadius:50,width:40,height:40,
        justifyContent:'center',alignItems:'center',backgroundColor:'#b2b7bf'
      }}>
        <Image source={require('../assets/icons/icons8-back-50.png')} style={{width:20,height:20}}/>

      </TouchableOpacity>
   </View>
   <View style={{alignItems:'center',}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold',}}>{product.name}</Text></View>
   <View style={{alignItems:'center',}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>Price: {product.price * qty} mmk</Text></View>
       <ScrollView>
        <View style={{marginHorizontal:10,padding:5,marginTop:10,marginBottom:120}}>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Light:</Text>
        <Text>{product.light}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Soil:</Text>
        <Text>{product.soil}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Water:</Text>
        <Text>{product.water}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Temperature:</Text>
        <Text>{product.temp}</Text>
        <Text style={{fontSize:16,fontWeight:'bold',marginBottom:5}}>Fertilizer:</Text>
        <Text>{product.fertilizer}</Text>
        

        </View>


       </ScrollView>
        
       
        
        
        <View style={{height:60,flexDirection:'row',alignItems:'center',
        justifyContent:'center',position:'absolute',bottom:0,backgroundColor:'#17692e',width:Wid,
        borderTopLeftRadius:15,borderTopRightRadius:15}}>
         <View style={{flexDirection:'row',position:'absolute',left:15}}>
         <Text style={{fontWeight:'bold',color:'white'}}>Amount:</Text>
          <Text style={{marginLeft:10,color:'white'}}>{qty}</Text>
         </View>

         <TouchableOpacity onPress={()=>{ addToWishList(product),
         Alert.alert(isInWishList? "Removed form Favourite" : "Added to Favourite List")}}  style={{}}>
                 
                    <Image style={{tintColor: isInWishList?'red': 'yellow',width:30,height:30,}} source={require('../assets/icons/icons8-heart-30.png')} />
                   
           
            </TouchableOpacity>
         
          <View style={{flexDirection:'row',marginLeft:40,}}>


         
            <TouchableOpacity onPress={()=>{clickPlus()}} style={{marginRight:10}}>
                <Image style={{width:30,height:30,tintColor:'orange'}} source={require('../assets/icons/icons8-plus-50.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{clickMinus()}}>
                <Image style={{width:30,height:30,tintColor:'orange'}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity onPress={()=>{saveTocart(product)}} style={{backgroundColor:'white',alignItems:'center',height:40,justifyContent:'center',position:'absolute',right:20,padding:10,borderRadius:15}}>
            <Text style={{fontWeight:'bold'}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        
        

    </SafeAreaView>
    
    )
}

export default ItemD;