import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Assuming you're using react-icons
import CTA from './CTA';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
       <CTA />
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-10 lg:px-20 border-t border-gray-800">

       
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Company Info */}
        <div className="col-span-1 lg:col-span-2">
          <div className="mb-4">
            {/* Replace with your actual logo component or image */}
            <img src="/billzzy-logo.png" alt="Billzzy Logo" className="h-10 mb-3" />
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm mb-4">
            Simplifying billing for businesses worldwide with smart automation and powerful features.
          </p>
          <p className="text-sm text-gray-500">
            Powered by <a href="https://www.techvaseegrah.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-200">Tech Vaseegrah</a>
          </p>
        </div>

        {/* Site Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Site</h4>
          <ul>
            <li className="mb-2"><a href="#features" className="hover:text-indigo-400 transition-colors duration-200">Features</a></li>
            <li className="mb-2"><a href="#industries" className="hover:text-indigo-400 transition-colors duration-200">Industries</a></li>
            <li className="mb-2"><a href="#pricing" className="hover:text-indigo-400 transition-colors duration-200">Pricing</a></li>
            <li className="mb-2"><a href="#faq" className="hover:text-indigo-400 transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>

        {/* Automations Dropdown Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Automations</h4>
          <ul>
            <li className="mb-2"><a href="/features/order-confirmation-automation" className="hover:text-indigo-400 transition-colors duration-200">Order Confirmations</a></li>
            <li className="mb-2"><a href="/features/packing-tracking-automation" className="hover:text-indigo-400 transition-colors duration-200">Packing & Tracking</a></li>
            <li className="mb-2"><a href="/features/label-printing" className="hover:text-indigo-400 transition-colors duration-200">Label Printing</a></li>
            <li className="mb-2"><a href="/features/automatic-amount-confirmation" className="hover:text-indigo-400 transition-colors duration-200">Amount Confirmation</a></li>
          </ul>
        </div>

        {/* Industries Dropdown Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Industries</h4>
          <ul>
            <li className="mb-2"><a href="/industries/e-commerce" className="hover:text-indigo-400 transition-colors duration-200">E-Commerce</a></li>
            <li className="mb-2"><a href="/industries/retail" className="hover:text-indigo-400 transition-colors duration-200">Retail</a></li>
            <li className="mb-2"><a href="/industries/small-businesses" className="hover:text-indigo-400 transition-colors duration-200">Small Businesses</a></li>
            <li className="mb-2"><a href="/industries/logistics-delivery" className="hover:text-indigo-400 transition-colors duration-200">Logistics & Delivery</a></li>
          </ul>
        </div>

        {/* Legal & Follow Us */}
        {/* Combining Legal and Social for better layout on smaller screens, can be split again if more links are added */}
        {/* <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
          <ul>
            <li className="mb-2"><a href="/privacy-policy" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms-of-service" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div> */}

        {/* Follow Us - Moved to main company info for better visual grouping, or can be a separate column if needed */}
        {/* No, let's keep legal and social together for better balance as per the original layout, but make it look better */}
        {/* If you prefer it as a separate column, just uncomment the above and adjust col-span */}
      </div>

      <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com/billzzy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-200">
                <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/billzzy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-200">
                <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/billzzy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-200">
                <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="mailto:info@billzzy.com" className="hover:text-indigo-400 transition-colors duration-200">
                <FaEnvelope className="h-5 w-5" />
            </a>
        </div>
        <p>&copy; {currentYear} Billzzy. All rights reserved.</p>
        <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-indigo-400 transition-colors duration-200 mx-2">Privacy Policy</a> |
            <a href="/terms-of-service" className="hover:text-indigo-400 transition-colors duration-200 mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;