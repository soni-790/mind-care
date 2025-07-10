import { Link } from "react-router-dom"
import { ArrowRightIcon, HeartIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function Home() {
  const features = [
    {
      icon: HeartIcon,
      title: "Mental Health Assessment",
      description: "Take our comprehensive assessment to understand your mental health status.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy Protected",
      description: "Your data is completely private and secure. We never share your information.",
    },
    {
      icon: UserGroupIcon,
      title: "Professional Resources",
      description: "Access curated resources and professional help when you need it most.",
    },
  ]

  return (
    <div className="bg-white">
   
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Mental Health
              <span className="block text-yellow-300">Matters</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Take the first step towards better mental health with our comprehensive assessment tool. Get personalized
              insights and professional resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Start Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MindCare?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a safe, confidential, and professional approach to mental health assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Mental Health?</h2>
            <p className="text-xl text-blue-100 mb-8">Start your journey towards better mental wellness today.</p>
            <Link
              to="/assessment"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Begin Assessment
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
