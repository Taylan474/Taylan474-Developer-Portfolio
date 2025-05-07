import {
    Code,
    Database,
    Server,
    Settings,
    Brain,
    TerminalSquare,
  } from "lucide-react";
  
  function Skills() {
    return (
      <section id="skills" className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Programming Languages */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-blue-400">
              <Code size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-gray-400 text-sm">
              Java, Python, JavaScript, TypeScript, Dart, SQL, HTML, CSS
            </p>
          </div>
  
          {/* Frameworks */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-pink-400">
              <TerminalSquare size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
            <p className="text-gray-400 text-sm">
              React, Flutter, Tailwind CSS, Node.js
            </p>
          </div>
  
          {/* Backend & Databases */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-green-400">
              <Database size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Back End & Databases</h3>
            <p className="text-gray-400 text-sm">
              SQLite, REST APIs, Socket.IO
            </p>
          </div>
  
          {/* Tools & Platforms */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-yellow-400">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
            <p className="text-gray-400 text-sm">
              Git, GitHub, VS Code, Docker 
            </p>
          </div>
  
          {/* AI & ML */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-purple-400">
              <Brain size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
            <p className="text-gray-400 text-sm">
              YOLO, Roboflow, OpenCV, TensorFlow basics
            </p>
          </div>
  
          {/* Server & Deployment */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-cyan-400">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Deployment</h3>
            <p className="text-gray-400 text-sm">
              GitHub Pages, Replit
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  