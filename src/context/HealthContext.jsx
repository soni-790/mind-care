"use client"

import { createContext, useContext, useReducer, useEffect } from "react"

const HealthContext = createContext()

const initialState = {
  user: null,
  assessmentResults: [],
  currentAssessment: null,
  loading: false,
  error: null,
}

function healthReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false }
    case "SET_USER":
      return { ...state, user: action.payload }
    case "ADD_ASSESSMENT_RESULT":
      return {
        ...state,
        assessmentResults: [...state.assessmentResults, action.payload],
        currentAssessment: action.payload,
      }
    case "CLEAR_ERROR":
      return { ...state, error: null }
    default:
      return state
  }
}

export function HealthProvider({ children }) {
  const [state, dispatch] = useReducer(healthReducer, initialState)

  useEffect(() => {

    const savedResults = localStorage.getItem("assessmentResults")
    if (savedResults) {
      const results = JSON.parse(savedResults)
      results.forEach((result) => {
        dispatch({ type: "ADD_ASSESSMENT_RESULT", payload: result })
      })
    }
  }, [])

  useEffect(() => {
   
    if (state.assessmentResults.length > 0) {
      localStorage.setItem("assessmentResults", JSON.stringify(state.assessmentResults))
    }
  }, [state.assessmentResults])

  return <HealthContext.Provider value={{ state, dispatch }}>{children}</HealthContext.Provider>
}

export function useHealth() {
  const context = useContext(HealthContext)
  if (!context) {
    throw new Error("useHealth must be used within a HealthProvider")
  }
  return context
}
