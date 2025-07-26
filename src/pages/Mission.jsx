import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// --- Helper Components ---

// Starfield background for a more dynamic feel
const Starfield = ({ starCount = 500 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [starCount]);

  return (
    <g>
      {stars.map(star => (
        <circle key={star.id} cx={star.x} cy={star.y} r={star.size} fill="white" opacity={star.opacity} />
      ))}
    </g>
  );
};


// Icon for the shuttle
const ShuttleIcon = ({ x, y, angle }) => (
  <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
    <path
      d="M0 -10 L6 -2 L4 10 L-4 10 L-6 -2 Z"
      fill="#ffffff"
      stroke="#cccccc"
      strokeWidth="1"
    />
    <path
      d="M-2 10 Q 0 14 2 10"
      fill="none"
      stroke="#ff8c00"
      strokeWidth="1.5"
    />
  </g>
);

// Planet component with a glow effect
const Planet = ({ cx, cy, radius, color, name, onHover, id }) => (
  <g onMouseEnter={() => onHover(name)} onMouseLeave={() => onHover(null)}>
    <defs>
      <radialGradient id={`glow-${id}`}>
        <stop offset="60%" stopColor={color} stopOpacity="1" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx={cx} cy={cy} r={radius * 2} fill={`url(#glow-${id})`} opacity="0.7" />
    <circle cx={cx} cy={cy} r={radius} fill={color} className="cursor-pointer" />
    <text x={cx} y={cy + radius + 15} fill="white" textAnchor="middle" fontSize="12" className="font-sans">
      {name}
    </text>
  </g>
);

// Orbit path component
const OrbitPath = ({ cx, cy, rx, ry, color = "rgba(255, 255, 255, 0.15)" }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" />
);


// --- Main App Component ---

export default function App() {
  // --- Constants and Configuration ---
  const SVG_WIDTH = 1200;
  const SVG_HEIGHT = 700;
  const SUN_X = SVG_WIDTH / 2;
  const SUN_Y = SVG_HEIGHT / 2;
  const SUN_RADIUS = 30;

  const planetData = useMemo(() => ({
    Mercury: { id: 'mer', radius: 4, color: '#A9A9A9', orbitRadius: 80, period: 88, info: "The smallest planet and nearest to the Sun." },
    Venus: { id: 'ven', radius: 8, color: '#FFA500', orbitRadius: 140, period: 225, info: "Venus has a thick, toxic atmosphere, making it the hottest planet." },
    Earth: { id: 'ear', radius: 9, color: '#4682B4', orbitRadius: 210, period: 365, info: "Our home planet, the only place known to harbor life." },
    Mars: { id: 'mar', radius: 5, color: '#FF4500', orbitRadius: 300, period: 687, info: "The 'Red Planet' is a primary target for future exploration." },
  }), []);
  
  const MISSION_DURATION_DAYS = 210;

  // --- State Management ---
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(true);
  const [missionStatus, setMissionStatus] = useState('pre-launch'); // 'pre-launch', 'in-transit', 'complete'
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const shuttlePathRef = useRef(null);

  // --- Animation Loop ---
  useEffect(() => {
    let animationFrameId;
    if (!isPaused && missionStatus === 'in-transit') {
      const animate = () => {
        setTime(prevTime => {
            const newTime = prevTime + speed;
            if (newTime >= MISSION_DURATION_DAYS) {
                setMissionStatus('complete');
                setIsPaused(true);
                return MISSION_DURATION_DAYS;
            }
            return newTime;
        });
        animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed, missionStatus]);

  // --- Calculations ---
  const calculatePosition = useCallback((orbitRadius, period, currentTime) => {
    const angle = (2 * Math.PI * currentTime) / period;
    const x = SUN_X + orbitRadius * Math.cos(angle);
    const y = SUN_Y + orbitRadius * Math.sin(angle);
    return { x, y };
  }, [SUN_X, SUN_Y]);

  const positions = useMemo(() => {
    const pos = {};
    for (const name in planetData) {
      pos[name] = calculatePosition(planetData[name].orbitRadius, planetData[name].period, time);
    }
    return pos;
  }, [time, planetData, calculatePosition]);

  const shuttlePathData = useMemo(() => {
    const launchTime = 0;
    const arrivalTime = MISSION_DURATION_DAYS;
    const earthStart = calculatePosition(planetData.Earth.orbitRadius, planetData.Earth.period, launchTime);
    const marsEnd = calculatePosition(planetData.Mars.orbitRadius, planetData.Mars.period, arrivalTime);
    const earthStartAngle = (2 * Math.PI * launchTime) / planetData.Earth.period;
    const marsArrivalAngle = (2 * Math.PI * arrivalTime) / planetData.Mars.period;
    const controlX1 = SUN_X + (planetData.Earth.orbitRadius + 80) * Math.cos(earthStartAngle + 0.4);
    const controlY1 = SUN_Y + (planetData.Earth.orbitRadius + 80) * Math.sin(earthStartAngle + 0.4);
    const controlX2 = SUN_X + (planetData.Mars.orbitRadius - 100) * Math.cos(marsArrivalAngle - 0.4);
    const controlY2 = SUN_Y + (planetData.Mars.orbitRadius - 100) * Math.sin(marsArrivalAngle - 0.4);
    return {
        path: `M ${earthStart.x} ${earthStart.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${marsEnd.x} ${marsEnd.y}`,
        rendezvous: marsEnd,
    };
  }, [planetData, calculatePosition, MISSION_DURATION_DAYS]);

  const shuttlePosition = useMemo(() => {
    if (shuttlePathRef.current && shuttlePathRef.current.getTotalLength() > 0) {
      const path = shuttlePathRef.current;
      const pathLength = path.getTotalLength();
      const missionProgress = Math.min(time / MISSION_DURATION_DAYS, 1);
      const distance = pathLength * missionProgress;
      const point = path.getPointAtLength(distance);
      const nextPoint = path.getPointAtLength(Math.min(distance + 1, pathLength));
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
      return { x: point.x, y: point.y, angle, progress: missionProgress, pathLength };
    }
    const earthStart = calculatePosition(planetData.Earth.orbitRadius, planetData.Earth.period, 0);
    return { x: earthStart.x, y: earthStart.y, angle: 90, progress: 0, pathLength: 0 };
  }, [time, shuttlePathData, planetData, calculatePosition, MISSION_DURATION_DAYS]);

  // --- Event Handlers ---
  const handleLaunch = () => {
    if (missionStatus === 'pre-launch') {
        setTime(0);
        setMissionStatus('in-transit');
        setIsPaused(false);
    }
  };
  
  const handleReset = () => {
    setTime(0);
    setMissionStatus('pre-launch');
    setIsPaused(true);
  };
  
  const handleTimelineScrub = (e) => {
    const newTime = Number(e.target.value);
    setTime(newTime);
    if (missionStatus === 'pre-launch' && newTime > 0) {
        setMissionStatus('in-transit');
    }
    if (newTime >= MISSION_DURATION_DAYS) {
        setMissionStatus('complete');
    } else if (missionStatus === 'complete') {
        setMissionStatus('in-transit');
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4 antialiased">
      <div className="w-full max-w-7xl bg-black rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden border border-gray-700">
        {/* --- Main SVG Canvas --- */}
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="w-full h-auto bg-[#0a0a1a]">
          <Starfield />
          <defs>
            <radialGradient id="sunGlow">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="60%" stopColor="#FFD700" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={SUN_X} cy={SUN_Y} r={SUN_RADIUS + 40} fill="url(#sunGlow)" />
          <circle cx={SUN_X} cy={SUN_Y} r={SUN_RADIUS} fill="#FFD700" />
          
          {Object.entries(planetData).map(([name, data]) => (
            <React.Fragment key={name}>
              <OrbitPath cx={SUN_X} cy={SUN_Y} rx={data.orbitRadius} ry={data.orbitRadius} />
              <Planet {...data} cx={positions[name].x} cy={positions[name].y} onHover={setHoveredPlanet} />
            </React.Fragment>
          ))}
          
          <path ref={shuttlePathRef} d={shuttlePathData.path} fill="none" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx={shuttlePathData.rendezvous.x} cy={shuttlePathData.rendezvous.y} r="6" fill="none" stroke="cyan">
             <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
             <animate attributeName="stroke-opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          {missionStatus !== 'pre-launch' && <ShuttleIcon x={shuttlePosition.x} y={shuttlePosition.y} angle={shuttlePosition.angle} />}
        </svg>

        {/* --- Controls and Info Panels --- */}
        <div className="p-4 bg-gray-800/30 backdrop-blur-sm border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {/* Launch & Time Controls */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg text-cyan-300 mb-3 text-center">Mission Control</h3>
                        <div className="flex items-center justify-center space-x-2 mb-3">
                            <button onClick={() => setIsPaused(!isPaused)} disabled={missionStatus !== 'in-transit'} className="px-4 py-2 bg-cyan-600 rounded-lg text-white font-bold hover:bg-cyan-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed w-24">{isPaused ? 'Resume' : 'Pause'}</button>
                            <button onClick={handleReset} className="px-4 py-2 bg-red-700/80 rounded-lg hover:bg-red-600 transition-colors w-24">Reset</button>
                        </div>
                    </div>
                    <button onClick={handleLaunch} disabled={missionStatus !== 'pre-launch'} className="w-full py-2 bg-green-600 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
                        Launch Mission
                    </button>
                </div>

                {/* Shuttle Status */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-lg text-orange-400 mb-3 text-center">Shuttle Status</h3>
                    <div className="text-sm space-y-2">
                        <p>Status: <span className="font-mono text-cyan-300 float-right">{missionStatus.replace('-', ' ').toUpperCase()}</span></p>
                        <p>Mission Day: <span className="font-mono text-cyan-300 float-right">{time.toFixed(0)} / {MISSION_DURATION_DAYS}</span></p>
                        <p>Progress to Mars: <span className="font-mono text-cyan-300 float-right">{(shuttlePosition.progress * 100).toFixed(1)}%</span></p>
                        <p>Est. Velocity (km/h): <span className="font-mono text-cyan-300 float-right">{(shuttlePosition.pathLength / MISSION_DURATION_DAYS * speed * 1000).toFixed(0)}</span></p>
                    </div>
                </div>
                
                {/* Planet Info */}
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-lg text-purple-400 mb-3 text-center">System Data</h3>
                    {hoveredPlanet ? (
                    <div className="text-sm text-center">
                        <p className="font-bold text-xl text-white">{hoveredPlanet}</p>
                        <p className="text-gray-300 mt-1 h-10">{planetData[hoveredPlanet].info}</p>
                        <p className="text-gray-400 mt-2">Orbit: <span className="font-mono">{planetData[hoveredPlanet].period} Earth Days</span></p>
                    </div>
                    ) : (
                    <div className="text-center text-gray-400 italic text-sm pt-8 h-full">Hover over a celestial body for details.</div>
                    )}
                </div>
            </div>
            {/* Timeline Scrubber */}
            <div className="bg-gray-900/50 p-3 mt-4 rounded-lg border border-gray-700 flex items-center space-x-4">
                <span className="text-sm font-bold">Timeline</span>
                <input 
                    type="range" 
                    min="0" 
                    max={MISSION_DURATION_DAYS} 
                    value={time} 
                    onChange={handleTimelineScrub}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    disabled={missionStatus === 'pre-launch'}
                />
                <span className="text-sm font-bold w-12 text-right">{speed.toFixed(1)}x</span>
                 <input 
                    type="range" 
                    min="0.1" 
                    max="10" 
                    step="0.1" 
                    value={speed} 
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </div>
      </div>
    </div>
  );
}