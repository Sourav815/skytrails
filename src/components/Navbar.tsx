import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Company Logo */}
        <img src="/images/logo.png" alt="Company Logo" width={80} height={80} />

        {/* Search Box */}
        <div className="relative">
          <Link to="https://github.com/Sourav815"><Github/></Link>
        </div>
      </div>
    </nav>
  );
}
