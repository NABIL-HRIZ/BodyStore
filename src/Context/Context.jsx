import {createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const AppContext=createContext()

const AppProvider=({children})=>{
    
    const [products,setProducts]=useState()
    const [categories,setCategories]=useState()
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartSubTotal,setCartSubTotal]=useState(0)
    const location = useLocation() 
  
    useEffect(()=>{
      window.scrollTo(0,0)
    },[location])

  useEffect(()=>{
  let count =0
  cartItems.map((item)=>count += item.attributes.quantity)
  setCartCount(count)

   let subtotal=0;
   cartItems.map((item)=>subtotal+=item.attributes.price * item.attributes.quantity)
   setCartSubTotal(subtotal)
  },[cartItems])

   const addToCart=(product,quantity)=>{
    let items=[...cartItems]
    let index=items.findIndex((p)=>p.id===product.id)
    if(index !== -1){
        items[index].attributes.quantity += quantity
    }
    else{
        product.attributes.quantity=quantity
        items=[...items,product]
    }
    setCartItems(items);

   }
    const removeFromCart=(product)=>{
        let items=[...cartItems]
        items=items.filter(p=>p.id !==product.id)
        setCartItems(items)
    
    }

    const handleCartProductQuantity=(type,product)=>{
        let items=[...cartItems]
        let index=items.findIndex((p)=>p.id===product.id)
        if(type==='inc'){
            items[index].attributes.quantity +=1
        }else if(type==='dec'){
            if(items[index].attributes.quantity===1) return;
            items[index].attributes.quantity-=1
        }
        setCartItems(items)
    }

   
    return(
        <AppContext.Provider value={{
            products,
            setProducts,
            categories,
            setCategories,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            addToCart,
            removeFromCart,
            handleCartProductQuantity
            
        }}>
         {children}
        </AppContext.Provider>
    )
}
export default AppProvider