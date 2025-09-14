import kalbonyanImg from "@/assets/img/portfolio/kalbonyan.webp";
import quranAcademyImg from "@/assets/img/portfolio/quran-academy.webp";
import ecommerceImg from "@/assets/img/portfolio/ecommerce.webp";
import dashReactImg from "@/assets/img/portfolio/dashReact.webp";
import gpt3Img from "@/assets/img/portfolio/gpt3.webp";
import gymImg from "@/assets/img/portfolio/gym.webp";
import crudImg from "@/assets/img/portfolio/crud.webp";
import weatherImg from "@/assets/img/portfolio/weather.webp";
import notesImg from "@/assets/img/portfolio/notes.webp";
import ominoFood from "@/assets/img/portfolio/omino-food.webp";
import chat from "@/assets/img/portfolio/chat.webp";
import coffe from "@/assets/img/portfolio/coffe.webp";
import islamic from "@/assets/img/portfolio/islamic.webp";
import safwa from "@/assets/img/portfolio/safwa.webp";
import quranMemorizerImg from "@/assets/img/portfolio/quran-memorise.webp";

export const projects = [
  {
    id: "safwa-contracting",
    title: "Safwa Construction",
    img: safwa,
    alt: "Safwa Contracting & Construction landing page",
    description:
      "A professional landing page built with Vue for Safwa Contracting & Construction, a Saudi-based company specializing in concrete works and interior/exterior finishing. The site highlights company services, design capabilities, and commitment to quality, cost efficiency, and timely delivery according to international standards.",
    created: "2023",
    technologies: "Vue.js",
    role: "Frontend",
    online: "https://alsafwa-construcion.vercel.app/",
    github: "https://github.com/eng-mohamedSaid/alsafwaConstrucion",
  },
  {
    id: "kalbonyan-elmarsos",
    title: "Kalbonyan Elamrsos",
    img: kalbonyanImg,
    alt: "kalbonyan home page",
    description:
      "Kalbonyan Elmarsos is an Egyptian non-profit organization whose goal is to help students become better developers and be able to deal and succeed with the global labor market and compete in it with strength and efficiency.",
    created: "September 2022",
    technologies: "React",
    role: "Frontend",
    online: "https://www.albonyanalmarsos.org/",
    github: "https://github.com/eng-mohamedSaid/kalbonyanElmarsosWebsite",
  },
  {
    id: "quran-memorizer-listen",
    title: "Quran Memorizer Listen",
    img: quranMemorizerImg,
    alt: "quran memorizer listen home page",
    description:
      "Quran Memorizer Listen is a personal project built with Firebase to help people memorize the Quran while working by playing verses with multiple reciters automatically. In this project, I mainly worked with Firebase console and studio, focusing on setup, configuration, and solving technical problems to make the app work smoothly without writing custom code. This experience helped me understand Firebase deeply, troubleshoot issues, and optimize the workflow.",
    created: "September 2025",
    technologies: "Firebase Studio AI & Next",
    role: "Configuration & Problem Solving for all error and mentor to Firebase Studio",
    online: "https://quran-memorizer-listen.vercel.app/",
    github: "https://github.com/eng-mohamedSaid/quran-memorizer",
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    img: ecommerceImg,
    alt: "ecommerce app image",
    description:
      "This is a full stack project with Sanity and NextJS (by Javascript Mastery on YouTube). With Sanity, you can update any item on the page without coding, only by the website of Sanity you will be able to see every product and you can modify it easily. I use Stripe for payment.",
    created: "24 Oct 2022",
    technologies: "NextJS & Sanity",
    role: "FullStack",
    online: "https://ecommerce-one-chi.vercel.app/",
    github: "https://github.com/eng-mohamedSaid/Ecommerce",
  },

  {
    id: "dashboard-app",
    title: "Dashboard App",
    img: dashReactImg,
    alt: "project of dashReact",
    description:
      "This is a tutorial with ReactJS. It is a complete dashboard which contains pages like customers, employees and apps like calendar and text editor and charts like line, area and Pyramid. I use Tailwind to style all the components and with Syncfusion, it is very simple to make all of these components with only ten lines of code for every component.",
    created: "20 Oct 2022",
    technologies: "ReactJS & Syncfusion & Tailwind",
    role: "Frontend",
    online: "https://eng-mohamedSaid.github.io/DashboardReact",
    github: "https://github.com/eng-mohamedSaid/DashboardReact",
  },
  {
    id: "islamic-education-platform",
    title: "Islamic Education Platform",
    img: islamic,
    alt: "Islamic education lessons and lectures platform",
    description:
      "A comprehensive platform offering Islamic educational content including lessons, lectures, sermons, articles, and live broadcasts. Features detailed course explanations such as 'Explanation of Bulugh al-Maram' and 'Explanation of Simplified Jurisprudence' with multiple lessons and dates.",
    created: "2023",
    technologies: "HTML, CSS, JavaScript",
    role: "Frontend",
    online: "https://islamic-website.vercel.app/",
    github: "https://github.com/eng-mohamedSaid/islamic-website",
  },

  {
    id: "gpt-3",
    title: "GPT-3",
    img: gpt3Img,
    alt: "project of gpt-3",
    description:
      "Fully Responsive Modern UI/UX Website in React JS. It is open source project on Figma.",
    created: "1 Oct 2022",
    technologies: "ReactJS",
    role: "Frontend",
    online: "https://eng-mohamedSaid.github.io/AI-website-React/",
    github: "https://github.com/eng-mohamedSaid/AI-website-React",
  },
  {
    id: "fitness-club",
    title: "Fitness club",
    img: gymImg,
    alt: "project of gym",
    description:
      "This is your club for all exercises. You can search on any exercise. You can open this exercise and see details about it. You will find YouTube videos which you can see to help you doing exercise well.",
    created: "3 Oct 2022",
    technologies: "ReactJs & RapidAPI & MaterialUI",
    role: "Frontend",
    online: "https://eng-mohamedSaid.github.io/GYM_with_React/",
    github: "https://github.com/eng-mohamedSaid/GYM_with_React",
  },
  {
    id: "product-management",
    title: "Product Management",
    img: crudImg,
    alt: "project of crud",
    description:
      "PRODUCT MANAGEMENT SYSTEM: It is a CRUD project with JS. In this app you can use it to store your data like if you have a mobile store: so you can add mobiles by their names or categories. You can create numbers of mobile by count input. You can search by the title or the category. You can delete all, you can delete one of them, you can update one of them.",
    created: "15 Sep 2022",
    technologies: "HTML & CSS & JS",
    role: "Frontend",
    online: "https://eng-mohamedSaid.github.io/CRUDS/",
    github: "https://github.com/eng-mohamedSaid/CRUDS",
  },
  {
    id: "weather-app",
    title: "Weather App",
    img: weatherImg,
    alt: "weather app",
    description:
      "A simple weather app using OpenWeatherMap API. Shows current weather and forecast for any city.",
    created: "August 2022",
    technologies: "VueJS & OpenWeatherMap API",
    role: "Frontend",
    online: "https://your-weather-app-link.com",
    github: "https://github.com/eng-mohamedSaid/weather-app",
  },
  {
    id: "notes-app",
    title: "Notes App",
    img: notesImg,
    alt: "notes app",
    description:
      "A notes taking app with local storage and search functionality.",
    created: "March 2022",
    technologies: "VueJS",
    role: "Frontend",
    online: "https://your-notes-app-link.com",
    github: "https://github.com/eng-mohamedSaid/notes-app",
  },
  {
    id: "omino-food",
    title: "Omino Food",
    img: ominoFood,
    alt: "Omino Food landing page",
    description:
      "Omino Food is a landing page for a restaurant, designed with HTML and CSS to showcase menu items and attract customers.",
    created: "3 Jun 2022",
    technologies: "HTML, CSS",
    role: "Frontend",
    online: "https://ominofood-mosaid.netlify.app/",
    github:
      "https://github.com/eng-mohamedSaid/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood",
  },
  {
    id: "chat-app",
    title: "Chat App",
    img: chat,
    alt: "Chat App project",
    description:
      "A real-time chat application built with Node.js. Users can create or join rooms and chat with friends using the same room name.",
    created: "August 2022",
    technologies: "Node.js",
    role: "Frontend & Backend",
    online: "https://chat-app-mo-saidab.herokuapp.com/",
    github: "https://github.com/eng-mohamedSaid/Chat-app-with-node",
  },

  {
    id: "coffee-website",
    title: "Coffee Website",
    img: coffe,
    alt: "Coffee website landing page",
    description:
      "A beautifully designed landing page for a coffee business showcasing premium hand-roasted coffee beans, services, menu, and best sellers. Built with HTML and CSS focusing on clean design and user experience.",
    created: "2023",
    technologies: "HTML, CSS",
    role: "Frontend",
    online: "https://coffe-shop-one.vercel.app/",
    github: "https://github.com/eng-mohamedSaid/coffe-shop",
  },
];
