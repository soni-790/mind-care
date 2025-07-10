import { useHealth } from "../context/HealthContext"
import { Link } from "react-router-dom"
import { CalendarIcon, ChartBarIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
  const { state } = useHealth()
  const { assessmentResults } = state

  const latestResult = assessmentResults[assessmentResults.length - 1]

  const getScoreColor = (level) => {
    switch (level) {
      case "Low":
        return "text-green-600 bg-green-100"
      case "Moderate":
        return "text-yellow-600 bg-yellow-100"
      case "High":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getScoreIcon = (level) => {
    switch (level) {
      case "High":
        return ExclamationTriangleIcon
      default:
        return ChartBarIcon
    }
  }

  if (!latestResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-gray-600 mb-8">No assessment results found.</p>
            <Link
              to="/assessment"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const ScoreIcon = getScoreIcon(latestResult.level)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Mental Health Dashboard</h1>

       
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Latest Assessment Result</h2>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {new Date(latestResult.date).toLocaleDateString()}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <ScoreIcon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {latestResult.score}/{latestResult.maxScore}
                  </div>
                  <div className="text-sm text-gray-500">Total Score</div>
                </div>
              </div>

              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(latestResult.level)}`}
              >
                {latestResult.level} Risk Level
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recommendation</h3>
              <p className="text-gray-600">{latestResult.recommendation}</p>
            </div>
          </div>

        
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Assessment Score</span>
              <span>{latestResult.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  latestResult.level === "Low"
                    ? "bg-green-500"
                    : latestResult.level === "Moderate"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${latestResult.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        
        {assessmentResults.length > 1 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment History</h2>
            <div className="space-y-4">
              {assessmentResults
                .slice()
                .reverse()
                .map((result, index) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(result.date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Score: {result.score}/{result.maxScore}
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(result.level)}`}>
                      {result.level}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

       
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/assessment"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            Take New Assessment
          </Link>
          <Link
            to="/resources"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors text-center"
          >
            View Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
