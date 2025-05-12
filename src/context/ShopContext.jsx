import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const ruppees = '₹';
    const delivery_fee = 30;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]); // Initialize empty, we'll load in useEffect
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [myOrders, setMyOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const [isCartLoading, setIsCartLoading] = useState(true); // Track cart loading state
    const navigate = useNavigate();

    const backEndURL = import.meta.env.VITE_BACKEDN_URL;

    // Calculate overall count based on cart items
    const cartOverallCount = cartItems.reduce((total, item) => total + item.count, 0);

    // Fetch cart from backend when authenticated
    const fetchUserCart = async () => {
        setIsCartLoading(true);
        try {
            const response = await axios.post(
                `${backEndURL}api/cart/get`,
                {}, 
                { headers: { token } }
            );
            
            if (response.data.success) {
                const backendCart = response.data.cartData;
                const formattedCart = [];
                
                for (const itemId in backendCart) {
                    const product = products.find(p => p._id === itemId);
                    if (!product) continue;
                    
                    for (const size in backendCart[itemId]) {
                        const quantity = backendCart[itemId][size];
                        if (quantity > 0 && product.sizes.includes(size)) {
                            formattedCart.push({
                                productId: itemId,
                                productName: product.name,
                                size,
                                productImage: product.image[0],
                                price: product.price,
                                count: quantity
                            });
                        }
                    }
                }
                setCartItems(formattedCart);
                localStorage.setItem('cart', JSON.stringify(formattedCart));
            }
        } catch (error) {
            toast.error("Failed to load cart");
        } finally {
            setIsCartLoading(false);
        }
    };

    // Load initial cart state
    useEffect(() => {
        const loadInitialCart = async () => {
            const savedCart = localStorage.getItem('cart');
            
            if (token) {
                // For authenticated users, always fetch from backend
                await fetchUserCart();
            } else if (savedCart) {
                // For guests, use localStorage but validate against products
                const parsedCart = JSON.parse(savedCart);
                const validatedCart = parsedCart.filter(item => 
                    products.some(p => p._id === item.productId && p.sizes.includes(item.size))
                );
                setCartItems(validatedCart);
                setIsCartLoading(false);
            } else {
                setIsCartLoading(false);
            }
        };

        loadInitialCart();
    }, [token, products]); // Reload when token or products change

    // Add to cart with backend sync
    const addToCart = async (productId, productName, size, productImage, price) => {
        const newCart = prevItems => {
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
        };

        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart(cartItems)));

        if (token) {
            try {
                await axios.post(
                    `${backEndURL}api/cart/add`,
                    { itemId: productId, size },
                    { headers: { token } }
                );
            } catch (error) {
                toast.error("Failed to update server cart");
                fetchUserCart(); // Re-sync with server
            }
        }
    };

    // Update cart item count with backend sync
    const updateCartItemCount = async (productId, size, newCount) => {
        const newCart = prevItems => {
            return prevItems.map(item => 
                item.productId === productId && item.size === size
                    ? { ...item, count: newCount }
                    : item
            ).filter(item => item.count > 0);
        };

        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart(cartItems)));

        if (token) {
            try {
                await axios.post(
                    `${backEndURL}api/cart/update`,
                    { itemId: productId, size, quantity: newCount },
                    { headers: { token } }
                );
            } catch (error) {
                toast.error("Failed to update server quantity");
                fetchUserCart(); // Re-sync with server
            }
        }
    };

    // Remove item completely from cart
    const removeFromCart = async (productId, size) => {
        const newCart = prevItems => 
            prevItems.filter(item => 
                !(item.productId === productId && item.size === size)
            );

        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart(cartItems)));

        if (token) {
            try {
                await axios.post(
                    `${backEndURL}api/cart/remove`,
                    { itemId: productId, size },
                    { headers: { token } }
                );
            } catch (error) {
                toast.error("Failed to remove item from server");
                fetchUserCart(); // Re-sync with server
            }
        }
    };

    // Calculate cart total
    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + (item.price * item.count), 
            0
        );
    };

    const getProducts = async () => {
        try {
            const response = await axios.get(`${backEndURL}api/product/listProduct`);
            if(response.data.success){
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to load products");
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, []);

    const value = {
        products,
        ruppees,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        cartOverallCount,
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
        navigate,
        isCartLoading
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;