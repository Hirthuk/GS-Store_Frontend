import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const ruppees = '₹';
    const delivery_fee = 30;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod,setPaymentMethod] = useState('cod');
    const [myOrders,setMyOrders] = useState([]);
    const[products,setProducts] = useState([]);
    const[token, setToken] = useState(false);
    const navigate = useNavigate();
    // Calculate overall count based on cart items
    const cartOverallCount = cartItems.reduce((total, item) => total + item.count, 0);

    // Add or increment item in cart
    const addToCart = (productId, productName, size, productImage, price) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => 
                item.productId === productId && item.size === size
            );
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.productId === productId && item.size === size
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                return [
                    ...prevItems,
                    {
                        productId,
                        productName,
                        size,
                        productImage,
                        price,
                        count: 1
                    }
                ];
            }
        });
    };

    // Update specific item count
    const updateCartItemCount = (productId, size, newCount) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item => 
                item.productId === productId && item.size === size
                    ? { ...item, count: newCount }
                    : item
            ).filter(item => item.count > 0);
            
            return updatedItems;
        });
    };

    // Remove item completely
    const removeFromCart = (productId, size) => {
        setCartItems(prevItems => 
            prevItems.filter(item => 
                !(item.productId === productId && item.size === size)
            )
        );
    };

    // Calculate cart total
    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + (item.price * item.count), 
            0
        );
    };
    const backEndURL = import.meta.env.VITE_BACKEDN_URL;
    const getProducts = async () => {
        const respone = await axios.get(backEndURL+"api/product/listProduct");
        if(respone.data.success){
            setProducts(respone.data.products);
        }
        else{
            toast.error(respone.data.message);
        }
        // console.log(respone.data.products)
    }
    useEffect(() => {
        getProducts();
    },[])

    useEffect(() => {
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])
    const value = {
        products,
        ruppees,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        cartOverallCount, // Now calculated dynamically
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getCartTotal,
        paymentMethod,
        setPaymentMethod,
        myOrders,
        setMyOrders,
        setCartItems,
        backEndURL,
        token,
        setToken,
        navigate


    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;