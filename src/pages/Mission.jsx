import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Lightbulb, Users, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';

const Mission = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('mission');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'programs', label: 'Programs' },
    { id: 'courses', label: 'Courses' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      navigate('/');
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar 
        scrollY={scrollY}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern bg-repeat" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-8 py-24">
          {/* Back Button */}
          <button 
            onClick={handleBackToHome}
            className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>

          <h1 className="text-6xl md:text-7xl font-thin mb-8 tracking-wider">
            OUR MISSION
          </h1>
        
        </div>
      </section>
    </div>
  );
};

export default Mission;