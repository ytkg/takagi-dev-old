import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/" className="pl-8">takagi.dev</Link>
        <div className="px-8 cursor-pointer md:hidden" onClick={toggle}>
          <Bars3Icon className="h-6 w-6" />
        </div>
        <div className="pr-4 md:block hidden">
          <Link to="/" className="p-4">Home</Link>
          <Link to="/about" className="p-4">About</Link>
          <Link to="/portfolio" className="p-4">Portfolio</Link>
        </div>
      </nav>
      <div className={ isOpen ? "relative grid grid-rows-2 text-center items-center bg-gray-800 text-white font-mono" : "hidden" } onClick={toggle}>
        <Link to="/" className="p-4">Home</Link>
        <Link to="/about" className="p-4">About</Link>
        <Link to="/portfolio" className="p-4">Portfolio</Link>
      </div>
    </>
  );
}

export default Navbar;
