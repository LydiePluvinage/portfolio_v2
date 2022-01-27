import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';

import Avatar from './components/Avatar';
import NavBar from './components/NavBar';
import menuList from './menu';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-20 bg-cover bg-main">
      <div className="grid items-center justify-center min-w-full min-h-full grid-cols-3 grid-rows-3 gap-10">
        <div className="w-full h-full row-start-1 border-2 border-white rounded-full">
          <Avatar />
        </div>
        <BrowserRouter>
          <div className="w-full h-full row-span-2 row-start-2 border-2 border-white rounded-3xl">
            <NavBar />
          </div>
          <div className="w-full h-full col-span-2 col-start-2 row-span-3 row-start-1 border-2 border-white rounded-3xl">
            {/* <CSSTransition classNames="transition ease-in duration-500" timeout={300}> */}
            <Routes>
              {menuList.map(({ path, Component }, index) => (
                <Route path={path} key={index} element={<Component />} />
              ))}
            </Routes>
            {/* </CSSTransition> */}
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
