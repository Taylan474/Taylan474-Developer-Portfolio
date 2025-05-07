import {
  Code,
  Database,
  Server,
  Settings,
  Brain,
  TerminalSquare,
} from "lucide-react";

const skills = [
  { Icon: Code, color: "text-blue-400", title: "Languages", details: "Java, Python, JavaScript, TypeScript, Dart, SQL, HTML, CSS" },
  { Icon: TerminalSquare, color: "text-pink-400", title: "Frameworks", details: "React, Flutter, Tailwind CSS, Node.js" },
  { Icon: Database, color: "text-green-400", title: "Back End & Databases", details: "SQLite, REST APIs, Socket.IO" },
  { Icon: Settings, color: "text-yellow-400", title: "Tools & Platforms", details: "Git, GitHub, VS Code, Docker" },
  { Icon: Brain, color: "text-purple-400", title: "AI & ML", details: "YOLO, Roboflow, OpenCV, TensorFlow basics" },
  { Icon: Server, color: "text-cyan-400", title: "Deployment", details: "GitHub Pages, Replit" },
];

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
        Hey, I'm Taylan
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10">
        Computer science graduate with a passion for building creative, useful projects. Always curious, always learning.
      </p>

      {/* Skills as a scrolling carousel */}
      <div className="relative w-3/4 mt-16 overflow-hidden group">
        <div className="flex animate-infinite-scroll w-max gap-10">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div className={`flex justify-center mb-4 ${skill.color}`}>
                <skill.Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
