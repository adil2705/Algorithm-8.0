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
    date: "13th Feb 2024 - 20th Feb 2024",
    points: [
      "Participants have to register themselves and form a team of 4 members.",
    ],
  },
  {
    title: "Problem statement announcement",
    icon: two,
    iconBg: "#E6DEDD",
    date: "1st March 2024",
    points: [
      "Problem statements will be announce and team leader has to select on topic and start work on it.",
    ],
  },
  {
    title: "Team Reporting Day",
    icon: three,
    iconBg: "#383E56",
    date: "3rd March 2024",
    points: [
      "Each team has to report to AIKTC CAMPUS at 9:00 AM IST to 10:00 AM IST.",
    ],
  },
  {
    title: "Winner Announcement",
    icon: four,
    iconBg: "#E6DEDD",
    date: "4th March 2024",
    points: [
      "Winner will be announce.",
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
    date: "08 feb 2024",
    id: "NOTICE 1",
    notice: "Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër."
  }
];

export { services, experiences };
