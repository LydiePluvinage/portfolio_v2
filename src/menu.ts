import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import MyTechs from './components/MyTechs';
import RightNow from './components/RightNow';

type Menu = {
  path: string;
  title: string;
  Component: React.ComponentType;
};

const menuList: Menu[] = [
  {
    path: '/',
    title: 'About Me',
    Component: AboutMe,
  },
  {
    path: '/now',
    title: 'Right Now',
    Component: RightNow,
  },
  {
    path: '/techs',
    title: 'My Techs',
    Component: MyTechs,
  },
  {
    path: '/contact',
    title: 'Contact',
    Component: Contact,
  },
];

export default menuList;
