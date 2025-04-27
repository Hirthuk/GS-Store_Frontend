import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import Emptycart from '../components/Emptycart';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const { getCartTotal, delivery_fee, cartOverallCount, ruppees, setPaymentMethod,setMyOrders,cartItems,setCartItems } = useContext(ShopContext);
  const grandTotal = getCartTotal() + delivery_fee;
  const [payMethod, setPayMethod] = useState('cod');
  // From ShopContext
  
  const navigate = useNavigate();
  if (grandTotal === delivery_fee) {
    return <Emptycart />;
  }

  const handlePaymentSelect = (method) => {
    setPayMethod(method);
  };

  const PayOrder = (method) => {
    setMyOrders(structuredClone(cartItems));
    setCartItems([]);
    setPaymentMethod(method);
    navigate('/orders');
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Delivery Information Form - Left Side */}
        <div className="lg:w-2/3">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="mb-5 text-xl font-bold">
              <Title text1={'DELIVERY'} text2={'INFORMATION'} />
            </h1>
            
            <form className="space-y-3">
              {/* Name Row - Side by side even on mobile */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                required
              />

              {/* Street Address */}
              <input
                type="text"
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                required
              />

              {/* City & State - Side by side on all screens */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
              </div>

              {/* Zipcode & Country - Side by side on all screens */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                  required
                />
              </div>

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-gray-950 text-sm"
                required
              />
            </form>
          </div>
        </div>

        {/* Order Summary - Right Side */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 sticky top-4">
            <h3 className="text-md font-semibold mb-3 pb-2 border-b border-gray-200">Order Summary</h3>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({cartOverallCount} items)</span>
                <span>{ruppees} {getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>{ruppees} {delivery_fee.toLocaleString()}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-medium">
                <span>Total</span>
                <span className="text-amber-600">{ruppees} {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Payment Method</h4>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('stripe')}
                  className={`flex items-center justify-center gap-1 p-2 border rounded-md ${payMethod === 'stripe' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}
                >
                  <img className="h-6 object-contain" src={assets.stripe_logo} alt="Stripe" />
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('razorpay')}
                  className={`flex items-center justify-center gap-1 p-2 border rounded-md ${payMethod === 'razorpay' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}
                >
                  <img className="h-6 object-contain" src={assets.razorpay_logo} alt="Razorpay" />
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect('cod')}
                  className={`flex items-center justify-center gap-1 p-2 border rounded-md ${payMethod === 'cod' ? 'border-amber-500 bg-amber-50' : 'border-gray-300'}`}
                >
                  <img className="h-6 object-cover w-full" src={assets.cash_on_delivery} alt="Cash on Delivery" />
                </button>
              </div>
            </div>

            <button
              onClick={() => PayOrder(payMethod)}
              className="w-full py-2 bg-black hover:bg-amber-600 text-white rounded-md transition-colors mb-2 font-medium text-sm"
            >
              Place Order
            </button>

            <Link
              to="/collection"
              className="block text-center text-xs text-amber-600 hover:text-amber-700 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;