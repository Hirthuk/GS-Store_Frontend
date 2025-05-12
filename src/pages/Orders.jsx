import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const MyOrders = () => {
  // Your existing orders data
  const {myOrders} = useContext(ShopContext);
  // Calculate total price
  const totalPrice = myOrders.reduce((sum, item) => sum + (item.price * item.count), 0);
  useEffect(() => {
    toast.success("Just preview demo purposes");
  },[])
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 delius-regular">
      <div className="text-center mb-6 text-xl md:text-2xl">
        <Title  text1={'MY'} text2={'ORDERS'} />
      </div>

      {myOrders.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
          <Link
            to="/collection"
            className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Order Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-800">Your Order</h3>
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-amber-600 mt-1">Status: Ready to ship</p>
          </div>

          {/* Order Items */}
          <div className="divide-y divide-gray-200">
            {myOrders.map((item, index) => (
              <div key={`${item.productId}-${item.size}-${index}`} className="p-4 flex">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={item.productImage} 
                    alt={item.productName} 
                    className="w-16 h-16 object-cover rounded border border-gray-200"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800 text-sm md:text-xl">{item.productName}</h4>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <span className="mr-3">Size: {item.size}</span>
                    <span>Qty: {item.count}</span>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="font-medium">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-medium">Order Total:</span>
              <span className="text-lg font-semibold">₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Expected delivery: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
              <button className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md text-sm">
                Track Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;