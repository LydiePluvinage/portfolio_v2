import React from 'react';

import { NavLink } from 'react-router-dom';
import menuList from '../menu';

const NavBar = () => {
  const className: string = `relative after:content-[''] after:absolute transform transition after:-translate-x-2/4 after:left-2/4 after:bg-white after:rounded-sm after:h-1 after:w-0 after:flex`;
  const activeClassName: string = `${className} after:w-full`;
  const inactiveClassName: string = `${className} after:duration-500 after:hover:w-full after:w-0`;

  return (
    <div className="w-full h-full text-lg bg-white/30 backdrop-filter backdrop-blur-lg font-roboto rounded-3xl">
      <div className="flex flex-col items-center justify-around h-full pt-10 pb-10">
        {menuList &&
          menuList.map((menu, index) => (
            <NavLink
              end
              key={index}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }>
              {menu.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
