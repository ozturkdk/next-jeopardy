"use client";
import { useState, useEffect } from "react";

export default function Question() {
    type QuestionType = {
        questionText: string;
        options: string[];
        correctAnswer: string;
        correctLetter: string | null;
    }
    
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [shuffledQuestion, setShuffledQuestion] = useState<QuestionType[]>([]);
    const [loading, setLoading] = useState(true);

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
    };

    function shuffleArray(array: string[]) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    function createQuestion(questionText: string, correctAnswer: string, options: string[]) {
        const shuffledOptions = shuffleArray([...options]);
        const correctLetter = ["A", "B", "C", "D"][shuffledOptions.indexOf(correctAnswer)];

        return {
            questionText,
            options: shuffledOptions,
            correctAnswer: correctAnswer,
            correctLetter: correctLetter
        }
    }

    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch('/api/questions');
            const data = await response.json();
            const shuffledQuestions = data.slice(0, 36).map((item: any) =>
                createQuestion(item.question, item.correctAnswer, item.options)
            );
            setShuffledQuestion(shuffledQuestions);
            setLoading(false);
        }

        if (shuffledQuestion.length > 0) {
            setLoading(false);
        } else {
            fetchQuestions();
        }

    }, []);
    
    if (shuffledQuestion.length === 0 && loading) {
        return <div className="text-center text-lg">Loading questions...</div>;
    
    } else {
        const randomIndex = Math.floor(Math.random() * shuffledQuestion.length);
        return (
            <div className="p-4 text-lg">
                <p className="text-center mb-4 font-bold">{shuffledQuestion[randomIndex].questionText}</p>    
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {["A", "B", "C", "D"].map((option) => (
                    <button 
                        key={option} onClick={() => handleAnswerClick(option)}
                        disabled={selectedAnswer !== null}
                        className={`p-3 rounded border
                            ${selectedAnswer 
                                ? option === shuffledQuestion[0].correctLetter ? "bg-green-500 text-white" 
                                : option === selectedAnswer ? "bg-red-500 text-white" 
                                : "bg-gray-200" : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        {
                            option === "A" ? shuffledQuestion[randomIndex].options[0] : 
                            option === "B" ? shuffledQuestion[randomIndex].options[1] : 
                            option === "C" ? shuffledQuestion[randomIndex].options[2] : 
                            shuffledQuestion[randomIndex].options[3]
                        }
                    </button>
                    ))}
                </div>
            </div>
        );
    }
}