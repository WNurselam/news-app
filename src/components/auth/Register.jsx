import React from 'react'
import { useState } from 'react'
import { register } from '../../firebase/firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await register(email, password);
        if(user){
            navigate('/login',{
                replace:true
            })
            toast.success('Registration Successful');
        }else{
            toast.error("Invalid email and password !");
            setEmail("")
            setPassword("")
            e.target.reset();
        }
      
        //console.log(user);
    }
    return (
        <div className='flex justify-center items-center mt-24'>
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h1 className='text-center text-xl text-gray-900 m-4 font-bold'>SIGN UP </h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Username
                </label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter username"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input  onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Please enter password"/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
                <button disabled={!email || !password} type='submit' className=" disabled:opacity-70 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700  py-2 px-4 rounded  focus:shadow-outline" >
                Sign Up 
                </button>
                <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Log In
                </button>
                </Link>
            </div>
            </form>
        </div>
    )
}

export default Register
/*
 <form className='max-w-xl mx-auto' onSubmit={handleSubmit}>
                <input className='input' type='text' placeholder='E-posta adresi' value={email} onChange={e => setEmail(e.target.value)} /> <br />
                <input type='password' placeholder='Şifre Giriniz' onChange={e => setPassword(e.target.value)} />
                <button disabled={!email || !password} type='submit'> Kayıt Ol</button>
            </form>
            */