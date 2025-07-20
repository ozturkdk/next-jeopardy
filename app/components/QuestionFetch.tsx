"use client";

import {useEffect, useState} from "react";

export default function QuestionFetch() {
    const [questions, setQuestions] = useState<any[]>([]);


useEffect(() => {
    async function fetchQuestions() {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data);
    }
    fetchQuestions();
}, []);

}



