import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="flex justify-center space-x-6 mb-2">
        
        <a href="https://github.com/sourav815" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/albert-thebigbyte/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Twitter size={24} />
        </a>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Made by <span className="font-semibold">Sourav Bhunia</span>
      </p>
    </footer>
  );
}
