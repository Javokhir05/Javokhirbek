
import fittrackImage from "../assets/projects/fittrack.jpg";
import devconnectImage from "../assets/projects/devconnect.png";
import eschoolImage from "../assets/projects/eschool.png";
import chatbotImage from "../assets/projects/chatbot.jpg";

export const projects = [
  {
    number: "01",
    name: "ESCHOOL",
    category: "Education Platform",
    description:
      "An online education platform designed to connect students and teachers, manage learning materials, and support interactive learning.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "In Development",
    image: eschoolImage,
    github: "https://github.com/Javokhir05/ESCHOOL",
    live: "",
  },
  {
    number: "02",
    name: "DevConnect",
    category: "Developer Social Platform",
    description:
      "A platform for developers to discover like-minded people through skills, share projects, and collaborate with other developers.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "In Development",
    image: devconnectImage,
    github: "https://github.com/Javokhir05/devconnect",
    live: "",
  },
  {
    number: "03",
    name: "FitTrack",
    category: "Fitness Web Application",
    description:
      "A fitness tracking application designed to help users monitor workouts and manage their fitness progress.",
    technologies: ["JavaScript", "React", "API"],
    status: "Completed",
    image: fittrackImage,
    github: "https://github.com/Javok05/fittrack",
    live: "https://fittrackuz.vercel.app",
  },
  {
    number: "04",
    name: "AI Chatbot",
    category: "AI Web Application",
    description:
      "An AI-powered chatbot built with JavaScript and Gemini API, supporting multiple languages and conversation history.",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
    status: "Completed",
    image: chatbotImage,
    github: "https://github.com/Javokhir05/AI-Project-via-JS",
    live: "https://ai-chatbot-te.netlify.app",
  },
];
