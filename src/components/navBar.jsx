"use client"

import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
]

const NavBar = () => {
    const [open,setOpen] = useState(false)
      
        const topVariants = {
          closed: {
            rotate: 0,
          },
          opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
          },
        };
        const centerVariants = {
          closed: {
            opacity: 1,
          },
          opened: {
            opacity: 0,
          },
        };
      
        const bottomVariants = {
          closed: {
            rotate: 0,
          },
          opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
          },
        };
      
const listVariants = {
    closed:{
        x:"100vw",
    },
    opened:{
        x:0,
        transition:{
            when:"beforeChildren",
            staggerChildren:0.2,
        }
    }
}

const listItemVariants = {
    closed:{
        x:-10,
        opacity:0,
    },
    opened:{
        x:0,
        opacity:1,
    }
}

 return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link)=>(
        <NavLink link={link} key={link.title} />
    ))} 
        </div>
    {/* LOGO */}
    <div className="hidden lg:flex xl:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Karen</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
    </div>
    {/* SOCIAL */}
    <div className="flex gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <Link href="https://github.com/karenfggutierrez">
            <img src="./github.png" alt="GitHub" width={24} height={24}/>
            </Link>
            <Link href="https://www.linkedin.com/in/karenfggutierrez">
            <img src="./linkedin.png" alt="LinkedIn" width={24} height={24}/>
            </Link>
            <Link href="https://www.figma.com/@karenfggtz">
            <img src="./figma.png" alt="Figma" width={24} height={24}/>
            </Link>
            <Link href="https://www.workana.com/freelancer/12400a56e29dde332e4b9b1c3bc20035">
            <img src="./workana.png" alt="Workana" width={24} height={24}/>
            </Link>
            <Link href="https://www.upwork.com/freelancers/~01b7369ac920621af3">
            <img src="./upWork.png" alt="UpWork" width={24} height={24}/>
            </Link>
    </div>   
    {/* RESPONSIVE MENU */}
    <div className="md:hidden">
    {/* MENU BUTTON */}
    <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
        <motion.div variants={topVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        <motion.div variants={centerVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded"></motion.div>
        <motion.div variants={bottomVariants}
        animate={open ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
    </button>
    {/* MENU LIST */}
    { open && (
    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
    {links.map(link=>(
    <motion.div variants={listItemVariants} className="" key={link.title}>
        <Link href={link.url}>{link.title}</Link>
    </motion.div>
    ))}
    </motion.div>
    )}
    </div>
 </div>

)
}

export default NavBar;