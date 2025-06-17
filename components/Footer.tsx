import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-blue-600 bg-clip-text text-transparent">
              Luna
            </h2>
            <p className="text-gray-600 text-sm max-w-xs">
              Your intelligent sleep companion helping you track, analyze, and
              improve your sleep quality.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Navigation
              </h3>
              <div className="mt-4 space-y-2">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 text-sm block"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 text-sm block"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm block"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Legal
              </h3>
              <div className="mt-4 space-y-2">
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 text-sm block"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 text-sm block"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Stay Updated
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600 text-sm">
                Subscribe to our newsletter for sleep tips and updates.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 hover:from-blue-500 hover:via-blue-800 hover:to-violet-800 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Luna. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons - Replace with actual icons */}
            <div className="text-gray-400 hover:text-blue-500">
              <span className="sr-only">Twitter</span>
              <FaXTwitter className="h-6 w-6" />
            </div>
            <div className="text-gray-400 hover:text-blue-500">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
