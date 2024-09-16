import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Company Icon */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">Binary Bosses</span>
      </div>

      {/* GitHub Repo Link */}
      <div>
        <a
          href="https://github.com/lomash-choudhary/Hackathon-Project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          GitHub Repo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
