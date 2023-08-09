import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'




const OrderDetail = ({ navigation, route }) => {

    const { selectedOrder } = route?.params
    const total = selectedOrder.qty * selectedOrder.price
    const delivery = 2000
    const total1 = total + delivery
    const tax = total1 * 0.05
    const totalAmount = total1 + tax
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <HeaderComponent navigation={navigation} title='Order Detail' iconName='back' parentScreenName="Order"/> */}
            <ScrollView>
                <View style={{ flex: 1, padding: 15, paddingTop: 50 }}>
                    <View style={{ backgroundColor: '#9c5230', width: '70%', borderRadius: 10, height: 43, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 23, fontWeight: '400', color: 'white' }}>Order Information</Text>
                    </View>
                    <View style={{borderWidth:1,borderColor:'#bfaaa1',marginTop:30}}>
                        <View style={styles.titleRowContainer}>
                            <Text style={[{ flex: 1, color: 'green' }, styles.textBold]}>Name</Text>
                            <Text style={[{ width: '15%', textAlign: 'center', color: 'green' }, styles.textBold]}>Qty</Text>
                            <Text style={[{ width: '20%', color: 'green' }, styles.textRightBold]}>Price</Text>
                            <Text style={[{ width: '20%', color: 'green' }, styles.textRightBold]}>Total</Text>
                        </View>
                        <View style={styles.bigDivider} />
                        {/* {
  
  selectedOrder.map((item, index) => {
                console.log("Item", item)
                return ( */}
                        <View >
                            <View style={styles.titleRowContainer}>
                                <Text style={[{ flex: 1 }, styles.textNormal]}>{selectedOrder.name}</Text>
                                <Text style={[{ width: '15%', textAlign: 'center' }, styles.textNormal]}>{selectedOrder.qty}</Text>
                                <Text style={[{ width: '20%' }, styles.textRight]}>{selectedOrder.price}</Text>
                                <Text style={[{ width: '20%' }, styles.textRight]}>{total}</Text>
                            </View>
                            <View style={styles.smallDivider} />
                        </View>


                        <View style={styles.subTotalContainer}>
                            <View>
                                <Text style={[styles.textRightBold, { color: '#729e7e' }]}>Sub Total -</Text>
                                <Text style={[styles.textRightBold, { color: '#729e7e' }]}>Tax - </Text>
                                <Text style={[styles.textRightBold, { color: '#729e7e' }]}>Delivery -</Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.textRightBold}>{total}</Text>
                                <Text style={styles.textRightBold}>5%</Text>
                                <Text style={styles.textRightBold}>{delivery}</Text>
                            </View>
                        </View>
                        <View style={styles.bigDivider} />
                        <View style={styles.subTotalContainer}>
                            <Text style={[styles.textRightBold, { color: '#9c5230' }]}>Total - </Text>
                            <Text style={[styles.textRightBold, { marginLeft: 20 }]}>{totalAmount}</Text>
                        </View>
                        <View style={[{ marginTop: 5 }, styles.bigDivider]} />
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                <Text style={{fontSize:23,fontStyle:'italic',color:'#9c5230'}}>Thanks for your odering</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderDetail





const styles = StyleSheet.create({
    textRight: { textAlign: 'right', fontSize: 14 },
    textBold: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
    textNormal: { fontSize: 14 },
    titleRowContainer: { flexDirection: 'row', paddingLeft: 5, paddingVertical: 10, alignItems: 'center', paddingTop: 20 },
    textRightBold: { textAlign: 'right', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
    bigDivider: { height: 2, backgroundColor: '#bfaaa1' },
    smallDivider: { marginLeft: 5, height: 1, backgroundColor: '#bfaaa1' },
    subTotalContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 15 },
})