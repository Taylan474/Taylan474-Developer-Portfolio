const projects = [
    {
      title: "Real-Time Chess Game",
      description: "A multiplayer chess game using Socket.IO and React. Real-time sync and resignation support.",
      image: "/images/chess-preview.png",
      tech: ["React", "Javascript", "Socket.IO"],
      github: "https://github.com/Taylan474/chess-website/tree/main"
    },
    
    {
      title: "Prototype for identifying product parts at Alukon KG",
      description: "A machine learning prototype using YOLOv11 to verify correct part usage in Alukon's production line. Developed as part of my bachelor’s thesis and internship, focusing on real-time object detection and process validation.",
      image: "/images/prototype.png",
      tech: ["Python", "YOLO11", "OpenCV", "Machine Learning"],
      route: "/thesis",
      hidden: true
    },
    
    {
      title: "Pomodoro App",
      description: "A productivity timer built with Flutter. Custom study and break intervals.",
      image: "/images/Home.png",
      tech: ["Flutter", "Dart"],
      github: "https://github.com/Taylan474/pomodoro-studying-app",
      live: "https://taylan.oezdabak.dev/pomodoro"
    },
    {
      title: "FlapPyBlink",
      description: "A collaboration project with another student on a study project to integrate OpenCV-based eye-blink detection into FlapPyBird, a Python clone of the popular game Flappy Bird. The movement of the bird is controlled by blinking.",
      tech: ["OpenCV", "Python"],
      github: "https://github.com/sero583/FlapPyBlink"
    },
    {
      title: "Coding Learning Platform with working code sandbox (Java, JavaScript, Python)",
      description: "Another collaboration project with two other students on a study project: a platform for learning programming languages through interactive lessons, quizzes, and a built-in code sandbox.",
      tech:["Laravel", "React", "Docker", "Javascript", "Java", "Python", "PHP", "MySQL"],
      github: "https://github.com/sero583/PraktikumSWE"
    },
    {
      comingSoon: true,
      image: "/images/coming-soon.png"
    }
  ];
  
  export default projects;