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
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Fullstack Developer with 2 years of experience working with e-commerce companies',
  paragraphTwo: 'Specializes in using Javascript, NodeJs, Terraform, Infra as a code and AWS',
  paragraphThree: 'Part-time Yoga Instructor specializing in Vinyasa flow',
  resume: 'https://www.linkedin.com/in/milen-k-294415190', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/milenoss', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'milenkhanal@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/home?lang=en-gb',
    },
    {
      id: nanoid(),
      name: 'codewars',
      url: 'https://www.codewars.com/users/milenoss',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/milen-k-294415190',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/milenoss',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
