import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useSelector} from 'react-redux';


export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const {user} = useSelector(state => state.auth)
  return (
    <div className="flex bg-gray-50 h-full fixed">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">NEWS  BUNDLE</h2>
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleSidebarOpen}
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-2 font-medium">
              <li className="rounded-sm">
                <Link to="/">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Home</p>
                </Link>
              </li>

              <li className="rounded-sm">

                <Link to="/business">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Business</p>
                </Link>

              </li>
              <li className="rounded-sm">

                <Link to="/entertainment">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Entertainment</p>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/health">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Health</p>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/science">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Science</p>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/sports">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Sports</p>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/technology">
                  <p className="flex items-center p-2 space-x-3 rounded-md uppercase font-open  text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">Technology</p>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>{user ? <h1>Welcome {user.email}</h1> : null}</span>
                                
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/login">
                      Log out          
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}