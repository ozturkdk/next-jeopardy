"use client";
import React from 'react';
import Popup from './components/Popup';
import Question from './components/Question';
import Layout from './components/Layout';
import CreateGame from './components/CreateGame';

import { useEffect, useState } from "react";

export default function Page() {
  const [showPopupQuestion, setShowPopupQuestion] = React.useState(false);
  const [showPopupCreateGame, setShowPopupCreateGame] = React.useState(true);

  useEffect(() => {
    setShowPopupCreateGame(true);
  }, []);
  
  return(
    <Layout header="Jeopardy">
      {showPopupCreateGame && (
        <Popup buttonText="Start Game" onClose={() => setShowPopupCreateGame(false)}>
          <CreateGame/>
        </Popup>
      )}

      <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full max-w-6xl">
        {/* Create 6 categories and 30 questions */}
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="flex items-center justify-center p-6 bg-blue-500 text-white font-bold text-xl rounded-lg shadow">
            <p>Category {i + 1}</p>
          </div>
        ))}
        {showPopupQuestion && <Popup buttonText='Close' onClose={() => setShowPopupQuestion(false)}>  
          <Question index={Math.floor(Math.random() * 2)}/> 
        </Popup>}
        {Array.from({ length: 30 }, (_, i) => (
          <div onClick={() => setShowPopupQuestion(true)} key={i} className="flex items-center justify-center p-6 bg-white border rounded-lg shadow">
            <div className="text-blue-500 hover:text-blue-700 transition-colors">
              <p>Question {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}