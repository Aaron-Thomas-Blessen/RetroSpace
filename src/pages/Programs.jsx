import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

const Programs = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('programs');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', type: 'navigate', path: '/' },
    { id: 'about', label: 'About', type: 'navigate', path: '/' },
    { id: 'mission', label: 'Our Mission', type: 'navigate', path: '/mission' },
    { id: 'programs', label: 'Programs', type: 'navigate', path: '/programs' },
    { id: 'courses', label: 'Courses', type: 'navigate', path: '/courses' },
    { id: 'careers', label: 'Careers', type: 'navigate', path: '/' },
    { id: 'contact', label: 'Contact Us', type: 'navigate', path: '/' }
  ];

  const handleNavigation = (item) => {
    if (item.path === '/' && (item.id === 'about' || item.id === 'careers' || item.id === 'contact')) {
      // Navigate to home and then scroll to section
      navigate('/', { state: { scrollTo: item.id } });
    } else {
      navigate(item.path);
    }
  };

  const programsData = {
    'isro-field-trips': {
      title: "Field Trips to ISRO Centers",
      subtitle: "Experience Space Science in Action",
      description: "Organized visits to observatories, museums and ISRO facilities to experience real-world space science applications.",
      fullDescription: "Our ISRO field trips offer students an incredible opportunity to witness space science in action. Students visit prestigious ISRO centers, interactive space museums, and cutting-edge observatories where they can see rockets, satellites, and space technology up close.",
      duration: "1-2 Days",
      groupSize: "20-50 Students",
      ageGroup: "8-18 Years",
      locations: ["ISRO Bangalore", "VSSC Thiruvananthapuram", "IPRC Mahendragiri"],
      highlights: [
        "Live rocket and satellite demonstrations",
        "Interactive sessions with ISRO scientists",
        "Hands-on space technology workshops",
        "Visit to Mission Control Centers",
        "Planetarium shows and astronomy sessions"
      ],
      benefits: [
        "Real-world exposure to space technology",
        "Inspiration from space professionals",
        "Understanding of India's space program",
        "Career guidance in aerospace",
        "Practical learning experience"
      ],
      image: "/isro-trip.jpg"
    },
    'sky-gazing': {
      title: "Sky Gazing Programs",
      subtitle: "Explore the Cosmos Above",
      description: "On-campus astronomy sessions using telescopes to observe celestial bodies and learn practical astronomy fundamentals.",
      fullDescription: "Our sky gazing programs bring the wonders of the universe directly to your campus. Using professional telescopes and guided by expert astronomers, students explore constellations, planets, and deep-sky objects while learning fundamental astronomy concepts.",
      duration: "2-4 Hours",
      groupSize: "15-40 Students",
      ageGroup: "6-16 Years",
      locations: ["Your School Campus", "Local Observatory", "Dark Sky Sites"],
      highlights: [
        "Professional telescope observations",
        "Constellation identification",
        "Planet and moon surface viewing",
        "Astrophotography sessions",
        "Star chart and navigation training"
      ],
      benefits: [
        "Direct connection with astronomy",
        "Understanding of celestial mechanics",
        "Inspiration for STEM careers",
        "Development of observation skills",
        "Appreciation for natural sciences"
      ],
      image: "/sky-gazing.jpg"
    },
    'space-workshops': {
      title: "Space Workshops",
      subtitle: "Hands-On Space Technology",
      description: "Hands-on activities introducing students to aviation, rockets, satellites and drones with real industry insights.",
      fullDescription: "Interactive workshops where students build rockets, design satellites, and learn about aviation through practical activities. Each session combines theory with hands-on construction and testing of space-related projects.",
      duration: "3-6 Hours",
      groupSize: "10-30 Students",
      ageGroup: "8-18 Years",
      locations: ["School Labs", "RetroSpace Center", "Mobile Workshop Units"],
      highlights: [
        "Build and launch model rockets",
        "Design satellite prototypes",
        "Drone assembly and programming",
        "Aerodynamics experiments",
        "Mission planning simulations"
      ],
      benefits: [
        "Practical engineering skills",
        "Problem-solving abilities",
        "Team collaboration",
        "Understanding of physics principles",
        "Innovation and creativity development"
      ],
      image: "/space-workshop.jpg"
    },
    'aerospace-curriculum': {
      title: "Aerospace Curriculum & Clubs",
      subtitle: "Comprehensive Space Education",
      description: "Space science and STEM programs that develop creative thinking, problem solving, and teamwork skills while exploring the universe.",
      fullDescription: "A comprehensive curriculum designed to integrate space science into regular education. Students participate in ongoing projects, competitions, and research activities that develop both technical skills and scientific thinking.",
      duration: "Semester/Year Long",
      groupSize: "15-25 Students",
      ageGroup: "10-18 Years",
      locations: ["Partner Schools", "RetroSpace Academy", "Online Platform"],
      highlights: [
        "Structured space science curriculum",
        "Student-led research projects",
        "Space technology competitions",
        "Peer mentoring programs",
        "Industry expert mentorship"
      ],
      benefits: [
        "Systematic knowledge building",
        "Research and analytical skills",
        "Leadership development",
        "College preparation",
        "Career pathway guidance"
      ],
      image: "/aerospace-curriculum.jpg"
    },
    'guest-talks': {
      title: "Guest Talks by ISRO Scientists",
      subtitle: "Learn from Space Pioneers",
      description: "Interactive sessions with scientists, engineers and astronauts to ignite curiosity and broaden career aspirations.",
      fullDescription: "Exclusive sessions with renowned ISRO scientists, engineers, and space industry professionals. These interactive talks provide students with insights into real space missions, career paths, and the future of space exploration.",
      duration: "1-2 Hours",
      groupSize: "50-200 Students",
      ageGroup: "12-18 Years",
      locations: ["School Auditoriums", "Virtual Sessions", "ISRO Centers"],
      highlights: [
        "Direct interaction with space professionals",
        "Mission success stories and challenges",
        "Career guidance and pathways",
        "Q&A sessions with experts",
        "Autograph and networking opportunities"
      ],
      benefits: [
        "Inspiration from role models",
        "Career clarity and motivation",
        "Understanding of real challenges",
        "Network building opportunities",
        "Enhanced scientific curiosity"
      ],
      image: "/guest-talks.jpg"
    }
  };

  const currentProgram = programId ? programsData[programId] : null;

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleEnrollNow = () => {
    // Scroll to contact section or open enrollment form
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  if (programId && !currentProgram) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Program Not Found</h1>
          <button onClick={handleBackToHome} className="text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!programId) {
    // Show all programs overview
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <Navbar 
          scrollY={scrollY}
          activeSection={activeSection}
          navItems={navItems}
          onNavigate={handleNavigation}
          alwaysDark={true}
        />
        
        <div className="container mx-auto px-6 py-12 mt-20">
          <div className="mb-8">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-6xl font-thin mb-4 tracking-wide">Our Programs</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Discover our comprehensive space education programs designed to inspire and educate the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(programsData).map(([id, program]) => (
              <div 
                key={id} 
                className="bg-gray-900 border border-gray-700 p-8 rounded-lg hover:border-gray-600 transition-colors duration-300 cursor-pointer"
                onClick={() => navigate(`/programs/${id}`)}
              >
                <h3 className="text-2xl font-medium mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <div className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar 
        scrollY={scrollY}
        activeSection={activeSection}
        navItems={navItems}
        onNavigate={handleNavigation}
        alwaysDark={true}
      />
      
      {/* Header */}
      <div className="bg-gray-900 py-16 mt-20">
        <div className="container mx-auto px-6">
          <button 
            onClick={handleBackToHome}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-thin mb-4 tracking-wide">{currentProgram.title}</h1>
              <h2 className="text-2xl text-cyan-400 mb-6">{currentProgram.subtitle}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{currentProgram.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-medium">{currentProgram.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Group Size</div>
                    <div className="font-medium">{currentProgram.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Age Group</div>
                    <div className="font-medium">{currentProgram.ageGroup}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Locations</div>
                    <div className="font-medium">{currentProgram.locations[0]}</div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleEnrollNow}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
              >
                Enroll Now
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 w-full h-96 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-lg">Program Image</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Highlights */}
          <div>
            <h3 className="text-3xl font-thin mb-8 tracking-wide">Program Highlights</h3>
            <div className="space-y-4">
              {currentProgram.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-thin mb-8 tracking-wide">Learning Benefits</h3>
            <div className="space-y-4">
              {currentProgram.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16">
          <h3 className="text-3xl font-thin mb-8 tracking-wide">Available Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentProgram.locations.map((location, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-lg text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-2">{location}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-900 border border-gray-700 p-12 rounded-lg text-center">
          <h3 className="text-3xl font-thin mb-4 tracking-wide">Ready to Begin Your Space Journey?</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already embarked on their space education adventure with RetroSpace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEnrollNow}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
            >
              Enroll Now
            </button>
            <button 
              onClick={handleBackToHome}
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
            >
              View All Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;