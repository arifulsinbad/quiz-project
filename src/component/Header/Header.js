import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
 return (
<div className='header'>
<div className='flex'>
   <h3>Programming Quiz</h3>
<div>
<Link to = '/'>Home</Link>
   <Link to ='/chart'>Chart</Link>
   <Link to = '/blog'>Blog</Link>
</div>
  </div>
</div>
 );
};

export default Header;