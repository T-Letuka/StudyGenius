"use client";
import React from "react";
import quiz from "../__data";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import BlueButton from "../components/Button/BlueButton";
import YellowButton from "../components/Button/YellowButton";
import RedButton from "../components/Button/RedButton";

type Answers = { [key: number]: string };

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
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

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleSubmit = () => {
    calculateResult();
  };
  const handleQuizRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };
  const techniques: Record<string, string[]> = {
    "visual learner": [
      "Mind Mapping",
      "Use Color Coding",
      "Visual Aids-diagrams,graphs etc",
      "Flashcards",
      "Watch Videos and Tutorials",
    ],
    "auditory learner": [
      "Record and Listen",
      "Oral Presentations:",
      "Podcasts and Audiobooks",
      "Group Discussions",
      "Verbal Repetition",
    ],
    "reading  and writing learner": [
      "Note-Taking",
      "Summarization",
      "Writing Assignments",
      "Journaling",
      "Active Reading Strategies",
      "Mind dump",
    ],
    "kinesthetic learner": [
      "Hands-On Activities",
      "Role-Playing",
      "Movement Breaks",
      "Field Trips",
      "Interactive Learning Tools: Use interactive learning tools such as educational games ",
    ],
    "social learner": [
      "Group Study Sessions",
      "Peer Teaching",
      "Collaborative Projects",
      "Online Forums and Discussion Boards",
      "Study Buddies",
    ],
  };

  return (
    <div className="container pb-[2rem[ pt-[3rem]">
      <SectionHeading
        headingMini="Discover Your Unique Learning Style"
        headingPrimary="Quiz to Unveil Your Ideal Study Approach"
      />

      <h2
        className="font-bold text-[15px] md:text-[18px] sm:text-[20px] 
      text-center pb-2 mt-2 text-[#03045E]"
      >
        Question {currentQuestion + 1}/{quiz.length} <br />
        {quiz[currentQuestion].question}
      </h2>
      <ul className="px-3 py-2 border border-[#38c2ddb6] rounded">
        {quiz[currentQuestion].options.map((option, optionIndex) => (
          <li
            key={optionIndex}
            className="border border-gray-300 rounded p-2 mb-2"
          >
            <input
              type="radio"
              name={`question_${currentQuestion}`}
              value={option.value}
              checked={answers[currentQuestion] === option.value}
              onChange={() => handleAnswer(option.value)}
            />
            <label className="px-2 font-lightbold">{option.text}</label>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-4 pt-5 item-center">
        {currentQuestion > 0 && (
          <YellowButton text="Back" onClick={handleBack} />
        )}

        {currentQuestion < quiz.length - 1 ? (
          <BlueButton text="Next" onClick={handleNext} />
        ) : (
          <>
            <BlueButton text="Submit" onClick={handleSubmit} />
            <RedButton onClick={handleQuizRetake} text="Retake Quiz" />
          </>
        )}
      </div>
      {result && techniques[result] && (
        <>
          <div
            className="border border-[#b8c0ff] rounded w-[70%]  pb-[3rem]  mt-[1rem] mb-[3rem] mr-auto ml-auto 
          shadow-lg shadow-[#b8c0ff] lg:w-[50%] md:w-[60%] "
          >
            <div className="text-center">
              <h1 className="text-[25px] underline">Results</h1>
              <p className="text-[15px] font-medium sm:text-[20px] md:text-[18px]">
                You are a {result}.
              </p>
              <p className="font-bold text-cyan-950">
                Here are some techniques for {result}s
              </p>
              <ul className="mt-2">
                {techniques[result].map((technique: string, index: number) => (
                  <li key={index} className="text-center mb-1">
                    ❤ {technique} <br />
                    <br />
                  </li>
                ))}
                <p className="px-4">
                  Please also visit the study methods page to maximise working
                  smart
                </p>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
