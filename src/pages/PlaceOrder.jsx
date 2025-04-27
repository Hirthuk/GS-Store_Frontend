import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import Emptycart from '../components/Emptycart'
const PlaceOrder = () => {
  const {getCartTotal, delivery_fee,cartOverallCount,ruppees} = useContext(ShopContext);
  const grandTotal = getCartTotal() + delivery_fee;
  return ( grandTotal == delivery_fee ? <Emptycart/> :
    // Place Order page
    <section className='flex flex-col md:flex-row'>
      {/* User Input form */}
      <div>
        
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
    </section>
  )
}

export default PlaceOrder
