import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MockPrep
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/features"
              className="hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
              Ace Your Next Interview
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300 text-gray-700">
              Practice mock interviews for any field using AI-based questioning,
              personalized feedback, and real environment simulation with camera
              and mic.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 text-lg font-medium"
              >
                Start Free Practice
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-lg font-medium border border-gray-300 dark:border-gray-700"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          {/* Features Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Powerful Features</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-4 text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-700">
                Everything you need to prepare for your next interview and land
                your dream job
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature cards with improved styling and icons */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Based Questioning
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Smart algorithms generate questions tailored to your specific
                  field and experience level.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Real-Time Feedback
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Get instant, actionable feedback on your answers to
                  continuously improve your performance.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Camera & Mic Integration
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Practice in a realistic interview environment with full camera
                  and microphone support.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Comprehensive Reports
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Receive detailed performance analytics and specific areas for
                  improvement after each session.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  Multiple Fields
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Supports interviews across various industries including tech,
                  finance, healthcare, and more.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group hover:border-blue-500 dark:hover:border-blue-500">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  User-Friendly Interface
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Enjoy a seamless and intuitive experience designed to help you
                  focus on your interview skills.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">How It Works</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-4 text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-700">
                Get interview-ready in just three simple steps
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 text-center p-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Select Your Field</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Choose from various job categories and experience levels to
                  tailor the interview to your needs.
                </p>
              </div>
              <div className="flex-1 text-center p-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Take the Interview</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Answer questions from our AI interviewer just as you would in
                  a real interview setting.
                </p>
              </div>
              <div className="flex-1 text-center p-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Feedback</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Review detailed feedback and suggestions to improve your
                  performance for the real interview.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Start practicing now and boost your confidence for your upcoming
              interviews.
            </p>
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-lg font-medium inline-block"
            >
              Start Free Practice
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  MockPrep
                </h3>
                <p className="dark:text-gray-400 text-gray-600 max-w-xs">
                  Your ultimate interview preparation platform powered by AI.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Product</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/features"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/testimonials"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Support</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/help"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="dark:text-gray-400 text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center dark:text-gray-400 text-gray-600">
              <p>© {new Date().getFullYear()} MockPrep. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
