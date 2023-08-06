import Data from '../reducer/data';
import Cart from '../reducer/cart';
import TotalQty from '../reducer/qty';
import WishList from '../reducer/wishList';
import Login from '../reducer/login';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ Data, Cart, TotalQty, WishList, Login})


export default rootReducer;