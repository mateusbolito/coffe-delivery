import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffe } from "../pages/Home/components/CoffeCard";
import { Produced } from "immer/dist/internal";
import produce from "immer";
import { json } from "react-router-dom";

 export interface CartItem extends Coffe {
    quantity: number;
 }
 interface CartContextType {
    cartItems: CartItem[];
    CartQuantity: number;
    addCoffeeToCart:(coffee: CartItem) => void;
    changeCartItemQuantity(CartItemId: number, type: 'increase' | 'decrease'):  void;
    removeCartItem(CartItemId: number): void
    cartItemsTotal: number;
 }

 interface CartContextProviderProps {
    children: ReactNode;
 } 
  const COFFE_ITEMS_STORAGE_KEY = "cofeeDelivery:cartItems";
 export const  CartContext = createContext({} as CartContextType); 

 export function CartContextProvider({children}: CartContextProviderProps) {
    
    const [cartItems, setCartItems] = useState<CartItem[]>(() =>{
        const storedCarItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY)
        if(storedCarItems) {
            return JSON.parse(storedCarItems);
        }
        return [];
    })
    
    const  CartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem)=> {
        return total + cartItem.price * cartItem.quantity;
    }, 0)
    
    
    function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex((CartItem) => CartItem.id === coffee.id)
     
    const newCart = produce(cartItems, (draft) =>{
        if(coffeeAlreadyExistsInCart < 0) {
            draft.push(coffee);
        } else {
            draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
        }
    });
   setCartItems(newCart);
   
} 
 
   function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft)=>{
     const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)
     
     if(coffeeExistsInCart >=0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity = type  === 'increase' ? item.quantity + 1 : item.quantity -1;
     }
    });
    
    setCartItems(newCart)
   } 

    function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
    const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

    if(coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
    }
  }) 
  setCartItems(newCart)
    }  

    useEffect(() =>{
        localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])
    return(
        <CartContext.Provider value={{cartItems,
         CartQuantity, 
        addCoffeeToCart, 
        changeCartItemQuantity, 
        cartItemsTotal,
        removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
        
 }
 