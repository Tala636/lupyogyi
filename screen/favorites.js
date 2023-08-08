import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,Image,TouchableOpacity,StyleSheet,FlatList,} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import cartAction from '../stores/action/cart'
import totalQtyAction from '../stores/action/qty'
import wishListAction from '../stores/action/wishList'
import BackHead from '../Components/backHeader'
import {useDispatch, useSelector} from 'react-redux'


const Favo = ({navigation}) => {

    let wishListProd = useSelector(state => state.WishList)  //! redux 

    const dispatch = useDispatch()              


    useEffect(() => {

        const getWishListProducts = async() => {

            const wishListProdFromAsync = await AsyncStorage.getItem('wishList')

            const wishListProd = JSON.parse(wishListProdFromAsync)

            if(wishListProd == null){

                AsyncStorage.setItem('wishList', JSON.stringify([]))
                dispatch(wishListAction.addToWishList([]))

            }else{

                AsyncStorage.setItem('wishList', JSON.stringify(wishListProd))
                dispatch(wishListAction.addToWishList([]))

            }
        }

        getWishListProducts()

    },[])


    const saveToCart = (cartItem) => {

        cartItem.qty = 1

        AsyncStorage.getItem('cart').then((res) => {
        const cartProducts = JSON.parse(res)
        let cartArr = []
        let totalQty = cartItem.qty


        if(cartProducts == null){

            cartArr.push(cartItem)

            AsyncStorage.setItem('cart', JSON.stringify(cartArr))
            dispatch(cartAction.addToCart(cartArr))

            AsyncStorage.setItem('cartTotalQty', JSON.stringify(totalQty))
            dispatch(totalQtyAction.setTotalQty(totalQty))

        } else {

            let isInCart = null
           
            for(let i = 0; i < cartProducts.length; i++){

                totalQty += cartProducts[i].qty

                if(cartProducts[i]._id == cartItem._id){

                    cartProducts[i].qty += 1

                    isInCart = cartItem._id

                }

            }

            if(isInCart == null){

                cartProducts.push(cartItem)

               
            }

            AsyncStorage.setItem('cart', JSON.stringify(cartProducts))
            dispatch(cartAction.addToCart(cartProducts))


            AsyncStorage.setItem('cartTotalQty', JSON.stringify(totalQty))
            dispatch(totalQtyAction.setTotalQty(totalQty))



        }

    })

    .catch((error) => {

        console.log('catch error', error)

    })

    }

    const removeEachItem = (removeItem) => {

        console.log('remove Item is...', removeItem)

        AsyncStorage.getItem('wishList').then((res) => {

        const wishListData = JSON.parse(res)

        console.log('Saved wishList items...', wishListData)

        let leftWishListData = [];

        if(wishListData != null){

            leftWishListData = wishListData.filter(prod => prod._id == removeItem._id)

        }

        AsyncStorage.setItem('wishList', JSON.stringify(leftWishListData))
        dispatch(wishListAction.addToWishList(leftWishListData))



        })
        .catch((error) => {

            console.log('catch error....', error)


        })

    }


    return(

        <SafeAreaView style = {styles.container}>

            <BackHead navigation={navigation}/>

        <View style = {styles.content}>

            {wishListProd ?. length > 0 && <View style = {styles.removeItemContainer}>

            <TouchableOpacity onPress={() => {

                AsyncStorage.removeItem('wishList')
                dispatch(wishListAction.addToWishList([]))}}>

                <Text style = {styles.removeItemText}>Remove All</Text>


            </TouchableOpacity>

            </View>}

            {wishListProd ?. length > 0 ? <FlatList
            
            data = {wishListProd}
            renderItem = {({item,index}) => {

            return(


        <TouchableOpacity key = {index} onPress = {() => {navigation.navigate('DetailScreen')}} style = {styles.cardContainer}>

        <View style = {{width:'40%',}}>                          
            <Image style = {{width:'100%',height:'100%',borderRadius:10}} source = {item.subImg}/>

        </View>

        <View style = {{width:'60%', paddingLeft:15}}>      

            <Text style = {styles.CardTitleText}>{item.productName}</Text>  

            <Text style = {styles.CardCountryText}>(Made in Myanmar)</Text>

            <Text style = {styles.CardProdPrice}>{item.price}</Text>

            <TouchableOpacity onPress={() => {removeEachItem(item)}} style = {styles.removeEachItemContainer}>


                <Image style = {{width:30,height:30,tintColor:'orange'}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>


            </TouchableOpacity>

        

            <TouchableOpacity onPress={() => saveToCart(item)} style = {styles.addToCartContainer}>

                <Text style = {styles.addToCartText}>Add To Cart</Text>

            </TouchableOpacity>

        
        </View>

        
        </TouchableOpacity>

    
        )
        }}

            keyExtractor = {(item,index) => index.toString()}

        /> : 

        <View style = {styles.noProdContainer}>

            <Text>There is no products in your wishList!!!!</Text>

        </View>

        }

        </View> 

        </SafeAreaView>

    )
}
export default Favo;

const styles = StyleSheet.create({

    container : {},

    content : {},

    cardContainer : {flexDirection:'row', height:140, padding:15, backgroundColor:'white', borderRadius:10, margin:10},

    CardTitleText : {fontSize:18, fontWeight:'bold',},

    CardCountryText : {fontSize:15, color:'orange'},

    CardProdPrice   : {fontSize:18, fontWeight:'bold', color:'orange', marginTop:10},

    addToCartContainer : {position:'absolute', right:-15, bottom:-15, padding:10,backgroundColor:'white',borderBottomRightRadius:10,borderTopLeftRadius:10},

    addToCartText : {fontSize:15, color:'white', fontWeight:'bold'},

    removeEachItemContainer : {position:'absolute', right:-15, top:-15},

    removeItemContainer : {alignItems:'flex-end',marginRight:10},

    removeItemText : {fontSize:24, fontWeight:'bold', color:'white'},

    noProdContainer : {flex:1,justifyContent:'center', alignItems:'center'}
})