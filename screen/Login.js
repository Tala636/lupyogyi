import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Image,
    ScrollView,KeyboardAvoidingView, ImageBackground, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import signAction from "../stores/action/sign";
import loginAction from "../stores/action/login"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../Components/Context";



const screenWidth = Dimensions.get("screen").width;

const Login = ({ navigation }) => {

    const [data, setData] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [error1, setError1] = useState(false)
    const [view, setView] = useState(true)
    const dispatch = useDispatch()
    const UserData = useSelector(state => state.Sign)
    

    //console.log("userData",UserData)

    useEffect(() =>{
        async function getUserData(){
            let userData = await AsyncStorage.getItem('sign')
            let prods = JSON.parse(userData)
    
        if(prods == null){
            AsyncStorage.setItem('sign',JSON.stringify([]))
            dispatch(signAction.Signup([]))
        }else{
            AsyncStorage.setItem('sign',JSON.stringify(prods))
            dispatch(signAction.Signup(prods))
        }
        }
        getUserData()
    },[])

    const handleLogin = () => {
        UserData?.user.map((item,index) => {
            
            if(item.email === email && item.password === password){
                let userArr = []
                userArr.push(item)
                
                AsyncStorage.setItem('login',JSON.stringify(userArr))
                dispatch(loginAction.login(userArr))
                navigation.navigate('home')
                // Alert.alert('', 'Login Successful', [
                //     { text: 'Ok', onPress: () => console.log("") },
                    
                //   ])
            }else{
                // Alert.alert('', 'Login fail', [
                //     { text: 'Ok', onPress: () => console.log("") },
                    
                //   ])
            }
       
        })
    }

    return (
        <Context.Provider value={{}}>
        <SafeAreaView style={{}}>
            <ImageBackground style={{ width: screenWidth,height:'100%'}} source={require('../assets/login/nature-background-backgrounds-hd-wallpaper.jpg')}>
            <ScrollView style={{flex:1}}>
            <KeyboardAvoidingView  
            style={{flex:1}}
            behavior={''}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Login</Text>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>to your account</Text>


                </View>
                <View style={{ borderTopLeftRadius: 200, alignItems: 'center', backgroundColor: 'white',}}>
                    <Image source={require('../assets/icons/appIcon.png')} style={{ height: 150, width: 150, borderRadius: 150, marginTop: 35, }} />

                    <View style={{ marginBottom: 10,paddingHorizontal:20 }}>
                        <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: 'bold' }}>Email address</Text>
                        <View>
                            <TextInput
                                style={{ width: 350, borderWidth: 0.5, height: 50, padding: 10, borderRadius: 10 }}
                                placeholder="Enter your email address"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                        </View>
                        {error ?
                            <Text style={{ color: 'red' }}>Invaild email address</Text> :
                            <Text />
                        }

                    </View>

                    <View style={{}}>
                        <Text style={{ marginBottom: 5, fontSize: 16, fontWeight: 'bold', }}>Password</Text>
                        <View style={{ marginBottom: 5, flexDirection: "row" }}>
                            <TextInput
                                secureTextEntry={view}
                                style={{ width: 350, borderWidth: 0.5, height: 50, padding: 10, borderRadius: 10 }}
                                placeholder="Enter your password"
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                            {
                                view ?
                                    <TouchableOpacity>
                                        <Image style={{ width: 25, height: 25, position: 'absolute', right: 20, bottom: 10, tintColor: 'black' }} source={require('../assets/icons/icons8-eye-30.png')} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity>
                                        <Image style={{ width: 25, height: 25, position: 'absolute', right: 20, bottom: 10, tintColor: 'gray' }} source={require('../assets/icons/icons8-eye-30.png')} />
                                    </TouchableOpacity>
                            }
                        </View>
                        {error ?
                            <Text style={{ color: 'red' }}>Invaild email address</Text> :
                            <Text />
                        }
                    </View>
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        style={{ backgroundColor: 'blue', alignItems: 'center', marginTop: 20, height: 45, justifyContent: 'center', borderRadius: 10, width: 350, }}>
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ marginRight: 5 }}>Create a new account.</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('signup')}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'blue' }}>Sign up</Text>
                            <View style={{ backgroundColor: 'blue', height: 1, }} />
                        </TouchableOpacity>
                    </View>


                </View>
            </KeyboardAvoidingView>
            </ScrollView>
           
            </ImageBackground>
        </SafeAreaView>
        </Context.Provider>
    )

}


export default Login;