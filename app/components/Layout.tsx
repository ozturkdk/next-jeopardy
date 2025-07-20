"use client";
import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
    header?: string;
    children: React.ReactNode;
}; 

export default function Layout({ header, children}: LayoutProps) {  
  return(
    <>
      <Navbar/>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
          <h1 className="text-4xl font-bold mb-8">{header}</h1>
            {children}
        </main>
      </>
  )
}