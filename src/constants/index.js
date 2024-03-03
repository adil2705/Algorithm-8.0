import {
  black_out,
  manha_foundation,
  sister_bakeworld,
  standee,
  one,
  two,
  three,
  four,
  machine_learning,
  development,
  open_source,
  vr
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
    title: "Software Development",
    icon: development,
  },
  {
    title: "Open Source",
    icon: open_source,
  },
  {
    title: "Artificial Intelligence",
    icon: machine_learning,
  },
  {
    title: "Virtual Reality",
    icon: vr,
  },
];

const experiences = [
  {
    title: "Event Registration",
    icon: one,
    iconBg: "#383E56",
    date: "20th Feb 2024 - 26th Feb 2024",
    points: [
      "Participants have to register themselves and form a team of three members.",
    ],
  },
  {
    title: "Problem Statement Announced",
    icon: two,
    iconBg: "#E6DEDD",
    date: "26th Feb 2024",
    points: [
      "Problem statement has been announced and the team lead has to select the topic and start working on it.",
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
    logo: black_out,
  },
  {
    id: "client-2",
    logo: standee,
  },
  {
    id: "client-3",
    logo: manha_foundation,
  },
  {
    id: "client-4",
    logo: sister_bakeworld,
  },
];

const notice = [
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
  {
    date: "25 Feb 2024",
    id: "Notice 3",
    notice: "Problem statement to be announced on Monday (26th Feb 2024).",
  },
  {
    date: "27 Feb 2024",
    id: "Notice 4",
    notice: "Quiz to be conducted on 28th Feb 2024 7PM onwards.",
  }
];

const timeline = [
  {
    event: 'Registration',
  },
  {
    event: 'Quiz',
  },
  {
    event: 'Selection',
  },
  {
    event: 'Selected',
  }
];

export { services, experiences, notice, timeline };
