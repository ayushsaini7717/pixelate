import { memo, useState, useCallback } from "react";
import React from 'react'
import Link from 'next/link'
import {
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button';
import { Authenticated, Unauthenticated } from 'convex/react';
import { LayoutDashboard } from 'lucide-react';

const Navbar = memo(() => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-6 py-3">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-hover px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-white/20 shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className='flex items-center gap-3 ml-10 md:ml-20'>
              <Unauthenticated>
              <SignInButton>
                <Button variant={"glass"} className="hidden sm:flex">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="primary">
                  Get Started
                </Button>
              </SignUpButton>
            </Unauthenticated>
            <Authenticated>
              <Link href={"/dashboard"}>
                <Button variant={"glass"} className={"sm:flex"}>
                  <LayoutDashboard className='h-4 w-4'/>
                  <span className='hidden md:flex'>Dashboard</span>
                </Button>
              </Link>
              <UserButton appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-full",
                  
                }
              }}/>
            </Authenticated></div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;