import React from 'react';

import { ReactComponent as LogoCSS } from '../../resources/logos-css.svg';
import { ReactComponent as LogoHTML } from '../../resources/logos-html.svg';
import { ReactComponent as LogoJS } from '../../resources/logos-javascript.svg';
import { ReactComponent as LogoReact } from '../../resources/logos-react.svg';
import { ReactComponent as LogoNodeJs } from '../../resources/logos-nodejs.svg';
import { ReactComponent as LogoTS } from '../../resources/logos-typescript.svg';
import { ReactComponent as LogoGithub } from '../../resources/logos-github.svg';
import { ReactComponent as LogoSass } from '../../resources/logos-node-sass.svg';
import { ReactComponent as LogoSass2 } from '../../resources/logos-sass.svg';
import { ReactComponent as LogoTailwind } from '../../resources/logos-tailwindcss.svg';
import { ReactComponent as LogoPostman } from '../../resources/logos-postman.svg';
import { ReactComponent as LogoFigma } from '../../resources/logos-figma.svg';

import { ReactComponent as LogoMongo } from '../../resources/logos-mongo.svg';
import { ReactComponent as LogoDocker } from '../../resources/logos-docker.svg';
import { ReactComponent as LogoNextJs } from '../../resources/logos-nextjs.svg';
import { ReactComponent as LogoPrisma } from '../../resources/logos-prisma.svg';
import { ReactComponent as LogoThreeJs } from '../../resources/logos-threejs.svg';

const MyTechs = () => {
  return (
    <div className="flex flex-col items-center justify-around min-w-full min-h-full p-10 text-xl bg-white/30 backdrop-filter backdrop-blur-lg font-playfair rounded-3xl">
      <h3 className="self-start text-2xl font-roboto">My Skills</h3>
      <ul className="flex flex-wrap justify-center">
        <li>
          <LogoCSS className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoHTML className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoJS className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoReact className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoNodeJs className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoTS className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoGithub className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoSass className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoSass2 className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoTailwind className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoPostman className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoFigma className="w-16 h-16 m-7" />
        </li>
      </ul>
      <h4>Soon ...</h4>
      <ul className="flex flex-wrap justify-center">
        <li>
          <LogoMongo className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoDocker className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoNextJs className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoPrisma className="w-16 h-16 m-7" />
        </li>
        <li>
          <LogoThreeJs className="w-16 h-16 m-7" />
        </li>
      </ul>
    </div>
  );
};

export default MyTechs;
