"use client"

import { useState, useCallback } from "react"
import { useHealth } from "../context/HealthContext"

export function useAssessment() {
  const { dispatch } = useHealth()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const submitAnswer = useCallback((questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }, [])

  const nextQuestion = useCallback(() => {
    setCurrentQuestion((prev) => prev + 1)
  }, [])

  const previousQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1))
  }, [])

  const calculateResults = useCallback(() => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = Object.keys(answers).length * 4
    const percentage = (totalScore / maxScore) * 100

    let level = "Low"
    let recommendation = "Your mental health appears to be in good condition."

    if (percentage > 70) {
      level = "High"
      recommendation = "Consider speaking with a mental health professional."
    } else if (percentage > 40) {
      level = "Moderate"
      recommendation = "Some stress management techniques might be helpful."
    }

    const result = {
      id: Date.now(),
      date: new Date().toISOString(),
      score: totalScore,
      maxScore,
      percentage: Math.round(percentage),
      level,
      recommendation,
      answers,
    }

    dispatch({ type: "ADD_ASSESSMENT_RESULT", payload: result })
    return result
  }, [answers, dispatch])

  const resetAssessment = useCallback(() => {
    setCurrentQuestion(0)
    setAnswers({})
  }, [])

  return {
    currentQuestion,
    answers,
    submitAnswer,
    nextQuestion,
    previousQuestion,
    calculateResults,
    resetAssessment,
  }
}
