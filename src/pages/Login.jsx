import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AuthPage = () => {
  const [authType, setAuthType] = useState('login');
  const {backEndURL, token, setToken} = useContext(ShopContext);
  const [name,setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, SetPassword] = useState('')
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(authType == 'signup'){
         const response = await axios.post(backEndURL+"api/user/register", {name,email,password});
        //  console.log(response);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("User registered successfully");
          setName('');
          setEmail('');
          SetPassword('');
        }
        else{
          toast.error(response.data.message);
        }
      }
      else{
        const response = await axios.post(backEndURL+"api/user/login",{email,password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Logged in successfully");
          setEmail('');
          SetPassword('');
        }
        else{
          toast.error(response.data.message);
        }
        // console.log(response);

      }
    }
    catch(error){
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(token){
      navigate('/');
    }
  },[token])
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
                value={name}
                onChange={(e) => {setName(e.target.value)}}
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
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
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
              value={password}
              onChange={(e) => {SetPassword(e.target.value)}}
            />
          </div>

          {authType === 'login' && (
            <div className="text-right">
              <p className="text-sm text-amber-600 hover:text-amber-500">
                Forgot password?
                </p> 
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