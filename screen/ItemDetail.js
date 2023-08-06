import React,{useState,useEffect} from "react";
import { SafeAreaView,View,TouchableOpacity,Image,Text,Dimensions,ScrollView } from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch,useSelector } from "react-redux";
import cartAction from '../stores/action/cart';
import totalQtyAction from '../stores/action/qty';
import wishListAction from '../stores/action/wishList';









const Wid=Dimensions.get('screen').width;






 
const ItemD=({navigation,route})=>{

  let {product}=route.params;
   const [isInWishList,setIsInWishList]=useState(false)
   const [qty,setQty]=useState(1)
   const dispatch =useDispatch()//redux..!

   useEffect(()=>{
     AsyncStorage.getItem('wishList').then((res)=>{
      const wishListData =JSON.parse(res)
      if(wishListData==null){
        setIsInWishList(false)
      }
      else{
        let isWishListId=null
        for(let i=0;i<wishListData.lenght;i++){
          if(wishListData[i]._id==product._id){
            isWishListId=product._id
          }
          
        }
        if(isWishListId==null){
          setIsInWishList(true)
        }
        else{
          setIsInWishList(false)
        }
      }
     })

   },[])

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
          totalQty +=cartProducts[i].qty

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

    const saveTowishList=(wishListItem)=>{

      if(isInWishList){
        AsyncStorage.getItem('wishList').then((res)=>{
          const wishListData=JSON.parse(res)

          let wishListArr=[]
          if(wishListData!=null){
             wishListArr=wishListData.filter(prod=>prod._id!=wishListItem._id)
            
          }
          AsyncStorage.setItem('wishList',JSON.stringify(wishListArr))
          dispatch(wishListAction.addToWishList(wishListArr))
        })
        setIsInWishList(false)
      }
      else{
        AsyncStorage.getItem('wishList').then((res)=>{
          const wishListData=JSON.parse(res)
          let wishListArr=[]
          if(wishListData==null){
            wishListArr.push(wishListItem)

            AsyncStorage.setItem('wishList',JSON.stringify(wishListArr))
            dispatch(wishListAction.addToWishList(wishListArr))
          }
          else{
            let isWishListId=null
            for(let i=0;i<wishListData.lenght;i++){
              if(wishListData[i]._id==wishListItem._id){
                isWishListId=wishListItem._id
              }
            }
            console.log('is Id null....',isWishListId)
            if(isWishListId==null){
              wishListData.push(wishListItem)
            }
            AsyncStorage.setItem('wishList',JSON.stringify(wishListData))
            dispatch(wishListAction.addToWishList(wishListData))
          }
          setIsInWishList(true)

        })
      }

    }
    
    return(
    
    
    <SafeAreaView style={{flex:1}}>
    <HeaderComponent navigation={navigation}/>
   
    <View style={{alignItems:'center',marginTop:90,backgroundColor:'white',height:300,}}>
        
        <Image style={{width:"100%",height:"100%",padding:5,resizeMode:'cover'}} source={product.subImg}/>
        
      
   </View>
   <View style={{alignItems:'center'}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>{product.name}</Text></View>
   <View style={{alignItems:'center'}}><Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>Price: {product.price} mmk</Text></View>
       <ScrollView>
        <View style={{backgroundColor:'white',marginHorizontal:10,padding:5,marginTop:10,marginBottom:120}}>
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
        
       
        
        
        <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',bottom:0,backgroundColor:'white',width:Wid}}>
         <View style={{flexDirection:'row',position:'absolute',left:15}}>
         <Text style={{fontWeight:'bold',}}>Amount:</Text>
          <Text style={{marginLeft:10}}>{qty}</Text>
         </View>
         
          <View style={{flexDirection:'row',marginLeft:40}}>


         
            <TouchableOpacity onPress={()=>{clickPlus()}} style={{marginRight:10}}>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-plus-50.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{clickMinus()}}>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity onPress={()=>{saveTocart(product)}} style={{backgroundColor:'red',alignItems:'center',height:40,justifyContent:'center',position:'absolute',right:20,padding:5,borderRadius:5}}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{position:'absolute',top:100,right:20,}}>
            <TouchableOpacity onPress={()=>{saveTowishList(product)}}  style={{}}>
                  {
                    isInWishList ? 
                    <Image style={{tintColor:'red',width:45,height:45,}} source={require('../assets/icons/icons8-heart-32.png')} />
                    :
                    <Image style={{tintColor:'yellow',width:45,height:45,}} source={require('../assets/icons/icons8-heart-32.png')} />
                  }
                  
           
            </TouchableOpacity>
        </View>

        

    </SafeAreaView>
    
    )
}

export default ItemD;