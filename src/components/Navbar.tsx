import { Link } from 'react-router-dom';
import { Home, Users, Star, Calendar, Bell, Settings } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-slate-900/80 border-b border-blue-700 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
              <Home size={20} />
              Home
            </Link>
            <Link to="/members" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
              <Users size={20} />
              Members
            </Link>
            <Link to="/projects" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
              <Star size={20} />
              Projects
            </Link>
            <Link to="/about" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
              <Calendar size={20} />
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-200 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-blue-200 hover:text-white transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;