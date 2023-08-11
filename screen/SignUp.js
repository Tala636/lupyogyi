import React,{useState,useEffect} from "react";
import { SafeAreaView,View,Text,
    Image,TouchableOpacity,
    TextInput,Dimensions, KeyboardAvoidingView, ImageBackground, Alert,
} from "react-native";
import signAction from "../stores/action/sign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import loginAction from '../stores/action/login'
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";



 const screenWidth =Dimensions.get("screen").width
const Signup=({navigation})=>{
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [comfirm,setComfirm]=useState('')

    const [nameError,setNameError] =useState(false)
    const [phoneError,setPhoneError] =useState(false)
    const [emailError,setEmailError] =useState(false)
    const [passwordError,setPassError] =useState(false)
    const [comfirmError,setComfirmError] =useState(false)

    const[view1,setView1]=useState(true)
    const[view2,setView2]=useState(true)

    const dispatch =useDispatch()

        const Register=()=>{

            let regName =/[a-zA-z]/;
            let regPhone= /[0][9][246789][0-9]{5,8}/;
            let regEmail =/[a-z0-9]+@gmail.com/;

            
        if( regName.test(name)==true && regPhone.test(phone)==true && phone.length<12 && regEmail.test(email)==true && password.length>5 && password==comfirm){

                let data ={name:name,phone:phone,email:email,password:password}
                
                AsyncStorage.getItem('sign').then((res)=>{
                    const Userdata= JSON.parse(res)
                     if(Userdata==null){
                        let Arr=[]
                        Arr.push(data)
                        AsyncStorage.setItem('sign',JSON.stringify(Arr))
                        dispatch(signAction.Signup(Arr))
                     }
                      else{
                           Userdata.map((res)=>{
                            if(res.email==email){
                                AsyncStorage.setItem('sign',JSON.stringify(Userdata))
                                dispatch(signAction.Signup(Userdata))
                                Alert.alert('Alert Title', 'Existing email Address...!', [
       
                                    {text: 'OK',},
                                  ]);
                            } else{
                                 Userdata.push(data)
                                 AsyncStorage.setItem('sign',JSON.stringify(Userdata))
                                 dispatch(signAction.Signup(Userdata))
                                 Alert.alert('Alert Title', 'Create account successfully....', [
       
                                    {text: 'OK',onPress: () => navigation.navigate('login')},
                                  ]);
                            }
                           })
                      }
                })
                
        }
        else{
            if(regName.test(name)==true){
               setNameError(false)
            }
            else{
                setNameError(true)
            }

            if(regPhone.test(phone)==true && phone.length<12){
                setPhoneError(false)
             }
             else{
                 setPhoneError(true)
             }

             if(regEmail.test(email)==true){
                setEmailError(false)
             }
             else{
                 setEmailError(true)
             }

             if(password.length>5){
                setPassError(false)
             }
             else{
                setPassError(true)
             }

             if(password==comfirm){
               setComfirmError(false)
             }
             else{
                 setComfirmError(true)
             }
        }


       
    }    

      

    return(
          
            
           <KeyboardAvoidingView style={{flex:1}} enabled={true} behavior={"padding"}>
            
            <SafeAreaView style={{flex:1,}}>
            
            <ImageBackground style={{width:screenWidth,}} source={require('../assets/proflie/SignUpback.jpg')}>
            
            <View style={{marginTop:50}}>
              <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:"white"}}>Register</Text>
              <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold',color:'white'}}>Create your new account</Text>
            </View>
             
             
              <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',width:screenWidth,borderTopLeftRadius:150,marginTop:20}}>
                 <View>
                 <TextInput
                 style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,marginTop:80,borderWidth:0.5}}
              placeholder="User Name"
              onChangeText={(text)=>setName(text)}
              value={name}
              
                  
                  />
                  
                  {
                      nameError?
                      <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild username...!</Text>:
                      <Text/>
                  }
                 </View>
                  
                   <TextInput
                   
                   keyboardType="numeric"
                 style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
              placeholder="Phone Number"
              onChangeText={(text)=>setPhone(text)}
              value={phone}
              
                  
                  />
                 <View>
                 {
                      phoneError?
                      <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild phone number...!</Text>:
                      <Text/>
                  }
                   <TextInput
                   keyboardType="email-address"
                 style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
              placeholder="Email Address"
              onChangeText={(text)=>setEmail(text)}
              value={email}
  
              
                  
                  />
                   {
                      emailError?
                      <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild email address...!</Text>:
                      <Text/>
                  }
                 </View>
                 <View>
                  <View style={{flexDirection:'row'}}>
                  <TextInput
                   secureTextEntry={view1}
                   
                 style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
              placeholder="Comfirm Password"
              onChangeText={(text)=>setPassword(text)}
              value={password}
              
                  
                  />
                  {view1? 
                  <TouchableOpacity onPress={()=>setView1(false)} style={{position:'absolute',bottom:20,right:10}}>
                      <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'black'}}/>
                  </TouchableOpacity>:
                  
                  <TouchableOpacity onPress={()=>setView1(true)} style={{position:'absolute',bottom:20,right:10}}>
                      <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'gray'}}/>
                  </TouchableOpacity>
                  }
                  </View>
                  {
                     passwordError?
                      <Text style={{fontSize:10,marginRight:150,color:'red'}}>at least 6 characters.</Text>:
                      <Text/>
                  }
                   
                  </View>
                  <View>
                  <View style={{flexDirection:'row'}}>
                  <TextInput
                   secureTextEntry={view2}
                   
                 style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
              placeholder="Comfirm Password"
              onChangeText={(text)=>setComfirm(text)}
              value={comfirm}
              
                  
                  />
                  {view2 ? 
                  <TouchableOpacity onPress={()=>setView2(false)} style={{position:'absolute',bottom:20,right:10}}>
                      <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'black'}}/>
                  </TouchableOpacity>:
                  
                  <TouchableOpacity onPress={()=>setView2(true)} style={{position:'absolute',bottom:20,right:10}}>
                      <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'gray'}}/>
                  </TouchableOpacity>
                  }
                  </View>
                  {
                     comfirmError?
                      <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild password...!</Text>:
                      <Text/>
                  }
                   
                  </View>
                  <TouchableOpacity 
                  onPress={()=>Register()}
                  
                  style={{width:300,height:45,backgroundColor:'#17692e',borderRadius:15,padding:10,marginTop:50,marginBottom:100}}>
                      <Text style={{textAlign:'center',color:'white',fontWeight:'900'}}>Sign up</Text>
                  </TouchableOpacity>
                  
              </View>
              
              </ImageBackground>
                      
                  
           
      </SafeAreaView>
           </KeyboardAvoidingView>
          
           
          

    )
    }
export default Signup;