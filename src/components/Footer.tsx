import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="flex justify-center space-x-6 mb-2">
        {/* Social Media Links */}
        <a href="https://github.com/souravbhunia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/souravbhunia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/souravbhunia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Twitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Made by <span className="font-semibold">Sourav Bhunia</span>
      </p>
    </footer>
  );
}
