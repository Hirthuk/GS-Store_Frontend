import { createContext, useState } from "react";
import { products } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();


export const ShopProvider = ({ children }) => {
    const ruppees = '₹'
    const delivery_fee = 10;
    const [search,setSearch] =useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [getCartItem,setCartItem] = useState([]);

    class createObject {
        constructor(productId,productName,size,productImage,price) {
            this.productId = productId;
            this.productName = productName;
            this.size = size;
            this.productImage = productImage;
            this.price = price;
        }
    }
    const updateCartItem = (productId,productName,size,productImage,price) => {
        let cartObject = new createObject(productId,productName,size,productImage,price);
        getCartItem.push(cartObject);
    }
    
    const value = {
        products,
        ruppees,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        updateCartItem,
        getCartItem
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider;