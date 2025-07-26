import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'shop', label: 'Programs' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'careers', label: 'Careers' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
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
      <section id="home" className="h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/space.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 z-20">
          <div className="w-full h-full bg-grid-pattern bg-repeat" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-30 text-center max-w-6xl mx-auto px-8">
          <h1 className="text-7xl md:text-8xl font-thin mb-6 tracking-wider">
            RETROSPACE
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wide">
            ENGINEERING THE FUTURE OF FLIGHT
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            A Futuristic Indian space edutech and
research startup, founded by passionate aerospace innovators.
We inspire the next generation through space education,
hands-on STEM programs and real space tech development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group flex items-center px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wide hover:bg-gray-200 transition-all duration-300">
              Explore Projects
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border border-white text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
              JOIN OUR MISSION
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <ArrowDown size={24} className="text-gray-400 animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-thin mb-8 tracking-wide">
                About RetroSpace
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                Retro Space Agency is a futuristic Indian space edutech and
 research startup, founded by passionate aerospace innovators.
 We aim to inspire the next generation through space education,
 hands-on STEM programs and real space tech development like
 Mars missions and reusable rocket boosters
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
                At Retro Space Agency, we empower kids, students and
 enthusiasts by making space science accessible, exciting and
 educational. Our mission is to create future astronauts,
 scientists, engineers and thinkers through practical learning.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">4+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">5+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Programs Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">5+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Courses</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/company.webp" 
                alt="RetroSpace Company" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-thin mb-16 tracking-wide">
            Our Mission
          </h2>
          <div className="bg-gray-900/50 border border-gray-800 p-16">
            <blockquote className="text-2xl font-light leading-relaxed text-gray-200 mb-8">
              "To advance human capability through innovative space engineering, 
              delivering solutions that enable safer, more efficient, and more sustainable flight 
              for commercial, defense, and exploration applications."
            </blockquote>
            <div className="w-16 h-0.5 bg-white mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">Innovation</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Continuously pushing the boundaries of space technology through research and development.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">Precision</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Engineering solutions with the highest standards of quality, safety, and performance.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">Partnership</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Collaborating with industry leaders to deliver transformative space solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="shop" className="py-24 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-8 tracking-wide">
              Our Unique Programs
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive space education programs designed to inspire and educate 
              the next generation of space enthusiasts, engineers, and scientists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Field Trips to ISRO Centers", 
                desc: "Organized visits to observatories, museums and ISRO facilities to experience real-world space science applications." 
              },
              { 
                title: "Sky Gazing Programs", 
                desc: "On-campus astronomy sessions using telescopes to observe celestial bodies and learn practical astronomy fundamentals." 
              },
              
              { 
                title: "Space Workshops", 
                desc: "Hands-on activities introducing students to aviation, rockets, satellites and drones with real industry insights." 
              },
              { 
                title: "Aerospace Curriculum & Clubs", 
                desc: "Space science and STEM programs that develop creative thinking, problem solving, and teamwork skills while exploring the universe." 
              },
              { 
                title: "Guest Talks by ISRO Scientists", 
                desc: "Interactive sessions with scientists, engineers and astronauts to ignite curiosity and broaden career aspirations." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-black border border-gray-700 p-8 hover:border-gray-600 transition-colors duration-300 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wide text-center">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6 text-center flex-grow">{item.desc}</p>
                <button className="text-white text-sm uppercase tracking-wide hover:text-gray-300 transition-colors duration-300 mx-auto">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-8 tracking-wide">
              OUR EXCITING COURSES
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Junior Astronaut", 
                desc: "Explore the world of astronauts, space science, and life in space through fun and interactive activities." 
              },
              { 
                title: "Junior Pilot", 
                desc: "Learn how airplanes fly and understand aviation fundamentals with hands-on learning." 
              },
              { 
                title: "Junior Scientist", 
                desc: "Develop STEM skills with real science experiments, logic puzzles, and problem-solving activities." 
              },
              { 
                title: "Junior Drone Pilot", 
                desc: "Build, fly, and operate drones safely, understanding drone technology and DGCA rules." 
              },
              { 
                title: "Junior Rocket Scientist", 
                desc: "Learn about rocket design, propulsion, thrust, and build your own mini rockets." 
              },
              { 
                title: "Junior Satellite Scientist", 
                desc: "Discover satellite science, orbits, communication, and create your own satellite models." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-8 hover:border-gray-700 transition-colors duration-300 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wide text-center">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6 text-center flex-grow">{item.desc}</p>
                <button className="text-white text-sm uppercase tracking-wide hover:text-gray-300 transition-colors duration-300 mx-auto">
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-thin mb-8 tracking-wide">
                Contact Us
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-12 font-light">
                Ready to inspire the next Generation? Get in touch with our team to bring space education to your institution.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">Headquarters</h3>
                  <p className="text-gray-400 font-light">
                    A-Block<br />
Incubation centre <br />
Hindusthan institute of technology <br />
Coimbatore<br />
India

                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">Contact</h3>
                  <p className="text-gray-400 font-light">
                    Phone: +1 (91) 9025627898<br />
                    Email: info.retrospaceagency@gmail.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-2xl font-light mb-8 tracking-wide">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                />
                <textarea 
                  rows="5" 
                  placeholder="Message" 
                  className="w-full bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                />
                <button className="w-full bg-white text-black py-3 font-medium text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-8 tracking-wide">
              Careers
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Join our team of exceptional engineers, scientists, and innovators who are shaping 
              the future of space technology. We offer the opportunity to work on groundbreaking projects.
            </p>
          </div>
          
          <div className="bg-black border border-gray-800 p-12 text-center mb-12">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Open Positions</h3>
            <p className="text-gray-400 font-light mb-8">
              We are currently seeking talented individuals for various positions across our organization.
            </p>
            <button className="px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300">
              View All Openings
            </button>
          </div>
          
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black border-t border-gray-800 py-12 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <div className="mb-8">
      <h3 className="text-2xl font-thin tracking-wide mb-4">RETROSPACE</h3>
      <p className="text-gray-400 font-light">Engineering the Future of Flight</p>
    </div>
    
    <div className="grid md:grid-cols-4 gap-8 mb-8 text-left">
      <div>
        <h4 className="text-white font-medium mb-4">Company</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
          <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Programs</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#shop" className="hover:text-white transition-colors">Education Programs</a></li>
          <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li>Coimbatore, India</li>
          <li>+91 9025627898</li>
          <li>info.retrospaceagency@gmail.com</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4">Follow Us</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-800 pt-8">
      <p className="text-gray-500 text-sm">
        © 2024 RetroSpace Agency. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HomePage;