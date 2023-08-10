import React,{useState,useEffect} from "react";
import { SafeAreaView,View,Text,
    Image,TouchableOpacity,
    TextInput,Dimensions, KeyboardAvoidingView,
} from "react-native";

 const screenWidth =Dimensions.get("screen").width
const Signup=()=>{

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [comfirm,setComfirm]=useState('')

    const[view1,setView1]=useState(true)
    const[view2,setView2]=useState(true)

        const CorrectionTest=()=>{

            let regName =/[a-zA-z]/;
            let regPhone= /[0][9][246789][0-9]{5,8}/;
            let regEmail =/[a-z0-9]+@gmail.com/;

            
        if( regName.test(name)==true && regPhone.test(phone)==true && phone.length<12 && regEmail.test(email)==true && password.length>6 && password==comfirm){




        }

    }



    return(
          
            
           
             <SafeAreaView style={{flex:1,}}>
            <View style={{}}>
          <Image style={{width:screenWidth,height:400,}} source={require('../assets/proflie/SignUpback.jpg')}/>
          </View>
          <View style={{position:'absolute',top:50,right:100}}>
            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',color:"white"}}>Register</Text>
            <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold',color:'white'}}>Create your new account</Text>
          </View>
           
           
            <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',position:"absolute",top:180,right:0,width:screenWidth,borderTopLeftRadius:150}}>
               <View>
               <TextInput
               style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,marginTop:80,borderWidth:0.5}}
            placeholder="User Name"
            onChangeText={(text)=>setName(text)}
            value={name}
            
                
                />
                
                <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild username...!</Text>
               </View>
                
                 <TextInput
                 
                 keyboardType="numeric"
               style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
            placeholder="Phone Number"
            onChangeText={(text)=>setPhone(text)}
            value={phone}
            
                
                />
               <View>
               <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaildphone number...!</Text>
                 <TextInput
                 keyboardType="email-address"
               style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
            placeholder="Email Address"
            onChangeText={(text)=>setEmail(text)}
            value={email}

            
                
                />
                <Text style={{fontSize:10,marginRight:150,color:'red'}}>Invaild email address...!</Text>
               </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                 secureTextEntry={view2}
                 
               style={{width:300,height:45,borderRadius:15,padding:10,marginVertical:10,borderWidth:0.5}}
            placeholder="Comfirm Password"
            onChangeText={(text)=>setPassword(text)}
            value={password}
            
                
                />
                {view1 ? 
                <TouchableOpacity onPress={()=>setView1(false)} style={{position:'absolute',bottom:20,right:10}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'black'}}/>
                </TouchableOpacity>:
                
                <TouchableOpacity onPress={()=>setView1(true)} style={{position:'absolute',bottom:20,right:10}}>
                    <Image source={require('../assets/icons/icons8-eye-30.png')} style={{height:25,width:25,tintColor:'gray'}}/>
                </TouchableOpacity>
                }
                </View>
                <Text style={{fontSize:10,color:'red'}}>Password should have at least 6 characters.</Text>
                 
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
                <Text style={{fontSize:10,color:'red'}}>Invaild password!</Text>
                 
                </View>
                <TouchableOpacity style={{width:300,height:45,backgroundColor:'#17692e',borderRadius:15,padding:10,marginTop:50,marginBottom:150}}>
                    <Text style={{textAlign:'center',color:'white',fontWeight:'900'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            
           
                    
                
         
    </SafeAreaView>
          
           
          

    )
    }
export default Signup;