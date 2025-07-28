import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, BookOpen } from 'lucide-react';

const Courses = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const coursesData = {
    'junior-astronaut': {
      title: "Junior Astronaut",
      subtitle: "Become a Space Explorer",
      description: "Explore the world of astronauts, space science, and life in space through fun and interactive activities.",
      fullDescription: "Our Junior Astronaut course takes young explorers on an exciting journey through space! Students learn about astronaut training, space missions, and what it's really like to live and work in space through engaging activities and simulations.",
      duration: "8 Weeks",
      sessions: "16 Sessions",
      ageGroup: "6-12 Years",
      level: "Beginner",
      modules: [
        "Introduction to Space and Astronauts",
        "Space Suit Design and Functions",
        "Rocket Science Basics",
        "Life in Space Station",
        "Moon Landing Mission",
        "Mars Exploration",
        "Space Food and Experiments",
        "Future Space Missions"
      ],
      skills: [
        "Scientific observation and recording",
        "Problem-solving and critical thinking",
        "Team collaboration and communication",
        "Basic understanding of physics",
        "Creative design and engineering",
        "Space mission planning"
      ],
      activities: [
        "Build a space station model",
        "Design astronaut suits",
        "Create space food recipes",
        "Moon crater experiments",
        "Zero gravity simulations",
        "Mission control activities"
      ],
      certification: "Junior Astronaut Certificate",
      price: "₹8,999",
      image: "/junior-astronaut.jpg"
    },
    'junior-pilot': {
      title: "Junior Pilot",
      subtitle: "Take Flight with Aviation",
      description: "Learn how airplanes fly and understand aviation fundamentals with hands-on learning.",
      fullDescription: "The Junior Pilot course introduces students to the fascinating world of aviation. From understanding how planes fly to learning about different aircraft types, students gain hands-on experience with flight principles and aviation technology.",
      duration: "6 Weeks",
      sessions: "12 Sessions",
      ageGroup: "8-14 Years",
      level: "Beginner",
      modules: [
        "Principles of Flight",
        "Aircraft Types and Design",
        "Navigation and Weather",
        "Airport Operations",
        "Flight Instruments",
        "Aviation Safety"
      ],
      skills: [
        "Understanding of aerodynamics",
        "Basic navigation skills",
        "Weather pattern recognition",
        "Safety protocol awareness",
        "Mathematical calculations",
        "Spatial reasoning"
      ],
      activities: [
        "Build and fly paper airplanes",
        "Flight simulator sessions",
        "Airport field trip",
        "Aircraft model building",
        "Weather station setup",
        "Navigation exercises"
      ],
      certification: "Junior Pilot Certificate",
      price: "₹6,999",
      image: "/junior-pilot.jpg"
    },
    'junior-scientist': {
      title: "Junior Scientist",
      subtitle: "Discover the Scientific Method",
      description: "Develop STEM skills with real science experiments, logic puzzles, and problem-solving activities.",
      fullDescription: "Our Junior Scientist course develops critical thinking and scientific reasoning through hands-on experiments and investigations. Students learn the scientific method while exploring various branches of science in fun, interactive ways.",
      duration: "10 Weeks",
      sessions: "20 Sessions",
      ageGroup: "7-13 Years",
      level: "Beginner to Intermediate",
      modules: [
        "Scientific Method and Observation",
        "Physics Experiments",
        "Chemistry Lab Basics",
        "Biology and Life Sciences",
        "Earth and Environmental Science",
        "Space Science",
        "Engineering Challenges",
        "Science Fair Project"
      ],
      skills: [
        "Scientific methodology",
        "Data collection and analysis",
        "Hypothesis formation and testing",
        "Laboratory safety procedures",
        "Report writing and presentation",
        "Critical thinking and reasoning"
      ],
      activities: [
        "Volcano eruption experiments",
        "Crystal growing projects",
        "Solar system models",
        "Plant growth studies",
        "Simple machine building",
        "Science fair presentation"
      ],
      certification: "Junior Scientist Certificate",
      price: "₹9,999",
      image: "/junior-scientist.jpg"
    },
    'junior-drone-pilot': {
      title: "Junior Drone Pilot",
      subtitle: "Master Drone Technology",
      description: "Build, fly, and operate drones safely, understanding drone technology and DGCA rules.",
      fullDescription: "The Junior Drone Pilot course combines technology, engineering, and aviation in an exciting hands-on program. Students learn to build, program, and safely operate drones while understanding regulations and real-world applications.",
      duration: "8 Weeks",
      sessions: "16 Sessions",
      ageGroup: "10-16 Years",
      level: "Intermediate",
      modules: [
        "Drone Technology Basics",
        "Flight Mechanics and Control",
        "Drone Assembly and Maintenance",
        "Programming and Automation",
        "DGCA Rules and Safety",
        "Aerial Photography and Videography",
        "Commercial Applications",
        "Advanced Flight Techniques"
      ],
      skills: [
        "Drone assembly and maintenance",
        "Flight control and navigation",
        "Basic programming concepts",
        "Safety protocol compliance",
        "Aerial photography techniques",
        "Understanding of regulations"
      ],
      activities: [
        "Build a drone from components",
        "Programming flight patterns",
        "Obstacle course navigation",
        "Aerial photography projects",
        "Safety inspection procedures",
        "Commercial mission simulations"
      ],
      certification: "Junior Drone Pilot Certificate + DGCA Awareness",
      price: "₹12,999",
      image: "/junior-drone.jpg"
    },
    'junior-rocket-scientist': {
      title: "Junior Rocket Scientist",
      subtitle: "Launch into Rocket Science",
      description: "Learn about rocket design, propulsion, thrust, and build your own mini rockets.",
      fullDescription: "The Junior Rocket Scientist course takes students deep into the principles of rocketry and space propulsion. Through hands-on building and testing, students understand the physics behind rocket flight and space exploration.",
      duration: "10 Weeks",
      sessions: "20 Sessions",
      ageGroup: "9-15 Years",
      level: "Intermediate",
      modules: [
        "Rocket Science Fundamentals",
        "Propulsion Systems",
        "Aerodynamics and Flight",
        "Rocket Design and Materials",
        "Launch Systems and Stages",
        "Payload Design",
        "Mission Planning",
        "Advanced Rocket Projects"
      ],
      skills: [
        "Understanding of propulsion physics",
        "Rocket design and engineering",
        "Mathematical calculations",
        "Project planning and execution",
        "Safety procedures",
        "Data analysis and optimization"
      ],
      activities: [
        "Build water rockets",
        "Design solid fuel rockets",
        "Parachute recovery systems",
        "Altitude measurement projects",
        "Multi-stage rocket building",
        "Launch competition"
      ],
      certification: "Junior Rocket Scientist Certificate",
      price: "₹11,999",
      image: "/junior-rocket.jpg"
    },
    'junior-satellite-scientist': {
      title: "Junior Satellite Scientist",
      subtitle: "Explore Satellite Technology",
      description: "Discover satellite science, orbits, communication, and create your own satellite models.",
      fullDescription: "The Junior Satellite Scientist course explores the fascinating world of satellites and space communication. Students learn about orbital mechanics, satellite design, and communication systems while building functional satellite models.",
      duration: "8 Weeks",
      sessions: "16 Sessions",
      ageGroup: "10-16 Years",
      level: "Intermediate",
      modules: [
        "Satellite Basics and Types",
        "Orbital Mechanics",
        "Communication Systems",
        "Satellite Components",
        "Earth Observation",
        "GPS and Navigation",
        "Satellite Design Project",
        "Mission Operations"
      ],
      skills: [
        "Understanding of orbital physics",
        "Satellite system design",
        "Communication technology basics",
        "Data interpretation",
        "Project management",
        "Technical presentation skills"
      ],
      activities: [
        "Build CubeSat models",
        "Satellite communication experiments",
        "Orbit simulation projects",
        "GPS treasure hunt",
        "Earth imaging activities",
        "Mission control simulations"
      ],
      certification: "Junior Satellite Scientist Certificate",
      price: "₹10,999",
      image: "/junior-satellite.jpg"
    }
  };

  const currentCourse = courseId ? coursesData[courseId] : null;

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleEnrollNow = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  if (courseId && !currentCourse) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Course Not Found</h1>
          <button onClick={handleBackToHome} className="text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!courseId) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            <h1 className="text-6xl font-thin mb-4 tracking-wide">Our Courses</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Comprehensive space education courses designed to build strong foundations in STEM fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(coursesData).map(([id, course]) => (
              <div 
                key={id} 
                className="bg-gray-900 border border-gray-700 p-8 rounded-lg hover:border-gray-600 transition-colors duration-300 cursor-pointer"
                onClick={() => navigate(`/courses/${id}`)}
              >
                <h3 className="text-2xl font-medium mb-4">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{course.price}</div>
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
      {/* Header */}
      <div className="bg-gray-900 py-16">
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
              <h1 className="text-5xl font-thin mb-4 tracking-wide">{currentCourse.title}</h1>
              <h2 className="text-2xl text-cyan-400 mb-6">{currentCourse.subtitle}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{currentCourse.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-medium">{currentCourse.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Sessions</div>
                    <div className="font-medium">{currentCourse.sessions}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Age Group</div>
                    <div className="font-medium">{currentCourse.ageGroup}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-400">Level</div>
                    <div className="font-medium">{currentCourse.level}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-cyan-400">{currentCourse.price}</div>
                <div className="text-gray-400">per student</div>
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
                <div className="text-gray-500 text-lg">Course Image</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Modules */}
          <div>
            <h3 className="text-3xl font-thin mb-8 tracking-wide">Course Modules</h3>
            <div className="space-y-4">
              {currentCourse.modules.map((module, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cyan-400 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-lg">{module}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-thin mb-8 tracking-wide">Skills Developed</h3>
            <div className="space-y-4">
              {currentCourse.skills.map((skill, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-3xl font-thin mb-8 tracking-wide">Hands-On Activities</h3>
            <div className="space-y-4">
              {currentCourse.activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="mt-16 bg-gray-900 border border-gray-700 p-8 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-medium mb-2">Certification</h3>
              <p className="text-gray-400">Upon successful completion, students receive:</p>
              <p className="text-xl text-cyan-400 font-medium">{currentCourse.certification}</p>
            </div>
            <Award className="w-16 h-16 text-cyan-400" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-900 border border-gray-700 p-12 rounded-lg text-center">
          <h3 className="text-3xl font-thin mb-4 tracking-wide">Ready to Start Learning?</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our comprehensive course and begin your journey into the fascinating world of space science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEnrollNow}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
            >
              Enroll for {currentCourse.price}
            </button>
            <button 
              onClick={() => navigate('/courses')}
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
            >
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;