import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';

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
          <MenuIcon className="h-6 w-6" />
        </div>
        <div className="pr-4 md:block hidden">
          <Link to="/" className="p-4">Home</Link>
          <Link to="/about" className="p-4">About</Link>
        </div>
      </nav>
      <div className={ isOpen ? "relative grid grid-rows-2 text-center items-center bg-gray-800 text-white font-mono" : "hidden" } onClick={toggle}>
        <Link to="/" className="p-4">Home</Link>
        <Link to="/about" className="p-4">About</Link>
      </div>
    </>
  );
}

export default Navbar;
