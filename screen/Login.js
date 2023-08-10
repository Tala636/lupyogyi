import React,{useEffect, useState} from "react";
import { SafeAreaView,Text,TextInput,TouchableOpacity,View,Image } from "react-native";
import loginAction from '../stores/action/login';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch,useSelector } from "react-redux";




const Login=({navigation})=>{
    let userInfromation=useSelector(state=>state.User)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError] = useState(false)
    const [view,setView] = useState(true)
    const dispatch=useDispatch()

    useEffect(()=>{

          
           
          


    },[])


       const loginHandler=()=>{
         
              AsyncStorage.getItem('user').then((res)=>{
              const userInfromation=JSON.parse(res)
               console.log(userInfromation)

               userInfromation.map((item,index)=>{
                if(item.email == email && item.password==password){
                    console.log('login successful')
                    setError(false)
                    AsyncStorage.setItem('user',JSON.stringify(userInfromation))
                    dispatch(loginAction.login(userInfromation))
                    setEmail('')
                    setPassword('')
                    navigation.navigate('home')
                    
                    
                }
                else{
                    console.log('login fail')
                    setError(true)
                   
                }
               })
            
            }
              )
             
          
        }

         




    return(
        <SafeAreaView style={{flex:1,padding:20,backgroundColor:'white',}}>
            <View style={{alignItems:'center',marginTop:40}}>
                 <Image style={{width:120,height:120,borderRadius:75,}} source={require('../assets/icons/appIcon.png')}/>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>လူပျိုကြီး</Text>
                <Text style={{marginTop:10}}>ပန်းပင်မျိုးစုံနဲ့ တခြားပျိုးပင်များ ရောင်းချပေးနေသည်</Text>
            </View>
             {error? <View style={{alignItems:'center',marginTop:50}}>
             <Text style={{color:'red'}}>
                Something is wrong!
             </Text>
             <Text style={{color:'red'}} >Please check your email address or password.</Text>
             </View>:
             <View/>
             
             }
            <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>Email ID</Text>
                <TextInput 
                placeholder="Enter your email"
                onChangeText={(text)=>setEmail(text)}
                keyboardType="email-address"
                value={email}
                style={{borderWidth:1,height:45,borderRadius:10,padding:5,marginTop:5,}}/>
            </View>

            <View style={{marginTop:20,}}>
                <Text style={{fontWeight:'bold'}}>Password</Text>
                <TextInput 
                secureTextEntry={view}
                placeholder="Enter your password"
                onChangeText={(text)=>setPassword(text)}
                value={password}
                style={{borderWidth:1,height:45,borderRadius:10,padding:5,marginTop:5}}/>
                {view ? 
                <TouchableOpacity onPress={()=>setView(false)} style={{position:'absolute',right:15,bottom:10}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'black'}}/>
                </TouchableOpacity>:
                
                <TouchableOpacity onPress={()=>setView(true)} style={{position:'absolute',right:15,bottom:10}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'gray'}}/>
                </TouchableOpacity>
                }
            </View>

            <TouchableOpacity 
              onPress={()=>navigation.navigate('home')}
            style={{backgroundColor:'blue',alignItems:'center',marginTop:20,height:45,justifyContent:'center',borderRadius:10}}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={{marginRight:5}}>I am a new user.</Text>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('signup')}
                >
                    <Text style={{fontWeight:'bold',color:'blue'}}>Sign up</Text>
                    <View style={{backgroundColor:'blue',height:1,}}/>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Login;