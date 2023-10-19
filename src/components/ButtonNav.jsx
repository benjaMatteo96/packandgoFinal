import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNav = ({ to, title }) => {
  return (
    <Link to={to} className=' text-grey-400 bg-grey-200 p-1 w-24 rounded-md font-semibold text-2xl w md:text-lg'>
      {title}
    </Link>
 );
};

export default ButtonNav;
