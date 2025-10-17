import React from 'react'
import Footer from './Footer'

function CTA() {
  return (
    <div>{/* CTA Section */}
        <div
          className={`
            text-center transition-all duration-700
            'opacity-100 translate-y-0'}
          `}
        >
          <div className="min-h-5xl bg-gradient-to-br from-indigo-600 to-blue-500 rounded-t-3xl p-10 md:p-12 relative absolute overflow-hidden">
            {/* Background Image for Trust and Partnership */}
            <div className="absolute inset-0 z-0">
              <img
                src="/contact.svg" // Replace with your actual image path
                alt="Building trust and partnership"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
                 {/* <img
                src="/billzzy-logo.png" // Replace with your actual image path
                alt="Building trust and partnership"
                className="w-64 h-34"
              /> */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Supercharge your business with Billzzy
              </h3>
              <p className="text-lg text-indigo-50 mb-8 max-w-2xl mx-auto">
                Join countless businesses who trust Billzzy for seamless, secure, and smart financial solutions. Partner with us for unparalleled growth.
              </p>
              <a
                href="/signup" // Or "/discover-services" or "/request-demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* <Footer /> */}
            </div>
          </div>
        </div>
        </div>
  )
}

export default CTA