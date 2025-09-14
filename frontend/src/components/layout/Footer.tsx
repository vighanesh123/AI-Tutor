import React from 'react';
import { Brain, Github, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AI Tutor</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Computer Science students with AI-powered tutoring, 
              interactive quizzes, and collaborative learning tools.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/vighanesh123" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer" title="vighanesh123 (Vighanesh Bhaskar Dabare)">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:contact@aitutor.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://aitutor.com/docs" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Code className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/auth" className="text-gray-300 hover:text-white transition-colors">Sign In</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/tutor" className="text-gray-300 hover:text-white transition-colors">AI Tutor</a></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Java Programming</span></li>
              <li><span className="text-gray-300">Data Structures</span></li>
              <li><span className="text-gray-300">Operating Systems</span></li>
              <li><span className="text-gray-300">Computer Networks</span></li>
              <li><span className="text-gray-300">Machine Learning</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© 2024 AI Tutor. All rights reserved.</p>
              <p className="mt-1">Developed by Vighnesh Dabare | Contact: +91 9359942986</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Privacy Policy clicked')}>
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Terms of Service clicked')}>
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Contact clicked')}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
