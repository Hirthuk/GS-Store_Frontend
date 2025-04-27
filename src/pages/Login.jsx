import React, { useState } from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [authType, setAuthType] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log(`${authType === 'login' ? 'Login' : 'Signup'} with:`, formData);
  };

  return (
    <div className="min-h-screen flex items-start pt-16 justify-center  px-4 sm:px-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <Title text1={authType === 'login' ? 'LOGIN' : 'SIGN UP'} />
          </h2>
        </div>

        <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
          {authType === 'signup' && (
            <div>
              <input
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              required
              minLength={authType === 'signup' ? 8 : undefined}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {authType === 'login' && (
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-500">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
          >
            {authType === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          {authType === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button 
                onClick={() => setAuthType('signup')}
                className="text-amber-600 hover:text-amber-500 font-medium"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                onClick={() => setAuthType('login')}
                className="text-amber-600 hover:text-amber-500 font-medium w-full md:w-1/3"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;