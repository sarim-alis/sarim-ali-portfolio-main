import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  expressjs,
  nodejs,
  mongodb,
  jobit,
  tripguide,
  chatapp,
  lab,
  codedb,
  fa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Code Debuggers",
    icon: codedb,
    iconBg: "white",
    date: "May 2023 - June 2024 ",
    points: [
      "Developed 10+ dynamic projects utilizing React.",
      "Developed test suites which reduced deployment errors by 40 percent.",
      "Used Redux leading to 25 percent improvement in application performance.",
      "Implemented responsive design resulting in 30% increase in user retention.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Fa Tech & Solutions",
    icon: fa,
    iconBg: "white",
    date: "July 2024 - Sep 2024",
    points: [
      "Successfully completed over 3 full stack projects.",
      "Completed deployment of applications leading to 30% increase in efficiency.",
      "Integrated MongoDB resulting in 15 percent improvement in application performance.",
      "Maintained robust backend APIs, cutting post-deployment bugs by 30%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Andropplelab",
    icon: lab,
    iconBg: "white",
    date: "Oct 2024 - Present",
    points: [
      "Delivered more than 5 full stack projects.",
      "Optimized performance by reducing load times by up to 20%.",
      "Implemented responsive design resulting in 30 percent increase in user engagement.",
      "Streamlined PostgreSQL with prisma increasing backend performance by 25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sarim proved me wrong.",
    names: "Maryam Ahmad",
    designation: "Instructor",
    company: "Corvit",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sarim does.",
    names: "Muhammad Awais",
    designation: "CEO",
    company: "Code Debuggers",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sarim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    names: "Iqra Khalid",
    designation: "Trainer",
    company: "Tecnsol",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    names: "Chat App",
    description:
      " Developed for real-time messaging. Implements user authentication with JWT. Socket.io is employed to enable live communication between clients and the server.",
    tags: [
      {
        names: "react",
        color: "blue-text-gradient",
      },
      {
        names: "mongodb",
        color: "green-text-gradient",
      },
      {
        names: "express",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    live_link: "https://sarim-chat-app.onrender.com",
    source_code_link: "https://github.com/sarimuchihaa/sarim-chat-app",
  },
  {
    names: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        names: "react",
        color: "blue-text-gradient",
      },
      {
        names: "restapi",
        color: "green-text-gradient",
      },
      {
        names: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    live_link: "https://sarim-chat-app.onrender.com",
    source_code_link: "https://github.com/",
  },
  {
    names: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        names: "nextjs",
        color: "blue-text-gradient",
      },
      {
        names: "supabase",
        color: "green-text-gradient",
      },
      {
        names: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_link: "https://sarim-chat-app.onrender.com",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
