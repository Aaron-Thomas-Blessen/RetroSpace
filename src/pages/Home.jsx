import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

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
    { id: 'shop', label: 'Shop' },
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light tracking-wider text-white">
              RETROSPACE
            </div>
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern bg-repeat" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <h1 className="text-7xl md:text-8xl font-thin mb-6 tracking-wider">
            RETROSPACE
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8 tracking-wide">
            ENGINEERING THE FUTURE OF FLIGHT
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Advanced propulsion systems, cutting-edge spacecraft design, and precision engineering 
            for the next generation of space exploration and commercial aviation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group flex items-center px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wide hover:bg-gray-200 transition-all duration-300">
              Explore Projects
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border border-white text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
                Founded on the principles of precision engineering and innovative design, RetroSpace has been 
                at the forefront of space technology for over two decades. Our team of world-class engineers 
                and scientists work tirelessly to push the boundaries of what's possible in flight.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-light">
                From commercial aviation to deep space exploration, our solutions power the vehicles that 
                connect our world and expand our reach into the cosmos.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">25+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">150+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">40+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 h-96 flex items-center justify-center">
              <div className="text-gray-600 text-lg font-light">[ COMPANY IMAGE ]</div>
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

      {/* Shop Section */}
      <section id="shop" className="py-24 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin mb-8 tracking-wide">
              Products & Services
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of space components, systems, and engineering services 
              designed for the most demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Propulsion Systems", desc: "Advanced rocket engines and propulsion technologies" },
              { title: "Avionics", desc: "Flight control systems and navigation equipment" },
              { title: "Structural Components", desc: "Lightweight, high-strength space materials" },
              { title: "Testing Services", desc: "Comprehensive testing and validation solutions" },
              { title: "Engineering Consulting", desc: "Expert space engineering consultation" },
              { title: "Maintenance Solutions", desc: "Specialized maintenance and support services" }
            ].map((item, i) => (
              <div key={i} className="bg-black border border-gray-700 p-8 hover:border-gray-600 transition-colors duration-300">
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">{item.desc}</p>
                <button className="text-white text-sm uppercase tracking-wide hover:text-gray-300 transition-colors duration-300">
                  Learn More →
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
                Ready to discuss your space project? Our team of experts is here to help you 
                find the right solution for your specific requirements.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">Headquarters</h3>
                  <p className="text-gray-400 font-light">
                    1234 RetroSpace Drive<br />
                    Houston, TX 77058<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">Contact</h3>
                  <p className="text-gray-400 font-light">
                    Phone: +1 (555) 123-4567<br />
                    Email: info@retrospace.com
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
              the future of space technology. We offer competitive compensation, comprehensive 
              benefits, and the opportunity to work on groundbreaking projects.
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-wide">Benefits</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• Competitive salary and performance bonuses</li>
                <li>• Comprehensive health, dental, and vision insurance</li>
                <li>• 401(k) retirement plan with company matching</li>
                <li>• Professional development opportunities</li>
                <li>• Flexible work arrangements</li>
                <li>• State-of-the-art facilities and equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-wide">Culture</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                At RetroSpace, we foster a culture of innovation, collaboration, and excellence. 
                Our team members are passionate about pushing the boundaries of what's possible 
                in space engineering, working together to solve complex challenges and 
                deliver solutions that make a real impact on the future of flight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;