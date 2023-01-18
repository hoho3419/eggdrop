import React, { useReducer, useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Deal from './pages/Deal';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import Cart from './util/Cart';

export  const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'auto'
    })
  }
// const userCart = []

const reducer = (state,action) => {
  let newData = [];
  switch(action.type){
    case "INIT":{
      return action.item;
    }
    case "ADD":{
      let tmp = state.filter((el) => el.item_no === action.item.item_no)
      if(!tmp.length){
        newData = [{...action.item}, ...state]
      }
      else{
        alert("이미 찜한 목록입니다.")
        return state;
      }
      break;
    }
    case "REMOVE":{
        newData = state.filter((el) => el.item_no !== action.id)
        break;
    }
    default :{
      break;
    }
  }
  localStorage.setItem('cart',JSON.stringify(newData));
  return newData;
}

export const userItemDispatchContext = React.createContext();
export const userItemStateContext = React.createContext();

function App() {
  // const data = ITEM_LIST;
  const [cartShowState,setCartShowState] = useState(false);
  const [cartData,dispatch] = useReducer(reducer,[]);
  useEffect(() =>{
    const cartBag = localStorage.getItem("cart")
    if(cartBag){
      const cartList = JSON.parse(cartBag);
      console.log(cartList)
      if(cartList.length >= 1){
        dispatch({
          type: "INIT",
          item: cartList
        })
      }
    }
  },[])
  console.log(cartData)

  const onAdd = (id,src,title_img,price,title,opt_color) =>{
    dispatch({
      type: "ADD",
      item:{
        item_no: id,
        src: src,
        title_img: title_img,
        price: price,
        title: title,
        opt_color: opt_color
      }
    })
  }
  const onRemove = (id) =>{
    dispatch({
      type: "REMOVE",
      id: id
    })
  }

  return (
    <userItemStateContext.Provider value={cartData}>
      <userItemDispatchContext.Provider value={{onAdd,onRemove}}>
        <BrowserRouter>
          <div className="App">
            <Header
            item={cartData}
            onHideCart={() => setCartShowState(false)}
            onShowCart={() => setCartShowState(true)}
            cartState={cartShowState}
            />
            {cartShowState && <Cart 
            item={cartData}
            onHideCart={() => setCartShowState(false)}
            />}
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/deal/:id' element={<Deal />}></Route>
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
      </userItemDispatchContext.Provider>
    </userItemStateContext.Provider>
  );
}

export default App;
