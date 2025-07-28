import React from 'react';

const Navbar = ({ scrollY, activeSection, navItems, onNavigate, alwaysDark = false }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      alwaysDark || scrollY > 50 ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="RetroSpace Logo" 
              className="w-8 h-8 object-contain"
            />
            <div className="text-2xl font-light tracking-wider text-white">
              RETROSPACE
            </div>
          </div>
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;