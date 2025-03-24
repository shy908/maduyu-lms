import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Import icons
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          {/* Logo or Branding */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo1.svg"
                alt="Logo"
                width={40}
                height={30}
                priority
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                Maduyu Academy
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <Link href="/my-courses" className="text-sm text-gray-400 hover:text-blue-600">
             My Courses
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Maduyu Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
