"use client";
import React from 'react';
import Popup from './components/Popup';
import Navbar from './components/Navbar';

export default function Page() {
  const [showPopup, setShowPopup] = React.useState(false);
  
  return(
    <>
      <Navbar/>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
          <h1 className="text-4xl font-bold mb-8">Jeopardy</h1>
          <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full max-w-6xl">
            {/* Create 6 categories and 30 questions */}
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-blue-500 text-white font-bold text-xl rounded-lg shadow">
                <p>Category {i + 1}</p>
              </div>
            ))}
            {showPopup && <Popup onClose={() => setShowPopup(false)} />}
            {Array.from({ length: 30 }, (_, i) => (
              <div onClick={() => setShowPopup(true)} key={i} className="flex items-center justify-center p-6 bg-white border rounded-lg shadow">
                <div className="text-blue-500 hover:text-blue-700 transition-colors">
                  <p>Question {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </>
  )
}