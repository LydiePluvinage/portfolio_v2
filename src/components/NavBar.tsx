import React from 'react';

const NavBar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white opacity-50 rounded-3xl">
      <ul>
        <li className="pb-5">About me</li>
        <li className="pb-5">Right now</li>
        <li className="pb-5">My Techs</li>
        <li className="pb-5">Contact me</li>
      </ul>
    </div>
  );
};

export default NavBar;
