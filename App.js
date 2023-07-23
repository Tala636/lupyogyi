import React from "react";
import {} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Login from "./screen/Login";
import Signup from "./screen/SignUp";
import Home from "./screen/Home";
import Category from "./screen/Categories";
import Cart from "./screen/Cart";
import Proflie from "./screen/Profile";
import ShowItems from "./screen/Items";
import ItemD from "./screen/ItemDetail";
import ShowItems2 from "./screen/item2";
import StartScreen from "./screen/Start";
import Inform from "./screen/Information";
import About from "./screen/about";
import Contact from "./screen/contact";
import Favo from "./screen/favorites";
import OderList from "./screen/orderList";


const stack=createNativeStackNavigator();

const App=()=>{
    return(
     <NavigationContainer>
     <stack.Navigator screenOptions={{headerShown:false}}>
     <stack.Screen name="login" component={Login}/>
     <stack.Screen name="start" component={StartScreen}/>
       <stack.Screen name="signup" component={Signup}/>
       <stack.Screen name="home" component={Home}/>
       <stack.Screen name="category" component={Category}/>
       <stack.Screen name="cart" component={Cart}/>
       <stack.Screen name="profile" component={Proflie}/>
       <stack.Screen name="showItem" component={ShowItems}/>
       <stack.Screen name="showItem2" component={ShowItems2}/>
       <stack.Screen name="detail" component={ItemD}/>
       <stack.Screen name="information" component={Inform}/>
       <stack.Screen name="about" component={About}/>
       <stack.Screen name="contact" component={Contact}/>
       <stack.Screen name="favorite" component={Favo}/>
       <stack.Screen name="orderList" component={OderList}/>
       

       
     </stack.Navigator>
        
     </NavigationContainer>
    )
}

export default App;