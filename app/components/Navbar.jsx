"use client"
import Link from "next/link"
import {useState} from 'react';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaBook } from "react-icons/fa";``

export default function Navbar(){
    const [open,setOpen]=useState(false);
    return(
        <nav className="bg-green-600 text-white  shadow-md relative ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
               
                <div className= " flex  items-center space-x-2">
                    <FaBook className="text-2xl"></FaBook>
                    <h1 className="text-xl font-bold" >My Blog1</h1>


                </div>


                <div className="hidden md:flex space-x-6 font-medium">
                
                     <Link href='/' className="hover:text-gray-500">Home</Link>
                        
                    <Link href='/blogs' className="hover:text-gray-500"  >Blogs</Link>

                        
                    <Link href='/about' className="hover:text-gray-500">About</Link>
                       
                    <Link href='/contact' className="hover:text-gray-500">Contact</Link>
                      
                    

                </div>

                <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                    {open ? <FaTimes/> : <FaBars/>}

                </button>





            </div>



            {
                open  && (
                    <ul className="md:hidden bg-blue-700 px-4 py-4 space-y-2 transition-all  duration-300 ease-in-out absolute w-full ">
                       <li>
                        <Link href='/' className="block hover:text-gray-900" onClick={()=> setOpen(false)}>Home</Link>
                       </li>
                       <li>
                        <Link href='/blogs' className="block hover:text-gray-900 " onClick={()=> setOpen(false)}>Blogs</Link>
                       </li>
                       <li>
                        <Link href='aAbout' className="block hover:text-gray-900" onClick={()=>setOpen(false)}>About</Link>
                       </li>
                       <li>
                        <Link href='/contact' className="block hover:text-gray-900" onClick={()=>setOpen(false)}>Contact</Link>
                       </li>
                    </ul>

                )
            }

          

        </nav>
    )
}