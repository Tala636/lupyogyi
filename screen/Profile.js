import React,{useEffect} from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image,StatusBar } from "react-native";
import { colors } from "../constant/theme";
import BottomTabComponent from "../Components/Bottom";
import { useDispatch, useSelector } from "react-redux";
import signAction from "../stores/action/sign";
import loginAction from "../stores/action/login"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Proflie = ({ navigation, route }) => {

  const dispatch = useDispatch()
    const userData = useSelector(state => state.Login)

    //console.log("usr",userData)
  
  useEffect(() =>{
    async function getUserData(){
        let userData = await AsyncStorage.getItem('login')
        let prods = JSON.parse(userData)

    if(prods == null){
        AsyncStorage.setItem('login',JSON.stringify([]))
        dispatch(loginAction.login([]))
    }else{
        AsyncStorage.setItem('login',JSON.stringify(loginprods))
        dispatch(loginAction.login(prods))
    }
    }
    getUserData()
},[])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
      backgroundColor={'#8df7db'}
      />
      <View style={{
        backgroundColor: "#8df7db", height: 250, alignItems: 'center', padding: 10, borderBottomLeftRadius: 50,
        elevation: 5, borderBottomRightRadius: 50
      }}>
        <Image style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50 }}
          source={{ uri: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png' }} />
        <View style={{ flex: 1, alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {userData.user[0].name}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{userData.user[0].phone}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{userData.user[0].email}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, padding: 20, }}>
        <View style={{ backgroundColor: 'white', elevation: 5, borderRadius: 20 }}>
          {/* <View style={{ marginTop: 10, height: 50, justifyContent: 'center', }}>
            <TouchableOpacity

              onPress={() => navigation.navigate('information')}

              style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
              <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#8df7db' }} source={require('../assets/proflie/icons8-my-account-32.png')} />
              <Text>Account Information</Text>
            </TouchableOpacity>

          </View> */}
          {/* <View style={{ height: 0.5, backgroundColor: '#8df7db' }} /> */}


          {/* <TouchableOpacity
            onPress={() => navigation.navigate('orderList')}
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#8df7db' }} source={require('../assets/proflie/icons8-purchase-order-50.png')} />
            <Text>My Order List</Text>
          </TouchableOpacity> */}


          {/* <View style={{ height: 0.3, backgroundColor: '#8df7db' }} /> */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Favourite')}
            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#8df7db' }} source={require('../assets/proflie/icons8-heart-32.png')} />
            <Text>My Favorite</Text>
          </TouchableOpacity>


          {/* <View style={{ height: 0.3, backgroundColor: '#8df7db' }} /> */}

          <TouchableOpacity

            onPress={() => navigation.navigate('about')}

            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#8df7db' }} source={require('../assets/proflie/icons8-about-50.png')} />
            <Text>About</Text>
          </TouchableOpacity>


          {/* <View style={{ height: 0.5, backgroundColor: '#8df7db' }} /> */}

          <TouchableOpacity

            onPress={() => navigation.navigate('contact')}

            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#8df7db' }} source={require('../assets/proflie/icons8-contact-us-32.png')} />
            <Text>Contact us</Text>
          </TouchableOpacity>

          {/* <View style={{ height: 0.3, backgroundColor: '#8df7db' }} /> */}


        </View>
        <View style={{backgroundColor: 'white', elevation: 5, borderRadius: 20,marginTop:20 }}>
          <TouchableOpacity

            onPress={() => navigation.navigate('login')}

            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginVertical: 10 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: 'red' }} source={require('../assets/icons/icons8-logout-50.png')} />
            <Text>logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomTabComponent navigation={navigation} ScreenName="ProfileScreen" />
    </SafeAreaView>
  )
}

export default Proflie;