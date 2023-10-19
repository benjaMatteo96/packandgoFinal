import React from 'react';
import Display from '../components/Display.jsx';

const DrawerMenu = ({ isOpen }) => {
  return (
    <div className={`bg-slate-200 rounded-tr-none md:rounded-r-full bg-opacity-90 md:bg-opacity-70 w-full h-2/3 md:w-72 absolute top-18 left-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col w-full justify-center items-center'>
          <Display />
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;

