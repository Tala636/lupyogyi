import React, { useEffect, useState } from "react";
import {
  SafeAreaView, View, TouchableOpacity, Text, Image, Dimensions, FlatList, Alert, Modal,
  TouchableWithoutFeedback, StyleSheet, ScrollView
} from "react-native";
import BottomTabComponent from "../Components/Bottom";
import { useDispatch, useSelector } from "react-redux";
import cartAction from '../stores/action/cart';
import orderAction from '../stores/action/order';
import totalQtyAction from '../stores/action/qty';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Wid = Dimensions.get('screen').width;




const Cart = ({ navigation, route }) => {

  let cartProducts = useSelector(state => state.Cart)
  let totalQty = useSelector(state => state.totalQty)

  let order = useSelector(state => state.Order)


  const dispatch = useDispatch()

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {

    const getCartProduct = async () => {
      const cartProdFromAsync = await AsyncStorage.getItem('cart')
      const cartProducts = JSON.parse(cartProdFromAsync)
      //console.log("cartPro",cartProducts[0].price)
      if (cartProducts == null) {
        AsyncStorage.setItem('cart', JSON.stringify([]))
        dispatch(cartAction.addToCart([]))
      }
      else {
        AsyncStorage.setItem('cart', JSON.stringify(cartProducts))
        dispatch(cartAction.addToCart(cartProducts))
      }
    }

    async function getBoughtItem() {
      let boughtData = await AsyncStorage.getItem('Buy')
      let prods = JSON.parse(boughtData)

      if (prods == null) {
        AsyncStorage.setItem('Buy', JSON.stringify([]))
        dispatch(orderAction.addToOrder([]))
      } else {
        AsyncStorage.setItem('Buy', JSON.stringify(prods))
        dispatch(orderAction.addToOrder(prods))
      }
    }


    const getTotalQty = async () => {
      const totalQtyFromAsync = await AsyncStorage.getItem('cartTotalQty')
      const totalQty = JSON.parse(totalQtyFromAsync)



      if (totalQty == null) {
        AsyncStorage.setItem('cartTotalQty', JSON.stringify(0))
        dispatch(totalQtyAction.setTotalQty(0))
      }
      else {
        AsyncStorage.setItem('cartTotalQty', JSON.stringify(totalQty))
        dispatch(totalQtyAction.setTotalQty(totalQty))


      }
    }
    getCartProduct();
    getTotalQty();
    getBoughtItem()

  }, [])

  const clickMinus = (minProd) => {
    const index = cartProducts.findIndex(prod => prod == minProd)


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
    else {
      deleteHandle(minProd)
    }
    console.log('Index....', index)
  }

  const clickPlus = (plusProd) => {
    let index = cartProducts.findIndex(prod => prod == plusProd)


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

  const deleteHandle = (delItem) => {
    let index = cartProducts.findIndex(prod => prod == delItem)

    let leftData = []
    AsyncStorage.getItem('cart').then((res) => {
      const cartData = JSON.parse(res)

      if (cartData == null) {
        AsyncStorage.setItem('cart', JSON.stringify([]))
        dispatch(cartAction.addToCart([]))

        AsyncStorage.setItem('cartTotalQty', JSON.stringify(0))
        dispatch(totalQtyAction.setTotalQty(0))
      }
      else {
        for (let i = 0; i < cartData.length; i++) {
          if (cartData[i]._id != delItem._id) {
            leftData.push(cartData[i])
          }
        }


        AsyncStorage.setItem('cart', JSON.stringify(leftData))
        dispatch(cartAction.addToCart(leftData))

        AsyncStorage.setItem('cartTotalQty', JSON.stringify(totalQty - cartProducts[index].qty))
        dispatch(totalQtyAction.setTotalQty(totalQty - cartProducts[index].qty))
      }



    })
  }

  const deleteAll = () => {
    AsyncStorage.setItem('cart', JSON.stringify([]))
    dispatch(cartAction.addToCart([]))

    AsyncStorage.setItem('cartTotalQty', JSON.stringify(0))
    dispatch(totalQtyAction.setTotalQty(0))
  }

  const BuyItem = (prod) => {

    AsyncStorage.removeItem('cart')
    dispatch(cartAction.addToCart([]))
    AsyncStorage.removeItem('cartTotalQty')
    dispatch(totalQtyAction.setTotalQty(0))


    AsyncStorage.getItem('Buy').then((res) => {
      const cartProducts = JSON.parse(res)

      let cartBuyArr = []
      if (cartProducts == null) {
        cartBuyArr.push(prod)

        AsyncStorage.setItem('Buy', JSON.stringify(cartBuyArr))
        dispatch(orderAction.addToOrder(cartBuyArr))


      }
      else {
        let isInCart = null

        for (let i = 0; i < cartProducts.lenght; i++) {


          if (cartProducts[i]._id == prod._id) {
            cartProducts[i].qty += 1
            isInCart = prod._id
          }
        }
        if (isInCart == null) {
          cartProducts.push(prod)
        }

        AsyncStorage.setItem('Buy', JSON.stringify(cartProducts));
        dispatch(orderAction.addToOrder(cartProducts));

      }


    })
      .catch((error) => {
        console.log('catch error', error)
      })
  }

  const handleOrder = () => {
    AsyncStorage.setItem('Buy', JSON.stringify([]));
        dispatch(orderAction.addToOrder([]));
  }

  let totalPrice = 0;

  cartProducts?.forEach(item => {
    const itemTotal = item.price * item.qty;
    totalPrice += itemTotal;
  });

  let tot = 0;
  order?.map((item, index) => {
    item?.forEach(item => {
      const itemtot = item.price * item.qty
      tot += itemtot
    })
  })


  console.log("toe", tot)

  return (
    <SafeAreaView style={{ flex: 1, }}>

      <View style={{ height: 50, marginTop: 15, justifyContent: 'center', }}>
        <TouchableOpacity
          onPress={() => { deleteAll(), Alert.alert("Deleted all item from cart") }}
          style={{ position: 'absolute', right: 10, backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white' }}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 174, }}>
        {cartProducts?.length > 0 ?
          <FlatList style={{ marginBottom: 10 }}

            data={cartProducts}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('detail', { product: item })}
                  key={index} style={{ flexDirection: 'row', height: 120, justifyContent: 'center', backgroundColor: 'white', marginTop: 5, alignItems: 'center', marginHorizontal: 5, borderRadius: 10, elevation: 5, shadowColor: 'black', marginBottom: 5 }}>
                  <View style={{ width: Wid / 2, }}>
                    <Image style={{ width: '85%', height: '99%', marginLeft: 10, borderRadius: 10, }} source={item.subImg} />
                  </View>
                  <View style={{ width: Wid / 2, marginRight: 10 }}>
                    <Text style={{ marginBottom: 10, fontSize: 16, }}>{item.name}</Text>
                    <Text style={{ marginBottom: 20 }}>Price:{item.price} mmk</Text>

                    <View style={{ flexDirection: 'row', }}>
                      <TouchableOpacity onPress={() => { clickPlus(item) }}>
                        <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: 'orange' }} source={require('../assets/icons/icons8-plus-50.png')} />
                      </TouchableOpacity>
                      <Text style={{ marginRight: 10 }}>{item.qty}</Text>
                      <TouchableOpacity onPress={() => { clickMinus(item) }}>
                        <Image style={{ width: 25, height: 25, tintColor: 'orange' }} source={require('../assets/icons/icons8-minus-sign-64.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => deleteHandle(item)}
                    style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#d7dade', borderRadius: 50 }}>
                    <Image style={{ width: 35, height: 35 }} source={require('../assets/icons/icons8-cross-sign-50.png')} />
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}



          /> :
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>

            <Text>There is no product in your cart!!!!</Text>


          </View>

        }
      </View>
      <View style={{
        height: 60, backgroundColor: '#17692e', position: 'absolute', bottom: 60, flexDirection: 'row', width: Wid, alignItems: 'center',
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
      }}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>

          <Text style={{ marginRight: 20, fontWeight: 'bold', color: 'white', fontSize: 16 }}>Total cost:</Text>
          <Text style={{ color: 'white' }}> {totalPrice}mmk</Text>

        </View>
        <TouchableOpacity onPress={() =>
          Alert.alert('', 'Are you sure want to buy', [
            { text: 'Cancel', onPress: () => console.log("") },
            { text: 'OK', onPress: () => { BuyItem(cartProducts), setModalOpen(true) } },
          ])


        }
          style={{ position: 'absolute', right: 20, backgroundColor: 'white', height: 40, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
          <Text style={{ color: '#17692e', fontWeight: 'bold' }}>Buy</Text>
        </TouchableOpacity>

      </View>

      <Modal transparent={true} visible={modalOpen} animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => {setModalOpen(false),handleOrder()}}
        >
          <View style={styles.cotainer}>
            <View style={styles.content}>
              <View style={styles.content1}>

                <Text style={{ width: '40%' }}>Product Name</Text>

                <Text style={{ width: '20%' }}>Quantity</Text>

                <Text style={{ width: '20%' }}>Price</Text>

                <Text style={{ width: '15%' }}>Total</Text>


              </View>
              <ScrollView>
                {
                  order?.map((item, index) => {

                    return (
                      <>
                        <View style={{ width: '100%' }}>
                          {
                            item?.map((item, index) => {
                              return (

                                <View style={{ padding: 5, width: '100%' }}>

                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '96%' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'green', marginTop: 5, width: '40%' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5, width: '20%', textAlign: 'center' }}>{item.qty} </Text>
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5, width: '20%' }}> {item.price} </Text>

                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5, width: '15%', textAlign: 'center' }}>{item.qty * item.price} </Text>
                                  </View>

                                </View>


                              )
                            })
                          }
                        </View>
                        
                      </>
                    )

                  })
                }
              </ScrollView>
              <View style={styles.content3}>
                          <Text style={{marginLeft:120,fontSize:18,fontWeight:'800',marginTop:5}}>Total Cost</Text>
                          <Text style={{marginRight:20,color:'green',fontSize:18,fontWeight:'800',
                        marginTop:5}}>{tot}</Text>
                        </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>


      <BottomTabComponent navigation={navigation} ScreenName="CartScreen" />
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  cotainer: {
    position: 'absolute', left: 0, right: 0, bottom: 0, top: 0,
    justifyContent: 'center', alignItems: 'center',
  },
  content: { width: '90%', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, elevation: 5, height: '70%' },
  content1: { flexDirection: 'row', backgroundColor: 'green', justifyContent: 'space-between', width: '100%', padding: 10, paddingVertical: 10 },
  content2: { width: '100', alignItems: 'flex-end', flexDirection: 'row' },
  content3:{flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderColor:'green',width:'100%',
marginVertical:10},
})