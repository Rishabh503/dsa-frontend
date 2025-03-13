import { NavLink } from "react-router";

export default function FrontPage() {
    return (
      <div className="min-h-screen w-full bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="bg-gray-100 shadow-md">
          <div className=" mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">DSA Manager</h1>
            <div className="flex gap-4">
              <NavLink
                to="/login"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Register
              </NavLink>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Manage Your DSA Progress Efficiently!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Track your progress, set reminders, organize groups, and stay ahead with your coding practice. Designed for efficiency and ease of use.
            </p>
            <div className="flex gap-4">
              <NavLink
                to="/register"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/login"
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-200 transition"
              >
                Login
              </NavLink>
            </div>
          </div>
  
          {/* Right Section (Illustration) */}
          <div className="md:w-1/2">
            <img
              src="971.jpg"
              alt="Coding Illustration"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
  
        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Why Choose DSA Manager?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FeatureCard
              title="Track Progress"
              description="Monitor your daily coding progress and identify weak spots."
            />
            {/* Feature 2 */}
            <FeatureCard
              title="Set Reminders"
              description="Get timely reminders for your practice and deadlines."
            />
            {/* Feature 3 */}
            <FeatureCard
              title="Organize Groups"
              description="Collaborate with others and practice together."
            />
          </div>
        </div>
      </div>
    );
  }
  
  function FeatureCard({ title, description }) {
    return (
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  