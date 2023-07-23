import React from "react";
import {View,Image,Text,TouchableOpacity} from 'react-native';

const BackHead=()=>{
    return(
        <View style={{height:60,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-plus-50.png')} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
                <Image style={{width:45,height:45}} source={require('../assets/icons/icons8-minus-sign-64.png')}/>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity>
            <Text>Addcart</Text>
          </TouchableOpacity>
        </View>
    )
}

export default BackHead;