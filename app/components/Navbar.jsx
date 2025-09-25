"use client"
import Link from "next/link"
import {useState} from 'react';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaBook } from "react-icons/fa";``

export default function Navbar(){
    const [open,setOpen]=useState(false);
    return(
        <nav className="bg-blue-600 text-white  shadow-md relative ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
               
                <div className=" flex  items-center space-x-2">
                    <FaBook className="text-2xl"></FaBook>
                    <h1 className="text-xl font-bold" >My Blog</h1>


                </div>


                <ul className="hidden md:flex space-x-6 font-medium">
                    <li>
                        <li>
                            <Link href='/' className="hover:text-gray-500"></Link>
                        </li>
                        <li>
                         <Link href='/blogs' className="hover:text-gray-500"  >Blogs</Link>

                        </li>
                        <li>
                            <Link href='/about' className="hover:text-gray-500">About</Link>
                        </li>
                        <li>
                            <Link href='/contact' className="hover:text-gray-500">Contact</Link>
                        </li>
                    </li>

                </ul>

                <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                    {open ? <FaTimes/> : <FaBars/>}

                </button>





            </div>

          

        </nav>
    )
}