import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lynn Yang',
  subtitle: 'A Full Stack Developer & Healthcare Professional',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I was once a frontline healthcare worker; now, I am a full-stack developer specializing in front-end and back-end development. I am excited to get behind the desk to create solutions and solve problems for people. My goal is to merge the best of both worlds to help clients and organizations grow.',
  paragraphTwo:
    'While working in the healthcare sector, I understood that good communication and streamlined experiences were the keys to a well-thought-out platform. With my education, the General Assembly, and previous work experiences, I can elevate these features and help contribute to better application development. ',
  paragraphThree:
    'I am experienced with PostgreSQL, MongoDB, NodeJS, React, Django, JavaScript, Python, CSS, HTML and I am currently learning Typescript & Redux.',
  resume: 'https://drive.google.com/file/d/1cTyRVzgUlRm8KJpDsmLqakuqRmQ7WMom/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Paway',
    info: 'MERN stack application designed to help communities to keep track of their lost & found pets.',
    info2: 'Technologies: React, NodeJS, MongoDB, Bootstrap, Material UI, Postman',
    url: 'https://paway.herokuapp.com/',
    repo: 'https://github.com/klynnyang/pet-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Expense-O-Track',
    info: 'Django application designed to help individuals & families to keep track of their finances.',
    info2: 'Technologies: Django, PostgreSQL, JQuery, ChartJS, Nodemailer, AllAuth',
    url: 'https://expense-o-track.herokuapp.com/',
    repo: 'https://github.com/klynnyang/ExpenseTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'BattleShip',
    info: 'Browser based version of the strategy guessing game Battleship (Single player).',
    info2: 'Technologies: Javascript, HTML, CSS, Bootstrap',
    url: 'https://klynnyang.github.io/battleship/',
    repo: 'https://github.com/klynnyang/battleship', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Game Catalog',
    info: 'Express application for posting reviews & games on various platforms.',
    info2: 'Technologies: Express, NodeJS, Bootstrap, OAuth',
    url: 'https://catalog-for-games.herokuapp.com/',
    repo: 'https://github.com/klynnyang/game-catalog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to hear from you! Please click the button below to connect with me!',
  btn: '',
  email: 'lynnyangnc@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kunlin-yang-b1b5171b1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/klynnyang',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
