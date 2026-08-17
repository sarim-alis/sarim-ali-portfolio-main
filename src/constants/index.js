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
  fa,
  swift,
  couve,
  sprintcraft,
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
    company_name: "Couve Stack",
    icon: couve,
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
    names: "Waqas Ahmad",
    designation: "CEO",
    company: "Couve Stack",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sarim does.",
    names: "Muhammad Awais",
    designation: "CEO",
    company: "Code Debuggers",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "After Sarim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    names: "Ahmad Sarwar",
    designation: "CEO",
    company: "FA Tech & Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    names: "Chat Hive",
    description:
      " Developed for real-time messaging. Socket.io is used to enable live communication between client and server. Received positive feedback from users achieving impressive 90 percent satisfaction rate.",
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
    live_link: "https://sarim-chat-apps.onrender.com",
    source_code_link: "https://github.com/sarim-alis/sarim-chat-app",
  },
  {
    names: "Swift Buy",
    description:
      "Ecommerce store used for online shopping with Clerk auth. Dedicated an admin panel to manage the products and orders. Real-time order tracking resulting in 15 percent increase in user engagement.",
    tags: [
      {
        names: "nextjs",
        color: "blue-text-gradient",
      },
      {
        names: "prisma",
        color: "green-text-gradient",
      },
      {
        names: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: swift,
    live_link: "https://swift-buy-gray.vercel.app",
    source_code_link: "https://github.com/sarim-alis/swift-buy",
  },
  {
    names: "Stay Villa",
    description:
      "Property rental platform to browse and book accommodation. Created search and filtering system reducing property discovery time. Implemented NextAuth integration resulting in 40 percent increase in user registration rates.",
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
        names: "nextauth",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_link: "https://stay-villas-zaw5.vercel.app/",
    source_code_link: "https://github.com/sarim-alis/stay-villas",
  },
  {
    names: "Sprint Craft",
    description:
      "AI-powered kanban board for sprint planning. Implemented AI to turn a one-line goal into a prioritized backlog, with task breakdown and sprint summaries. Real-time collaboration via Socket.io and drag-and-drop boards on PostgreSQL.",
    tags: [
      {
        names: "express",
        color: "blue-text-gradient",
      },
      {
        names: "postgresql",
        color: "green-text-gradient",
      },
      {
        names: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: sprintcraft,
    live_link: "https://sprint-craft.vercel.app",
    source_code_link: "https://github.com/sarim-alis/sprint-craft",
    video_link: "https://drive.google.com/file/d/1v51K4hS-sqbA0LwdpL9nMvD_n5Hb_2tp/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
