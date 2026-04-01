"use client";
import Navlist from "./Navlist";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {SignedIn, SignInButton, SignedOut, UserButton} from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex justify-center items-center p-2 sm:p-4 bg-black overflow-x-hidden">
     <nav
  className="flex justify-between items-center w-full max-w-7xl lg:w-5/6 
  bg-white/10 backdrop-blur-lg border border-white/7 rounded-[50px] p-2 sm:p-3 shadow-lg 
  relative z-50 before:absolute before:inset-0 before:rounded-[50px] before:border before:border-white/20 
  before:blur-xl before:opacity-30 before:content-[''] before:pointer-events-none overflow-hidden"
>


        {/* Logo */}
        <Link href="/">
          <div className="flex items-center justify-center p-2 px-3 sm:px-4 rounded-[50px] bg-black overflow-hidden">
            <h1 className="font-extrabold text-transparent bg-clip-text animate-gradient-neon text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider cursor-pointer whitespace-nowrap">
              UNHESITATE
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex gap-3 lg:gap-6 p-2 sm:p-3 px-3 sm:px-4 rounded-[50px] bg-black hidden md:flex items-center">
          <Navlist />
          <SignedOut>
      <SignInButton>
          <button className="bg-black text-white rounded-lg font-bold shadow bg-blue-700 hover:bg-blue-900 transition h-7 w-16 text-sm">
                Login
            </button>
      </SignInButton>
    </SignedOut>
     
     <SignedIn>
     <UserButton/>
      </SignedIn>
        </div>
       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden text-xl sm:text-2xl z-50 p-2"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Dropdown Menu */}
{menuOpen && (
  <div
    className="absolute top-full right-0 mt-2 w-48 min-w-[12rem] max-w-[90vw]
    bg-black/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg 
    flex flex-col items-start p-4 md:hidden animate-fadeIn z-50"
  >
    <Navlist mobile onClickLink={() => setMenuOpen(false)} />
    <SignedOut>
      <SignInButton>
         <button className="mt-4 bg-black text-white rounded-lg font-bold shadow bg-blue-700 hover:bg-blue-900 transition h-7 w-16 text-sm">
                Login
            </button>
      </SignInButton>
    </SignedOut>
     
     <SignedIn>
     <UserButton/>
      </SignedIn>

  </div>
)}

      </nav>
    </main>
  );
};

export default Navbar;
