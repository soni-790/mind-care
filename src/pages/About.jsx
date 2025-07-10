import { HeartIcon, ShieldCheckIcon, UserGroupIcon, LightBulbIcon } from "@heroicons/react/24/outline"

export default function About() {
  const values = [
    {
      icon: HeartIcon,
      title: "Compassionate Care",
      description:
        "We approach mental health with empathy, understanding, and genuine care for every individual's journey.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy & Security",
      description:
        "Your mental health information is completely confidential and protected with the highest security standards.",
    },
    {
      icon: UserGroupIcon,
      title: "Professional Network",
      description: "We connect you with qualified mental health professionals and evidence-based resources.",
    },
    {
      icon: LightBulbIcon,
      title: "Evidence-Based",
      description:
        "Our assessments and recommendations are based on established psychological research and clinical practices.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      description: "15+ years experience in mental health assessment and treatment.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Michael Chen",
      role: "Psychiatrist",
      description: "Specialist in anxiety disorders and depression treatment.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lisa Rodriguez",
      role: "Licensed Therapist",
      description: "Expert in cognitive behavioral therapy and trauma counseling.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="bg-white">
     
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About MindCare</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're dedicated to making mental health assessment and support accessible, confidential, and professional
              for everyone who needs it.
            </p>
          </div>
        </div>
      </div>

     
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Mental health is just as important as physical health, yet many people struggle to access proper
              assessment and support. Our mission is to bridge this gap by providing a safe, confidential, and
              professional platform for mental health screening and resource connection.
            </p>
            <p className="text-lg text-gray-600">
              We believe that everyone deserves access to quality mental health resources, and we're committed to making
              that a reality through technology, compassion, and evidence-based practices.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team consists of licensed mental health professionals dedicated to your wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md p-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards better mental health with our comprehensive assessment.
          </p>
          <a
            href="/assessment"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Start Assessment
          </a>
        </div>
      </div>
    </div>
  )
}
