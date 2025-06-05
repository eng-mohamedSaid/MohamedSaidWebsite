// src/data/projects.js
import kalbonyanImg from '@/assets/img/portfolio/kalbonyan.jpg';
import quranAcademyImg from '@/assets/img/portfolio/quran-academy.jpg';
import ecommerceImg from '@/assets/img/portfolio/ecommerce.jpg';
import dashReactImg from '@/assets/img/portfolio/dashReact.jpg';
import gpt3Img from '@/assets/img/portfolio/gpt3.jpg';
import gymImg from '@/assets/img/portfolio/gym.jpg';
import crudImg from '@/assets/img/portfolio/crud.jpg';
import weatherImg from '@/assets/img/portfolio/weather.jpg';
import notesImg from '@/assets/img/portfolio/notes.jpg';
// import todoImg from '@/assets/img/portfolio/todo.jpg';
// import blogImg from '@/assets/img/portfolio/blog.jpg';
// import portfolioV1Img from '@/assets/img/portfolio/portfolio-v1.jpg';
// import calculatorImg from '@/assets/img/portfolio/calculator.jpg';
// import expenseImg from '@/assets/img/portfolio/expense.jpg';
// import landingImg from '@/assets/img/portfolio/landing.jpg';
export const projects = [
  {
    id: "kalbonyan-elmarsos",
    title: "Kalbonyan Elamrsos",
    img: kalbonyanImg,
    alt: "kalbonyan home page",
    description: "Kalbonyan Elmarsos is an Egyptian non-profit organization whose goal is to help students become better developers and be able to deal and succeed with the global labor market and compete in it with strength and efficiency.",
    created: "September 2022",
    technologies: "React",
    role: "Frontend",
    online: "https://www.albonyanalmarsos.org/",
    github: "https://github.com/m2001said/kalbonyanElmarsosWebsite"
  },
  {
    id: "quran-academy",
    title: "Quran academy",
    img: quranAcademyImg,
    alt: "quran academy home page",
    description: "Waratell alquran tarteela Academy, It is an academy for quran, teaching people how to read quran well. Client need a simple landing page without form and consists of only one page. I choose all the colors and design all the images with illustrator and after accepting the design, I started to code it with HTML, CSS and Js.",
    created: "December 2022",
    technologies: "HTML & CSS & JS",
    role: "Frontend",
    online: "https://waratell-academy.vercel.app/",
    github: "https://github.com/m2001said/quran-academy"
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    img: ecommerceImg,
    alt: "ecommerce app image",
    description: "This is a full stack project with Sanity and NextJS (by Javascript Mastery on YouTube). With Sanity, you can update any item on the page without coding, only by the website of Sanity you will be able to see every product and you can modify it easily. I use Stripe for payment.",
    created: "24 Oct 2022",
    technologies: "NextJS & Sanity",
    role: "FullStack",
    online: "https://ecommerce-one-chi.vercel.app/",
    github: "https://github.com/m2001said/Ecommerce"
  },
  {
    id: "dashboard-app",
    title: "Dashboard App",
    img: dashReactImg,
    alt: "project of dashReact",
    description: "This is a tutorial with ReactJS. It is a complete dashboard which contains pages like customers, employees and apps like calendar and text editor and charts like line, area and Pyramid. I use Tailwind to style all the components and with Syncfusion, it is very simple to make all of these components with only ten lines of code for every component.",
    created: "20 Oct 2022",
    technologies: "ReactJS & Syncfusion & Tailwind",
    role: "Frontend",
    online: "https://m2001said.github.io/DashboardReact",
    github: "https://github.com/m2001said/DashboardReact"
  },
  {
    id: "gpt-3",
    title: "GPT-3",
    img: gpt3Img,
    alt: "project of gpt-3",
    description: "Fully Responsive Modern UI/UX Website in React JS. It is open source project on Figma.",
    created: "1 Oct 2022",
    technologies: "ReactJS",
    role: "Frontend",
    online: "https://m2001said.github.io/AI-website-React/",
    github: "https://github.com/m2001said/AI-website-React"
  },
  {
    id: "fitness-club",
    title: "Fitness club",
    img: gymImg,
    alt: "project of gym",
    description: "This is your club for all exercises. You can search on any exercise. You can open this exercise and see details about it. You will find YouTube videos which you can see to help you doing exercise well.",
    created: "3 Oct 2022",
    technologies: "ReactJs & RapidAPI & MaterialUI",
    role: "Frontend",
    online: "https://m2001said.github.io/GYM_with_React/",
    github: "https://github.com/m2001said/GYM_with_React"
  },
  {
    id: "product-management",
    title: "Product Management",
    img: crudImg,
    alt: "project of crud",
    description: "PRODUCT MANAGEMENT SYSTEM: It is a CRUD project with JS. In this app you can use it to store your data like if you have a mobile store: so you can add mobiles by their names or categories. You can create numbers of mobile by count input. You can search by the title or the category. You can delete all, you can delete one of them, you can update one of them.",
    created: "15 Sep 2022",
    technologies: "HTML & CSS & JS",
    role: "Frontend",
    online: "https://m2001said.github.io/CRUDS/",
    github: "https://github.com/m2001said/CRUDS"
  },
  {
    id: "weather-app",
    title: "Weather App",
    img: weatherImg,
    alt: "weather app",
    description: "A simple weather app using OpenWeatherMap API. Shows current weather and forecast for any city.",
    created: "August 2022",
    technologies: "VueJS & OpenWeatherMap API",
    role: "Frontend",
    online: "https://your-weather-app-link.com",
    github: "https://github.com/m2001said/weather-app"
  },
  {
    id: "notes-app",
    title: "Notes App",
    img: notesImg,
    alt: "notes app",
    description: "A notes taking app with local storage and search functionality.",
    created: "March 2022",
    technologies: "VueJS",
    role: "Frontend",
    online: "https://your-notes-app-link.com",
    github: "https://github.com/m2001said/notes-app"
  }
  // Uncomment and add IDs if you want to use these projects later:
  // {
  //   id: "todo-list",
  //   title: "Todo List",
  //   img: todoImg,
  //   alt: "todo list app",
  //   description: "A productivity app to manage your daily tasks with local storage support.",
  //   created: "July 2022",
  //   technologies: "ReactJS",
  //   role: "Frontend",
  //   online: "https://your-todo-list-link.com",
  //   github: "https://github.com/m2001said/todo-list"
  // },
  // {
  //   id: "blog-platform",
  //   title: "Blog Platform",
  //   img: blogImg,
  //   alt: "blog platform",
  //   description: "A full-featured blogging platform with markdown support, authentication, and comments.",
  //   created: "June 2022",
  //   technologies: "NextJS & MongoDB",
  //   role: "FullStack",
  //   online: "https://your-blog-platform-link.com",
  //   github: "https://github.com/m2001said/blog-platform"
  // },
  // {
  //   id: "portfolio-v1",
  //   title: "Portfolio V1",
  //   img: portfolioV1Img,
  //   alt: "portfolio v1",
  //   description: "My first personal portfolio website, built with HTML, CSS, and a touch of JavaScript.",
  //   created: "May 2022",
  //   technologies: "HTML & CSS & JS",
  //   role: "Frontend",
  //   online: "https://your-portfolio-v1-link.com",
  //   github: "https://github.com/m2001said/portfolio-v1"
  // },
  // {
  //   id: "calculator",
  //   title: "Calculator",
  //   img: calculatorImg,
  //   alt: "calculator app",
  //   description: "A simple calculator app with basic arithmetic operations and a clean UI.",
  //   created: "April 2022",
  //   technologies: "JavaScript",
  //   role: "Frontend",
  //   online: "https://your-calculator-link.com",
  //   github: "https://github.com/m2001said/calculator"
  // },
  // {
  //   id: "expense-tracker",
  //   title: "Expense Tracker",
  //   img: expenseImg,
  //   alt: "expense tracker",
  //   description: "Track your daily expenses and visualize them with charts.",
  //   created: "February 2022",
  //   technologies: "ReactJS & ChartJS",
  //   role: "Frontend",
  //   online: "https://your-expense-tracker-link.com",
  //   github: "https://github.com/m2001said/expense-tracker"
  // },
  // {
  //   id: "landing-page",
  //   title: "Landing Page",
  //   img: landingImg,
  //   alt: "landing page",
  //   description: "A modern responsive landing page template for startups.",
  //   created: "January 2022",
  //   technologies: "HTML & CSS",
  //   role: "Frontend",
  //   online: "https://your-landing-page-link.com",
  //   github: "https://github.com/m2001said/landing-page"
  // }
];
