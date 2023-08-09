import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions, ColorPropType, ScrollView } from 'react-native'
import HeaderComponent from "../Components/HeaderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import orderAction from '../stores/action/order'



const Order = ({ navigation, route }) => {

    let order = useSelector(state => state.Order)
    const dispatch = useDispatch()

    //console.log("order", order)
    // const innner = order[0]

    useEffect(() => {
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
        getBoughtItem()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <HeaderComponent navigation={navigation} /> */}

            <ScrollView
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 40 }}
            >
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Your Order List</Text>
                </View>
                {
                    order?.map((item, index) => {

                        return (
                            <View style={{ paddingHorizontal: 10 }}>
                                {
                                    item?.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                 onPress={ () => navigation.navigate('Order Detail',{selectedOrder: item}
                                                )} 
                                                style={{ padding: 5, backgroundColor: 'white', marginTop: 6, borderRadius: 10, }}>

                                                <View style={{ padding: 5, flexDirection: 'row',justifyContent: 'space-between'}}>

                                                    <View style={{  marginLeft: 5,  }}>
                                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}>Name: {item.name}</Text>

                                                        <Text style={{ fontSize: 14, color: 'black', marginTop: 5}}>Price: {item.price} MMK</Text>
                                                        <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>Quantity: {item.qty} </Text>
                                                    </View>
                                                    <View style={{justifyContent:'center'}}>
                                                        <Text style={{ fontSize: 40 }}>›</Text>
                                                    </View>

                                                </View>

                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default Order    