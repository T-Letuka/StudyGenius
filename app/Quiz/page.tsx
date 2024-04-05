"use client";
import React from "react";
import quiz from "../__data";
import { useState } from "react";

type Answers = { [key: number]: string };

function Quiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (questionIndex: number, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const calculateResult = () => {
    let visualCount = 0;
    let auditoryCount = 0;
    let readingCount = 0;
    let kinestheticCount = 0;
    let socialCount = 0;

    Object.values(answers).forEach((value) => {
      switch (value) {
        case "visual":
          visualCount++;
          break;
        case "auditory":
          auditoryCount++;
          break;
        case "reading":
          readingCount++;
          break;
        case "kinesthetic":
          kinestheticCount++;
          break;
        case "social":
          socialCount++;
          break;
        default:
          break;
      }
    });
    const maxCount = Math.max(
      visualCount,
      auditoryCount,
      readingCount,
      kinestheticCount,
      socialCount
    );

    if (maxCount === visualCount) {
      setResult("visual learner");
    } else if (maxCount === auditoryCount) {
      setResult("auditory learner");
    } else if (maxCount === readingCount) {
      setResult("reading and writing learner");
    } else if (maxCount === kinestheticCount) {
      setResult("kinesthetic learner");
    } else {
      setResult("social learner");
    }
  };

  const handleSubmit = () => {
    calculateResult();
  };

  return (
    <div>
      {quiz.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={option.value}
                  onChange={() => handleAnswer(index, option.value)}
                />
                <label>{option.text}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && <p>You are a {result}.</p>}
    </div>
  );
}

export default Quiz;
