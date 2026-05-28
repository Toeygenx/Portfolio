export const personalInfo = {
  name: "Thanakron",
  email: "thanakron.sili@gmail.com",
  github: "https://github.com/Toeygenx",
  education: {
    university: "Kasetsart University",
    degree: "Bachelor of Engineering in Computer Engineering",
    graduationYear: 2026,
    logoPath: "/images/ku-logo.png", // Will be in public/images
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
    title: "AI RAG System",
    description: "Built a sophisticated RAG pipeline to answer complex queries from large document sets. Focused on optimizing vector search and improving the generation quality.",
    techStack: ["Python", "FastAPI", "LlamaIndex", "Docker"],
    imagePath: "/images/project-1.jpg",
    link: "https://github.com/",
  },
  {
    id: 2,
    title: "Task Management API",
    description: "Developed a robust backend API for managing tasks with user authentication, role-based access control, and efficient database indexing.",
    techStack: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    imagePath: "/images/project-2.jpg",
    link: "https://github.com/",
  },
  {
    id: 3,
    title: "Minimalist E-Commerce",
    description: "Created a minimalist, high-performance e-commerce frontend. Implemented smooth animations and a fully responsive design system.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imagePath: "/images/project-3.jpg",
    link: "https://github.com/",
  }
];
