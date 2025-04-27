import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const ruppees = '₹';
    const delivery_fee = 30;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod,setPaymentMethod] = useState('cod');
    const [myOrders,setMyOrders] = useState([]);
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
        setCartItems


    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;