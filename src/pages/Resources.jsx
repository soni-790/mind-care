"use client"

import { useState } from "react"
import { PhoneIcon, ChatBubbleLeftRightIcon, BookOpenIcon, HeartIcon } from "@heroicons/react/24/outline"

export default function Resources() {
  const [activeTab, setActiveTab] = useState("emergency")

  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support for people in suicidal crisis or emotional distress",
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "24/7 treatment referral and information service",
    },
  ]

  const professionalHelp = [
    {
      title: "Find a Therapist",
      description: "Psychology Today's therapist directory",
      link: "https://www.psychologytoday.com",
      icon: HeartIcon,
    },
    {
      title: "Online Therapy",
      description: "BetterHelp - Professional counseling online",
      link: "https://www.betterhelp.com",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "Mental Health Apps",
      description: "Headspace, Calm, and other mindfulness apps",
      link: "#",
      icon: BookOpenIcon,
    },
  ]

  const selfHelpResources = [
    {
      title: "Mindfulness Meditation",
      description: "Learn techniques to manage stress and anxiety through mindfulness practice.",
      tips: [
        "Start with 5-10 minutes daily",
        "Focus on your breathing",
        "Use guided meditation apps",
        "Practice body scan techniques",
      ],
    },
    {
      title: "Stress Management",
      description: "Practical strategies to cope with daily stress and pressure.",
      tips: ["Regular exercise routine", "Maintain a sleep schedule", "Practice deep breathing", "Set realistic goals"],
    },
    {
      title: "Building Resilience",
      description: "Develop emotional strength and bounce back from challenges.",
      tips: [
        "Build strong relationships",
        "Accept change as part of life",
        "Set realistic goals",
        "Take care of yourself",
      ],
    },
  ]

  const tabs = [
    { id: "emergency", name: "Emergency Help", icon: PhoneIcon },
    { id: "professional", name: "Professional Help", icon: HeartIcon },
    { id: "selfhelp", name: "Self-Help", icon: BookOpenIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the support and resources you need for your mental health journey. Remember, seeking help is a sign of
            strength, not weakness.
          </p>
        </div>

     
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>

        
        {activeTab === "emergency" && (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">If you're in immediate danger, call 911</h2>
              <p className="text-red-700">
                If you're having thoughts of suicide or self-harm, please reach out for help immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.name}</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{contact.phone}</div>
                      <p className="text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      
        {activeTab === "professional" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalHelp.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <resource.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        )}

        
        {activeTab === "selfhelp" && (
          <div className="space-y-8">
            {selfHelpResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tips to get started:</h4>
                  <ul className="space-y-2">
                    {resource.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
