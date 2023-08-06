import React from "react";
import MainNavigator from './route/MainNavigator';
import rootReducer from "./stores/reducer";
import {  legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const Store=createStore(rootReducer)

const App =()=>{
  return(
        <Provider store={Store}>
           <MainNavigator/>
        </Provider>
  )
}

export default App;