import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../firebase';
import { logout as logoutHandle } from '../../store/auth';

const UserAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)

    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        navigate('/login', {
            replace: true
        })
    }
    
    return (
        <div className='text-neutral-700  '>
            {user ? <div className='ml-2'> {user.email}
                <button onClick={handleLogout} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mt-2">
                    SIGN OUT
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M104,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><polyline points="176 88 216 128 176 168" fill="none" stroke="currentColor" strokeWidth="24" /></svg>
                </button>
            </div> :
                <Link to="/login" >
                    <div className='flex justify-between flex-row items-center m-2'>
                        <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M104,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><line x1="104" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" /><polyline points="176 88 216 128 176 168" fill="none" stroke="currentColor" strokeWidth="24" /></svg>
                            SIGN IN
                        </button>
                    </div>
                </Link>
            }
        </div>
    )
}

export default UserAuth