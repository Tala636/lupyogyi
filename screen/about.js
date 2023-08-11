import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import BackHead from "../Components/backHeader";

const About = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <BackHead navigation={navigation} />
            <View style={{ padding: 20 }}>
                <Text style={{fontSize:18,fontWeight:'800',paddingBottom:10,color:'green'}}>About Our Plant Shop</Text>
                <Image source={{ uri: 'https://rootbridges.com/cdn/shop/articles/What_Are_The_Basic_Needs_Of_The_Indoor_Plants_To_Survive.jpg?v=1641212409' }}
                    style={{ width: '100%', height: 250, borderRadius: 15 }}
                />

                <View style={{ padding: 20, borderRadius: 15, elevation: 5, backgroundColor: 'white', marginTop: 20 }}>
                    <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                        To provide wide variety of indoor and outdoor plants
                        available in one place.
                        
                    </Text>
                </View>
                <View style={{ padding: 20, borderRadius: 15, elevation: 5, backgroundColor: 'white', marginVertical: 10 }}>
                    <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                        
                        To implement easy-to-use online ordering system in both
                        andriod platform and ios platform.
                    </Text>
                </View>
                <View style={{ padding: 20, borderRadius: 15, elevation: 5, backgroundColor: 'white',  }}>
                    <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                        To give the information to the customers about the
                        plants and this includes care instructions, sunlight
                        requirements, water needs, and potential uses, enabling
                        customers to make well-informed decisions.
                    </Text>
                </View>
            </View>



        </SafeAreaView>
    )
}

export default About;

const styles = StyleSheet.create({

    container: { flex: 1 },

    content: { flex: 1, },

    aboutUsContainer: { justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 200, },

    aboutUstxt: { fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 5 },

    outerView: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, marginTop: 10 },

    innerTxt: { flex: 1, fontSize: 16, color: 'grey', marginLeft: 15 }

})