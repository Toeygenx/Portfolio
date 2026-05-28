export const personalInfo = {
  name: "Thanakron",
  email: "thanakron.sili@gmail.com",
  github: "https://github.com/Toeygenx",
  education: {
    university: "Kasetsart University",
    degree: "Bachelor of Engineering in Computer Engineering",
    graduationYear: 2026,
    logoPath: "/images/KU_Logo.png",
  },
};

export const techStack = {
  Language: [
    { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  ],
  Frontend: [
    { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
  ],
  Backend: [
    { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "Express.js", badge: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" },
    { name: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
    { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
  ],
  Tool: [
    { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "LlamaIndex", badge: "https://img.shields.io/badge/LlamaIndex-8A2BE2?style=for-the-badge" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Course Recommendation Chatbot",
    description: "Built a full-stack RAG chatbot to centralize course data, achieving an 86.6% hit rate. Leveraged LlamaIndex, ChromaDB, and LLM query expansion to enhance search precision and reduce API costs.",
    techStack: ["React", "FastAPI", "Docker", "LlamaIndex", "ChromaDB", "PostgreSQL", "Tailwind CSS"],
    imagePath: "/images/recomendation_chatbot.png",
    link: "https://recomendation-chatbot-with-rag.vercel.app/",
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "Developed a full-stack chat application featuring secure JWT authentication and real-time messaging via Socket.IO. Integrated Cloudinary for media uploads and built a responsive UI using Tailwind CSS and Zustand.",
    techStack: ["React", "Express", "MongoDB", "Socket.IO", "Cloudinary", "Tailwind CSS"],
    imagePath: "/images/chat_app.png",
    link: "https://chat-app-ljc8.onrender.com/",
  },
  {
    id: 3,
    title: "Crowdfunding Platform",
    description: "Developed the frontend for a platform connecting innovators with investors. Built reusable UI components like interactive charts and integrated RESTful APIs for real-time data visualization.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    imagePath: "/images/crowdfunding.png",
    link: "https://shark-wow.vercel.app/",
  }
];
