import React,{useEffect,useState}  from "react";
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet, FlatList,Image,Dimensions, 
  Alert,ColorPropType} from 'react-native'

import {useSelector, useDispatch} from 'react-redux'
import cartAction from '../stores/action/cart';
import totalQtyAction from '../stores/action/qty';
import wishListAction from '../stores/action/wishList';
import AsyncStorage from "@react-native-async-storage/async-storage"


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

 

const Favourite = ({navigation,route}) =>{

    const dispatch = useDispatch()
    const [qty,setQty]=useState(1)

    const products = useSelector(state => state.WishList)

    // console.log("The information are ..........", products)


useEffect(() =>{
    async function getWishListProducts(){
        let wishListData = await AsyncStorage.getItem('wishlist')
        let prods = JSON.parse(wishListData)

    if(prods == null){
        AsyncStorage.setItem('wishlist',JSON.stringify([]))
        dispatch(wishListAction.addToWishList([]))
    }else{
        AsyncStorage.setItem('wishlist',JSON.stringify(prods))
        dispatch(wishListAction.addToWishList(prods))
    }
    }
    getWishListProducts()
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

      

    })
    .catch((error)=>{
      console.log('catch error',error)
    })
   }
    
    
    

    


    return(
        <View style={styles.container}>
        { products?.length > 0 ?
        <View style={styles.content}>
        { 
        products?.length > 0 && <View style={{alignItems:'flex-end'}}>
             <TouchableOpacity onPress={ () =>{
                 AsyncStorage.removeItem('wishlist')
                 dispatch(wishListAction.addToWishList([]))
                 
             }}>
                 <Text style={{fontSize: 24, fontWeight: 'bold', color : 'green'}}>Remove all</Text>

             </TouchableOpacity>

         </View>}
          <FlatList
              data={products}
              renderItem={({ item, index}) =>{
                return(
                  <TouchableOpacity onPress={ () => navigation.navigate('detail',{product:item})} key={index} 
                   style={styles.overView}>

                     <View 
                     style={styles.btn}>

                        <Image source={item.subImg} resizeMode="cover" style={styles.btn}/>

                     </View>
                      <View style={styles.overText}>
                        <Text style={styles.text1}>{item.name}</Text>
                        {/* <Text style={styles.text2}>(Made in Myanmar)</Text> */}
                        <Text style={styles.text3}>{item.price}</Text>

                      </View>
                      <TouchableOpacity  onPress={() => {saveTocart(item),Alert.alert('Alert Title', 'Item added to cart', [
       
       {text: 'OK', },
     ]);}} 
                       style={styles.smallBtn}>

                          <Text style={styles.btnText}>Add To Cart</Text>

                      </TouchableOpacity>
                    

                  </TouchableOpacity>
                )
              }}
              keyExtractor= {(item,index) => index.toString()} 
              showsVerticalScrollIndicator={false}
          />
       
      
      


      </View>
      
      :

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>There is no wishlist data!</Text>
          </View>}
      {/* <ButtomTabComponent navigation={navigation} routeName ={route.name}/> */}
      </View>
      
    )
}
export default Favourite


const styles = StyleSheet.create({

    container:{flex: 1},
    content:{flex: 1, padding:18},
    titText:{fontSize:24,fontWeight: 'bold',  color:'green',},
    overView:{ flexDirection:'row', backgroundColor:'white',borderRadius:10,padding:16,marginTop:15},
    btn:{width:width/4+10, height: width/4+10, borderRadius:10,justifyContent:'center',alignItems:'center'},
    img:{width: "100%",height:"100%",borderRadius:10},
    overText:{flex:1,marginLeft:10},
    text1:{fontSize: 20, color:'green',fontWeight:'bold'},
    text2:{fontSize: 14,color: 'green'},
    text3:{marginTop:  15, fontSize: 16, color: 'green', },
    smallBtn:{borderTopLeftRadius:10, borderBottomRightRadius: 10, paddingVertical: 8,
      paddingHorizontal:25, position: 'absolute', bottom:0, right:0, backgroundColor: 'green',
      justifyContent:'center',alignItems:'center'},
      btnText:{color: 'white', fontSize: 14, fontWeight:'bold'},

})