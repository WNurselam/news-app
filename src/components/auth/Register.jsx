import React from 'react'
import { useState } from 'react'
import { register } from '../../firebase'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await register(email, password);
        console.log(user);

    }
    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <input className='input' type='text' placeholder='E-posta adresi' value={email} onChange={e => setEmail(e.target.value)} /> <br />
                <input type='password' placeholder='Şifre Giriniz' onChange={e => setPassword(e.target.value)} />
                <button disabled={!email || !password} type='submit'> Kayıt Ol</button>
            </form>
        </div>
    )
}

export default Register