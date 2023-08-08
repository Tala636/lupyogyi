import React,{useState,useEffect} from "react";
import { SafeAreaView,View,Text,TouchableOpacity,TextInput,Dimensions,StyleSheet,Image } from "react-native";
import ModalComponent from "../Components/Modal";
import loginAction from '../stores/action/login';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch,useSelector } from "react-redux";








const Wid=Dimensions.get('screen').width;
  



const Signup=({navigation,route})=>{

   
  const userInfromation=useSelector(state=>state.User)
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [view,setView] = useState(true)
    const [Wname,setWname]=useState(false)
    const [Wphone,setWphone]=useState(false)
    const [Wemail,setWemail]=useState(false)
    const [Wpass,setWpass]=useState(false)

    const [useId,setUser]=useState([])

    const [showDialog, setShowDialog] = useState(false)

  


   const [list,setList]=useState([])

  
   const dispatch =useDispatch()  


   useEffect(()=>{
       AsyncStorage.getItem('user').then((res)=>{
        const userData =JSON.parse(res)

        if(userData==null){
            AsyncStorage.setItem('user',JSON.stringify([]))
            dispatch(loginAction.login([]))

        }
        else{
            AsyncStorage.setItem('user',JSON.stringify(userData))
            dispatch(loginAction.login(userData))
        }
       })

        
   },[])


        
    const ErrorEvent=()=>{  
    
        let regName =/[a-zA-z]/;
        let regPhone= /[0][9][246789][0-9]{5,8}/;
        let regEmail =/[a-z0-9]+@gmail.com/;
      
       

        if( regName.test(name)==true && regPhone.test(phone)==true && phone.length<12 && regEmail.test(email)==true && password.length>6){
           
            let data ={username:name,phone:phone,email:email,password:password};
            setList(data)

           setWname(false)
           setWphone(false)
           setWemail(false)
           setWpass(false)
           setShowDialog(true)

           
           
           
           
          
          
           
        }
        else{
              

            if(regName.test(name)==true){
           
                setWname(false);
               
        
    
               
            }
            else{
                
                setWname(true);
                
                
            }

            if(regPhone.test(phone)==true && phone.length<12){
            
                setWphone(false);
                
             }
             else{
                
                setWphone(true);
                
                
             }

             if(regEmail.test(email)==true){
            
                setWemail(false);
                
             }
             else{
                
                setWemail(true);
                
             }

             if(password.length>6){
            
                setWpass(false);
                
              }
              else{
                
                
                setWpass(true);
                
              }

        }
      
       
            
        }
        
        const saveData=(list)=>{
         let Arr =[]
         Arr.push(list)
        AsyncStorage.setItem('user',JSON.stringify(Arr))
        dispatch(loginAction.login(Arr)) 
        console.log(Arr)
        setName('')
        setPhone('')
        setEmail('')
        setPassword('')
         


        }
   
    
      

    
    




    
    return(
        
        <SafeAreaView style={{flex:1}}>
           <View style={{marginTop:60,alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'600'}}>Registration Form</Text>
            <Text>Please fill in the form below</Text>
           </View>
           <View style={{backgroundColor:'white',padding:10,marginTop:50,marginHorizontal:10}}>
            <View style={{}}>
            <Text style={{marginRight:280,marginBottom:5,fontWeight:'bold'}}>Full Name:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your name"
             onChangeText={text=>setName(text)}
             keyboardType="default"
             value={name}

            />
           { Wname? <Text style={{marginTop:5,color:'red'}}>Please enter your name.</Text>:
           <Text/>
           }
            
             
            </View>

            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold',}}>Phone Number:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your phone number"
             onChangeText={text=>setPhone(text)}
             value={phone}
             keyboardType="numeric"

            />
            {Wphone?<Text style={{marginTop:5,color:'red'}}>wrong phone number.</Text>:
            <Text/>
            }

            </View>
            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold'}}>Email Address:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="Enter your email address"
             keyboardType="email-address"
             onChangeText={text=>setEmail(text)}
             value={email}

            />
            {Wemail? <Text style={{marginTop:5,color:'red'}}>wrong email address.</Text>:
            <Text/>
            }

            </View>
            <View style={{marginTop:30}}>
            <Text style={{marginBottom:5,fontWeight:'bold'}}>Password:</Text>
            <TextInput style={{borderWidth:0.5,width:350,padding:5}}
             placeholder="create your password"
             secureTextEntry={view}
             onChangeText={text=>setPassword(text)}
             value={password}
             
            />
            { view ? 
                <TouchableOpacity onPress={()=>setView(false)} style={{position:'absolute',right:15,bottom:25}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'black'}}/>
                </TouchableOpacity>:
                
                <TouchableOpacity onPress={()=>setView(true)} style={{position:'absolute',right:15,bottom:25}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'gray'}}/>
                </TouchableOpacity>
                }
            {Wpass? <Text style={{marginTop:5,color:'red'}}>Your password should have 6 charaters at least.</Text>:
            <Text></Text>
            }
            </View>
            

            <TouchableOpacity 
             onPress={()=>{ErrorEvent()}
                          
            }
            style={styles.but}>
                <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Register</Text>
            </TouchableOpacity>
            
           
           </View> 
           
           <ModalComponent loginHandler={()=>{setShowDialog(false)
                                              saveData(list)
                                              navigation.navigate('home');
           
        }
                                            
                                               
        } 
           
                           logoutHandler={()=>{setShowDialog(false)
                                               saveData(list)
                                               navigation.navigate('login')
                        
                        
                        }} visible={showDialog}
           />

        </SafeAreaView>
    )
}


export default Signup;

const styles=StyleSheet.create({
    but:{alignItems:'center',
    marginTop:50,
    marginBottom:20,
    backgroundColor:'green',
    width:200,height:50,justifyContent:'center',
    borderRadius:15,
    marginLeft:80}
})