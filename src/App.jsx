import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { HealthProvider } from "./context/HealthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PWAPrompt from "./components/PWAPrompt"
import Home from "./pages/Home"
import Assessment from "./pages/Assessment"
import Resources from "./pages/Resources"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import ShareFloatingButton from "./components/ShareFloatingButton"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <HealthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <ProtectedRoute>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </main>
              <Footer />
              <PWAPrompt />
              <ShareFloatingButton />
            </ProtectedRoute>
          </div>
        </Router>
      </HealthProvider>
    </AuthProvider>
  )
}

export default App
