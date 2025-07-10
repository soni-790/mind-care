"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAssessment } from "../hooks/useAssessment"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const questions = [
  {
    id: 1,
    question: "How often have you been feeling down, depressed, or hopeless?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you have trouble falling or staying asleep?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 3,
    question: "How often do you feel tired or have little energy?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 4,
    question: "How often do you have trouble concentrating on things?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 },
    ],
  },
  {
    id: 5,
    question: "How often do you feel nervous, anxious, or on edge?",
    options: [
      { text: "Not at all", value: 0 },
      { text: "Several days", value: 1 },
      { text: "More than half the days", value: 2 },
      { text: "Nearly every day", value: 3 },
    ],
  },
]

export default function Assessment() {
  const navigate = useNavigate()
  const { currentQuestion, answers, submitAnswer, nextQuestion, previousQuestion, calculateResults, resetAssessment } =
    useAssessment()

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    resetAssessment()
  }, [resetAssessment])

  useEffect(() => {
    const currentQuestionId = questions[currentQuestion]?.id
    if (currentQuestionId && answers[currentQuestionId] !== undefined) {
      setSelectedAnswer(answers[currentQuestionId])
    } else {
      setSelectedAnswer(null)
    }
  }, [currentQuestion, answers])

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value)
    const currentQuestionId = questions[currentQuestion].id
    submitAnswer(currentQuestionId, value)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      nextQuestion()
    } else {
      setIsCompleted(true)
    }
  }

  const handleSubmit = () => {
    const results = calculateResults()
    navigate("/dashboard")
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for completing the mental health assessment. Click below to view your results and
              recommendations.
            </p>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h2>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === option.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={option.value}
                  checked={selectedAnswer === option.value}
                  onChange={() => handleAnswerSelect(option.value)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    selectedAnswer === option.value ? "border-blue-500 bg-blue-500" : "border-gray-300"
                  }`}
                >
                  {selectedAnswer === option.value && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </label>
            ))}
          </div>

         
          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center px-4 py-2 rounded-md ${
                currentQuestion === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`flex items-center px-6 py-2 rounded-md ${
                selectedAnswer === null
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
