import { Link } from "react-router-dom"
import { HeartIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Assessment", href: "/assessment" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const emergencyContacts = [
    { name: "Emergency", number: "911" },
    { name: "Crisis Lifeline", number: "988" },
    { name: "Crisis Text", number: "Text HOME to 741741" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
        
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <HeartIcon className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">MindCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Supporting mental health and wellness through accessible, professional, and confidential services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Help</h3>
            <ul className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <PhoneIcon className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">{contact.name}</div>
                    <div className="text-gray-400 text-sm">{contact.number}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">support@mindcare.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} MindCare. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
