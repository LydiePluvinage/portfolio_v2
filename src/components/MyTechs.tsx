import React from 'react';

import Logo from './Logo';

const techList = [
  { name: 'CSS', icon: 'logos-css', known: true },
  { name: 'HTML', icon: 'logos-html', known: true },
  { name: 'Javascript', icon: 'logos-javascript', known: true },
  { name: 'React', icon: 'logos-react', known: true },
  { name: 'NodeJs', icon: 'logos-nodejs', known: true },
  { name: 'TS', icon: 'logos-typescript', known: true },
  { name: 'Github', icon: 'logos-github', known: true },
  { name: 'Sass', icon: 'logos-sass', known: true },
  { name: 'Tailwind', icon: 'logos-tailwind', known: true },
  { name: 'Postman', icon: 'logos-postman', known: true },
  { name: 'Figma', icon: 'logos-figma', known: true },
  { name: 'mysql', icon: 'logos-mysql', known: true },
  { name: 'MongoDB', icon: 'logos-mongo', known: false },
  { name: 'NextJs', icon: 'logos-nextjs', known: false },
  { name: 'Prisma', icon: 'logos-prisma', known: false },
  { name: 'ThreeJs', icon: 'logos-threejs', known: false },
];

const MyTechs = () => {
  return (
    <div className="flex flex-col items-center justify-around min-w-full min-h-full p-10 text-xl bg-white/30 backdrop-filter backdrop-blur-lg font-playfair rounded-3xl">
      <h3 className="self-start text-2xl font-roboto">My Skills</h3>
      <ul className="flex flex-wrap justify-center">
        {techList
          .filter((tech) => tech.known)
          .map((tech, index) => (
            <li key={index}>
              <Logo style="w-16 h-16 m-7" name={tech.name} icon={tech.icon} />
            </li>
          ))}
      </ul>
      <h4>Soon ...</h4>
      <ul className="flex flex-wrap justify-center">
        {techList
          .filter((tech) => !tech.known)
          .map((tech, index) => (
            <li key={index}>
              <Logo style="w-16 h-16 m-7" name={tech.name} icon={tech.icon} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyTechs;
