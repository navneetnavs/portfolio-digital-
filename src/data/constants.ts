const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Firebase",
      "Express.js",
      "MongoDB",
      "SQL",
      "RESTful APIs",
      "Authentication",
    ],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Vercel", "Postman", "Webpack", "VS Code"],
  },
  {
    category: "Programming",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Other Skills",
    items: ["Basketball", "Problem-Solving", "Version Control"],
  },
];

const projects = [
  {
    name: "Paytm App",
    imgUrl: "/images/projects/paytm.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://money-transfer-app-theta.vercel.app/",
    repoUrl: "https://github.com/navneetnavs/MoneyTransferApp.git",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB","Express.js","Node.js"],
    description:
      "Developed a Paytm-like application using the MERN stack.",
    features: ["Responsive design", "Single page application", "Dark mode"],
    challenges: ["Setting up deployment on Vercel", "Optimizing performance"],
    dateCompleted: "2023-07-10",
  },
  {
    name: "Chat-App",
    imgUrl: "/images/projects/chat.jpeg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://real-time-chat-kappa-six.vercel.app/",
    repoUrl: "https://github.com/navneetnavs/real-time-chat.git",
    technologies: ["FireBase", "Socket.io", "Cloud-Firestore"],
    description:
      "Design and Developed a real-time chat application utilizing Firebase, Socket.io and cloud firestore",
    features: [
      "Dynamic content",
      "User-friendly interface",
      "Responsive design",
    ],
    challenges: [
      "Creating a smooth scrolling experience",
      "Handling large media assets",
    ],
    dateCompleted: "2023-08-15",
  },
  {
    name: "Amazon-Clone",
    imgUrl: "/images/projects/amazon.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://amazon-clone-seven-pi.vercel.app/",
    repoUrl: "https://github.com/navneetnavs/AmazonClone.git",
    technologies: ["HTML", "CSS", "JavaScript","React","Firebase","MaterialUI"],
    description:
      "Engineered a full-stack Amazon clone utilizing Firebase, replicating key capabilities of the e-commerce giant.",
    features: ["Firebase’s Firestore", "Firebase Authentication", "Firebase Storage", "Cloud Functions"],
    challenges: [
      "Building responsive layouts",
      "Ensuring cross-browser compatibility",
    ],
    dateCompleted: "2023-05-22",
  },
  {
    name: "Quiz-app",
    imgUrl:
      "/images/projects/quiz.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://typescript-project-six.vercel.app/",
    repoUrl: "https://github.com/navneetnavs/quiz-app.git",
    technologies: ["React", "TypeScript", "CSS"],
    description:
      "A quiz app to demonstrate my React and Typescript skills.",
      features: [], 
    challenges: [],
    dateCompleted: "2023-06-18",
  },
  {
    name: "ImageGallery",
    imgUrl:
      "/images/projects/gallery.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://darkx-dev.github.io/sneakers-frontend/",
    repoUrl: "https://euphonious-piroshki-a28c66.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Application that will assist you in organizing, showcasing, and maintaining your art inventory effortlessly.",
    features: [
      "Image gallery",
      "Add to cart functionality",
      "Responsive design",
    ],
    challenges: [
      "Building an interactive image gallery",
      "Handling dynamic cart interactions",
    ],
    dateCompleted: "2023-04-28",
  },
  {
    name: "AppleVisionPro",
    imgUrl:
      "/images/projects/apple.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl:
      "https://github.com/Darkx-dev/music-player-react-native/releases/tag/1.0.0",
    repoUrl: "https://github.com/Darkx-dev/music-player-react-native",
    technologies: ["GSAP", "Scrolltrigger", "Canvas", "Locomotive JS"],
    description:
      "This project is a homage to Apple's iconic design and user experience, encapsulating the essence of innovation and aesthetics that define Apple's digital presence.",
      features: [], 
    challenges: [],
    dateCompleted: "2023-03-14",
  },
  {
    name: "ModernChair",
    imgUrl:
      "/images/projects/chair.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl:
      "https://navneetnavs.github.io/Modernchair/",
    repoUrl: "https://github.com/navneetnavs/Modernchair.git",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "Modern Chair Project",
      features: [], 
    challenges: [],
    dateCompleted: "2023-03-14",
  },
  {
    name: "RazorpayClone",
    imgUrl:
      "/images/projects/razorpay.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl:
      "https://sweet-ganache-a49061.netlify.app/",
    repoUrl: "https://github.com/navneetnavs/Razorpay_Clone.git",
    technologies: ["HTML", "CSS", "JAVASCRIPT","TAILWIND-CSS"],
    description:
      "Clone of the popular Razorpay payment gateway using HTML, CSS, and Tailwind CSS",
      features: [], 
    challenges: [],
      dateCompleted: "2023-03-14",
  },
  {
    name: "DiscordClone",
    imgUrl:
      "/images/projects/discord.jpg",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl:
      "https://spectacular-yeot-0e6503.netlify.app/",
    repoUrl: "https://github.com/navneetnavs/Discord_clone.git",
    technologies: ["HTML", "CSS", "JAVASCRIPT","TAILWIND-CSS"],
    description:
      "This project is a web-based application that replicates the core features of the popular chat and communication platform, Discord.",
      features: [], 
      challenges: [],
      dateCompleted: "2023-03-14",
  },
  
];

// const projects = [
//   {
//     name: "Paytm App",
//     imgUrl: "/images/projects/paytm.jpg",
//     projectType: "web",
//     status: "completed",
//     liveUrl: "https://money-transfer-app-theta.vercel.app/",
//     repoUrl: "https://github.com/navneetnavs/MoneyTransferApp.git",
//     technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express.js", "Node.js"],
//     description: "Developed a Paytm-like application using the MERN stack.",
//     features: ["Responsive design", "Single page application", "Dark mode"],
//     challenges: ["Setting up deployment on Vercel", "Optimizing performance"],
//     dateCompleted: "2023-07-10",
//   },
//   {
//     name: "Quiz-app",
//     imgUrl: "/images/projects/quiz.jpg",
//     projectType: "web",
//     status: "completed",
//     liveUrl: "https://typescript-project-six.vercel.app/",
//     repoUrl: "https://github.com/navneetnavs/quiz-app.git",
//     technologies: ["React", "TypeScript", "CSS"],
//     description: "A quiz app to demonstrate my React and TypeScript skills.",
//     features: [], 
//     challenges: [], 
//     dateCompleted: "2023-06-18",
//   },
//   {
//     name: "ImageGallery",
//     imgUrl: "/images/projects/gallery.jpg",
//     projectType: "web",
//     status: "completed",
//     liveUrl: "https://darkx-dev.github.io/sneakers-frontend/",
//     repoUrl: "https://euphonious-piroshki-a28c66.netlify.app/",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     description: "Application that will assist you in organizing, showcasing, and maintaining your art inventory effortlessly.",
//     features: ["Image gallery", "Add to cart functionality", "Responsive design"],
//     challenges: ["Building an interactive image gallery", "Handling dynamic cart interactions"],
//     dateCompleted: "2023-04-28",
//   },
//   {
//     name: "AppleVisionPro",
//     imgUrl: "/images/projects/apple.jpg",
//     projectType: "web",
//     status: "completed",
//     liveUrl: "https://github.com/Darkx-dev/music-player-react-native/releases/tag/1.0.0",
//     repoUrl: "https://github.com/Darkx-dev/music-player-react-native",
//     technologies: ["GSAP", "Scrolltrigger", "Canvas", "Locomotive JS"],
//     description: "This project is a homage to Apple's iconic design and user experience.",
//     features: [], // Add an empty array for features
//     challenges: [], // Add an empty array for challenges
//     dateCompleted: "2023-03-14",
//   },
//   // More projects here...
// ];

export { skills, projects };
