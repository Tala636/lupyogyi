import React,{useEffect,useState} from "react";
import { SafeAreaView,View,TouchableOpacity,Text,Image,Dimensions,FlatList, Alert } from "react-native";
import BottomTabComponent from "../Components/Bottom";
import { useDispatch,useSelector } from "react-redux";
import cartAction from '../stores/action/cart';
import totalQtyAction from '../stores/action/qty';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Wid =Dimensions.get('screen').width;
 

 

const Cart=({navigation,route})=>{

   const [qty,setQty]=useState()
  let cartProducts=useSelector(state=>state.Cart)
  let totalQty=useSelector(state=>state.totalQty)
  const dispatch =useDispatch()
 
  

  useEffect(()=>{

      const getCartProduct=async()=>{
        const cartProdFromAsync=await AsyncStorage.getItem('cart')
        const cartProducts = JSON.parse(cartProdFromAsync)
          //console.log("cartPro",cartProducts[0].price)
        if(cartProducts==null){
          AsyncStorage.setItem('cart',JSON.stringify([]))
          dispatch(cartAction.addToCart([]))
        }
        else{
          AsyncStorage.setItem('cart',JSON.stringify(cartProducts))
          dispatch(cartAction.addToCart(cartProducts))
        }
      }

      const getTotalQty=async()=>{
        const totalQtyFromAsync =await AsyncStorage.getItem('cartTotalQty')
        const totalQty=JSON.parse(totalQtyFromAsync)

        
        
        if(totalQty==null){
          AsyncStorage.setItem('cartTotalQty',JSON.stringify(0))
          dispatch(totalQtyAction.setTotalQty(0))
        }
        else{
          AsyncStorage.setItem('cartTotalQty',JSON.stringify(totalQty))
          dispatch(totalQtyAction.setTotalQty(totalQty))

          
        }
      }
      getCartProduct();
      getTotalQty();


  },[])

    const clickMinus=(minProd)=>{
      const index =cartProducts.findIndex(prod=>prod==minProd)

      if (cartProducts[index].qty > 1) {
        const updatedCartProducts = [...cartProducts]; 
        updatedCartProducts[index] = {
          ...updatedCartProducts[index],
          qty: updatedCartProducts[index].qty - 1,
        };
    
        const newTotalQty = totalQty - 1;
    
        AsyncStorage.setItem('cart', JSON.stringify(updatedCartProducts));
        dispatch(cartAction.addToCart(updatedCartProducts));
    
        AsyncStorage.setItem('cartTotalQty', JSON.stringify(newTotalQty));
        dispatch(totalQtyAction.setTotalQty(newTotalQty));
      }
      else{
        deleteHandle(minProd)
      }
      console.log('Index....',index)
    }

    const clickPlus=(plusProd)=>{
      let index =cartProducts.findIndex(prod=>prod==plusProd)

      const updatedCartProducts = [...cartProducts]; 
  updatedCartProducts[index] = {
    ...updatedCartProducts[index],
    qty: updatedCartProducts[index].qty + 1,
  };

  AsyncStorage.setItem('cart', JSON.stringify(updatedCartProducts));
  dispatch(cartAction.addToCart(updatedCartProducts));

  const newTotalQty = updatedCartProducts[index].qty;

  AsyncStorage.setItem('cartTotalQty', JSON.stringify(newTotalQty));
  dispatch(totalQtyAction.setTotalQty(newTotalQty));
};

    const deleteHandle=(delItem)=>{
      let index =cartProducts.findIndex(prod=> prod !==delItem)

      let leftData =[]
      AsyncStorage.getItem('cart').then((res)=>{
        const cartData =JSON.parse(res)

        if(cartData==null){
          AsyncStorage.setItem('cart',JSON.stringify([]))
          dispatch(cartAction.addToCart([]))

          AsyncStorage.setItem('cartTotalQty',JSON.stringify(0))
          dispatch(totalQtyAction.setTotalQty(0))
        }
        else{
          for(let i=0;i<cartData.length;i++){
           if(cartData[i]._id!=delItem._id){
            leftData.push(cartData[i])
           }
          }
          

          AsyncStorage.setItem('cart',JSON.stringify(leftData))
          dispatch(cartAction.addToCart(leftData))

          AsyncStorage.setItem('cartTotalQty',JSON.stringify(totalQty-cartProducts[index].qty))
          dispatch(totalQtyAction.setTotalQty(totalQty-cartProducts[index].qty))
        }
          
    

      })
    }

    const deleteAll = () => {
      AsyncStorage.setItem('cart',JSON.stringify([]))
          dispatch(cartAction.addToCart([]))

          AsyncStorage.setItem('cartTotalQty',JSON.stringify(0))
          dispatch(totalQtyAction.setTotalQty(0))
    }

    const BuyItem=()=>{
      AsyncStorage.removeItem('cart')
      dispatch(cartAction.addToCart([]))
      AsyncStorage.removeItem('cartTotalQty')
      dispatch(totalQtyAction.setTotalQty(0))
    }

    let totalPrice = 0;

cartProducts?.forEach(item => {
  const itemTotal = item.price * item.qty;
  totalPrice += itemTotal;
});

    return(
        <SafeAreaView style={{flex:1}}>
        
          <View style={{height:50,marginTop:35,justifyContent:'center',}}>
            <TouchableOpacity 
             onPress={() => {deleteAll(),Alert.alert("Deleted all item from cart")}}
            style={{position:'absolute',right:10,backgroundColor:'red',padding:10,borderRadius:10}}>
              <Text>Clear all</Text>
            </TouchableOpacity>
          </View>
         <View style={{marginBottom:199,}}>
        {cartProducts?.length>0 ?
         <FlatList style={{marginBottom:10}}
          
         data={cartProducts}
         renderItem={({item,index})=>{
           return(
             <View key={index} style={{flexDirection:'row',height:120 ,justifyContent:'center',backgroundColor:'white',marginTop:5,alignItems:'center',marginHorizontal:5,borderRadius:5,elevation:5,shadowColor:'black',marginBottom:5}}>
           <View style={{width:Wid/2,}}>
           <Image style={{width:'85%',height:'99%',marginLeft:25}} source={item.subImg}/>
           </View>
           <View style={{width:Wid/2,marginRight:35}}>
             <Text style={{marginBottom:15,fontSize:16,}}>{item.name}</Text>
             <Text style={{marginBottom:10}}>Price:{item.price} mmk</Text>
             
             <View style={{flexDirection:'row',}}>
             <TouchableOpacity onPress={()=>{clickPlus(item)}}>
               <Image style={{width:25,height:25,marginRight:10}} source={require('../assets/icons/icons8-plus-50.png')}/>
             </TouchableOpacity>
               <Text style={{marginRight:10}}>{item.qty}</Text>
               <TouchableOpacity onPress={()=>{clickMinus(item)}}>
               <Image  style={{width:25,height:25}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>
               </TouchableOpacity>
             </View>
           </View>
           <TouchableOpacity 
           onPress={() => deleteHandle(item)}
           style={{position:'absolute',top:0,right:0,backgroundColor:'#d7dade',borderRadius:50}}>
             <Image  style={{width:35,height:35}} source={require('../assets/icons/icons8-cross-sign-50.png')}/>
           </TouchableOpacity>
         </View>
           )
         }}
         keyExtractor={(item,index)=>index.toString()}
         showsVerticalScrollIndicator={false}



         />:
         <View style = {{justifyContent:'center', alignItems:'center',marginTop:300}}>

        <Text>There is no product in your cart!!!!</Text>


    </View>

        }
         </View>
          <View style={{height:60,backgroundColor:'white',position:'absolute',bottom:62,flexDirection:'row',width:Wid,alignItems:'center',}}>
            <View style={{flexDirection:'row',marginLeft:10}}>
             
                <Text style={{marginRight:20,fontWeight:'bold'}}>Total cost:</Text>
                <Text> {totalPrice}mmk</Text>
             
            </View>
            <TouchableOpacity onPress={()=>  Alert.alert('', 'Are you sure want to buy', [
       
       {text: 'OK', onPress: () => BuyItem()},
     ])} style={{position:'absolute',right:20,backgroundColor:'orange',height:40,width:100,alignItems:'center',justifyContent:'center',borderRadius:25}}>
                <Text style={{color:'white',fontWeight:'bold'}}>Buy</Text>
            </TouchableOpacity>
           
          </View>
          <BottomTabComponent navigation={navigation} ScreenName="CartScreen"/>
        </SafeAreaView>
    )
}

export default Cart;