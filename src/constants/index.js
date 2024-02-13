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
    title: "Web Develoment",
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
    // date: "13th Feb 2024 - 20th Feb 2024",
    points: [
      "Participants have to register themselves and form a team of 3 members.",
    ],
  },
  {
    title: "Problem statement announcement",
    icon: two,
    iconBg: "#E6DEDD",
    // date: "1st March 2024",
    points: [
      "Problem statements will be announced and team lead has to select the topic and start working on it.",
    ],
  },
  {
    title: "Team Reporting Day",
    icon: three,
    iconBg: "#383E56",
    // date: "1rd March 2024",
    points: [
      "Each team has to report to AIKTC CAMPUS at 9:00 AM IST to 10:00 AM IST.",
    ],
  },
  {
    title: "Winner Announcement",
    icon: four,
    iconBg: "#E6DEDD",
    // date: "2nd March 2024",
    points: [
      "Winner will be announced.",
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
    date: "14 feb 2024",
    id: "NOTICE 1",
    notice: "Registration will be going to start soon please visit this page for upcoming Notice"
  }
];

export { services, experiences };
