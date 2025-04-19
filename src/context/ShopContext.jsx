import { createContext, useState } from "react";
import { products } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const ruppees = '₹'
    const delivery_fee = 10;
    const [search,setSearch] =useState('');
    const [showSearch,setShowSearch] = useState(false);
    const value = {
        products,
        ruppees,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider;