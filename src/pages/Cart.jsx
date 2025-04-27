import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartComponent from '../components/CartComponent';
import { assets } from '../assets/assets';

const Cart = () => {
  const {
    cartItems,
    cartOverallCount,
    getCartTotal,
    ruppees,
    delivery_fee
  } = useContext(ShopContext);

  const grandTotal = getCartTotal() + delivery_fee;

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 delius-regular text-xl">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8 text-2xl">
          <Title text1={'YOUR'} text2={'CART'} className="mb-2" />
          {cartItems.length > 0 && (
            <p className="text-gray-600 mt-6">
              {cartOverallCount} {cartOverallCount === 1 ? 'item' : 'items'} in your cart
            </p>
          )}
        </div>

        {/* Main Content */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <img 
                src={assets.empty_cart} 
                alt="Empty cart" 
                className="w-28 h-28 object-contain"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Let's add some delicious items to your cart!</p>
            <Link
              to="/collection"
              className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-colors"
            >
              Check Collections
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items - Left Side */}
            <div className="lg:w-2/3 space-y-4">
              {cartItems.map((item) => (
                <CartComponent key={`${item.productId}-${item.size}`} item={item} />
              ))}
            </div>

            {/* Order Summary - Right Side */}
            <div className="lg:w-1/3 text-sm md:text-xl">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartOverallCount} items)</span>
                    <span>{ruppees} {getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>{ruppees} {delivery_fee.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200 flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-amber-600">{ruppees} {grandTotal.toLocaleString()}</span>
                  </div>
                </div>
                <Link to={'/place-order'}>
                <button
                  className="w-full py-2 bg-black hover:bg-amber-600 text-white rounded-md transition-colors mb-3"
                >
                  Proceed to Checkout
                </button>
                </Link>
                

                <Link
                  to="/collection"
                  className="block text-center text-sm text-amber-600 hover:text-amber-700"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;