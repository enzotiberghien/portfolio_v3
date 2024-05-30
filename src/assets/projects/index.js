import orgonite from './orgonite.png'
import smarthome from './smarthome.jpg'
import movieTracker from './movietracker.png'
import myrmidon from './myrmidon.png'

const projectsList = [
  {
    name: "Orgonite40 e-commerce website",
    img: orgonite,
    desc: "This project is developed for Orgonite Harmony 40, a company based in France dedicated to providing high-quality orgonite products. This project is an an e-commerce platform built with Node.js, Express, React and MongoDB. The application has both backend and frontend components, along with a content management system (Sanity) and payment processing (Stripe). Unfortunately, Orgonite40 is no longer active, the payment functionnality is removed.",
    skills: ['React', 'MongoDB', 'NodeJS', 'Express', 'Tailwind'],
    code: "https://github.com/enzotiberghien/orgonite-shop",
    live: "https://orgonite-shop.vercel.app/"
  },
  {
    name: "Smart Home System",
    img: smarthome,
    desc: "I was part of an 8-developer team that followed Agile methodology to create an automated Arduino-based house system controllable via web and mobile applications, utilizing WebSocket technology for real-time data transmission. My responsibilities included developing the C++ code for house automation, managing the server, and contributing to the web frontend. We maintained comprehensive documentation and artefacts to ensure clarity and consistency throughout the project.",
    skills: ['C++', 'Kotlin', 'React', 'MongoDB', 'NodeJS', 'Express'],
    code: "https://github.com/orgs/Software-Engineering-HKR/repositories",
    live: ""
  },
  {
    name: "Movie Tracker",
    img: movieTracker,
    desc: "The Movie Tracker App is a comprehensive web application that allows users to track and grade their movie collections with ease. Utilizing the TMDB API, the app provides robust search functionality, enabling users to find detailed information on movies. Built with a full-stack approach, the app features a responsive frontend developed in React and Tailwind CSS, while the backend is powered by Express.js and MongoDB. Key functionalities include secure user authentication, personalized movie lists, and the ability to grade movies. This project showcases my proficiency in integrating APIs, handling user authentication, and building dynamic, user-friendly web applications.",
    skills: ['React', 'MongoDB', 'NodeJS', 'Express'],
    code: "https://github.com/enzotiberghien/movie_tracker_app",
    live: "https://movie-tracker-app.onrender.com/movies"
  },
  {
    name: "Myrmidon",
    img: myrmidon,
    desc: "Myrmidon is an intuitive application designed to support mental health by tracking moods and tension levels throughout the day. As part of an agile team of four developers, I helped create four main functions: Mood Tracking, Tension Tracking, Journaling, and Statistics. Users can easily input their mood and tension using slider scales and write detailed journal entries with optional prompts. The app provides visual statistics of mood and tension fluctuations over time. Additional features include a daily positive fact and analysis of repeated words in journal entries. Built with Java and JavaFX, Myrmidon uses a MySQL database for data management",
    skills: ['Java', 'MySQL', 'Docker'],
    code: "https://github.com/enzotiberghien/Myrmidon",
    live: "",
  },
]

export {
  projectsList
}