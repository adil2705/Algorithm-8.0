import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  one,
  two,
  three,
  four,
  web_development,
  app_development,
  machine_learning,
  blockchain
} from "../assets/images";

export const navLinks = [
  {
    id: "#about",
    title: "About Us",
  },
  {
    id: "/signin",
    title: "Login",
  },
  {
    id: "/register",
    title: "Register",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web_development,
  },
  {
    title: "App Development",
    icon: app_development,
  },
  {
    title: "Machine Learning",
    icon: machine_learning,
  },
  {
    title: "Blockchain Technology",
    icon: blockchain,
  },
];


const experiences = [
  {
    title: "Event Registration",
    icon: one,
    iconBg: "#383E56",
    date: "13th Feb 2024 - 26th Feb 2024",
    points: [
      "Participants have to register themselves and form a team of three members.",
    ],
  },
  {
    title: "Problem statement announcement",
    icon: two,
    iconBg: "#E6DEDD",
    date: "26th Feb 2024",
    points: [
      "Problem statement will be announced and team lead has to select the topic and start working on it.",
    ],
  },
  {
    title: "Team Reporting Day",
    icon: three,
    iconBg: "#383E56",
    date: "1st March 2024",
    points: [
      "Each team has to report to AIKTC's CAMPUS at 9:00 AM IST to 10:00 AM IST.",
    ],
  },
  {
    title: "Winner Announcement",
    icon: four,
    iconBg: "#E6DEDD",
    date: "2nd March 2024",
    points: [
      "Winners will be announced.",
    ],
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const notice = [
  {
    date: "14 Feb 2024",
    id: "Notice 1",
    notice: "Visit this page to get updates about the event.",
  },
  {
    date: "23 Feb 2024",
    id: "Notice 2",
    notice: "Join the Whatsapp Group if you haven't already : https://chat.whatsapp.com/C47SLZvd6x8HBcw6suTdXp.",
  },
  ,
  {
    date: "25 Feb 2024",
    id: "Notice 3",
    notice: "Problem statement to be announced on Monday (26th Feb 2024).",
  }
];

export { services, experiences };
