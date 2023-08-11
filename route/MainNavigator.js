import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Signup from "../screen/SignUp";
import Home from "../screen/Home";
import Category from "../screen/Categories"
import Cart from "../screen/Cart";
import Proflie from "../screen/Profile";
import ShowItems from "../screen/Items";
import ItemD from "../screen/ItemDetail";
import ShowItems2 from "../screen/item2";
import Inform from "../screen/Information";
import About from "../screen/about";
import Contact from "../screen/contact";
import Favo from "../screen/favorites";
import ShowItems3 from "../screen/item3";
import ShowItems4 from "../screen/item4";
import OrderDetail from "../screen/OrderDetail";
import Order from "../screen/Order";
import Favourite from "../screen/Favourite";



const stack = createNativeStackNavigator();

const MainNavigator=({navigation})=>{
    return(

      <NavigationContainer>
       <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name="login" component={Login}/>
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
       <stack.Screen name="showItem3" component={ShowItems3}/>
       <stack.Screen name="showItem4" component={ShowItems4}/>
       <stack.Screen name="orderList" component={Order}/>
       <stack.Screen name="orderDetail" component={OrderDetail}/>
       <stack.Screen name="Favourite" component={Favourite}/>
       


       
     </stack.Navigator>
      </NavigationContainer>
       
     
        
    
     
      
     
    )
}

export default MainNavigator;