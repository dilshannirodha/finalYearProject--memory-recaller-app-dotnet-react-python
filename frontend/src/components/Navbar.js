import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen bg-blue-700 text-white p-4 fixed left-0 top-0 w-64">
     
      <h2 className="text-2xl font-bold mb-6 text-center">
        MemoryTest
      </h2>

    
      <ul className="flex-grow space-y-2">
        <li >
          <Link
            to="/"
            className="block p-2 rounded hover:bg-blue-400  transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/ask-ai"
            className="block p-2 rounded hover:bg-blue-400  transition duration-300"
          >
            Ask AI
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="block p-2 rounded hover:bg-blue-400  transition duration-300"
          >
            Statistics
          </Link>
        </li>
      </ul>

      <div className="mt-auto">
        <Link
          to="/logout"
          className="block p-2 rounded  hover:bg-blue-400 transition duration-300"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
