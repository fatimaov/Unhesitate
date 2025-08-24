"use client";
import Navlist from "./Navlist";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex justify-center items-center p-4 bg-black ">
     <nav
  className="flex justify-between items-center w-full md:w-5/6 
  bg-white/10 backdrop-blur-lg border border-white/7 rounded-[50px] p-2 shadow-lg 
  relative z-50 before:absolute before:inset-0 before:rounded-[50px] before:border before:border-white/20 
  before:blur-xl before:opacity-30 before:content-[''] before:pointer-events-none"
>


        {/* Logo */}
        <Link href="/">
          <div className="flex items-center justify-center p-2 px-4 rounded-[50px] bg-black">
            <h1 className="font-extrabold text-transparent bg-clip-text animate-gradient-neon text-xl md:text-2xl tracking-wider cursor-pointer">
              DREAM VAULT
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex gap-15 p-3 px-4 rounded-[50px] bg-black hidden  md:flex">
          <Navlist />
          <div className="rounded-[50px] bg-green-500 h-7 w-7"></div>
        </div>
       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden text-2xl z-50"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Dropdown Menu */}
        {/* Mobile Dropdown Menu */}
{menuOpen && (
  <div
    className="absolute top-full right-0 mt-2 w-48 
    bg-black/80 border border-gray-200 rounded-xl shadow-lg 
    flex flex-col items-start p-4 md:hidden animate-fadeIn z-50"
  >
    <Navlist mobile onClickLink={() => setMenuOpen(false)} />
    <div className="rounded-[50px] bg-green-500 h-7 w-7"></div>
  </div>
)}

      </nav>
    </main>
  );
};

export default Navbar;
