'use client'

import { useState } from 'react'
import { VscHome } from 'react-icons/vsc'
import { FiUser } from 'react-icons/fi'
import { BsCode } from 'react-icons/bs'
import { MdOutlineDashboard, MdEmail } from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-darker-blue text-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a className="text-xl font-bold">Waleed</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path 
                    fillRule="evenodd" 
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <ul className="flex space-x-6">
                <li>
                  <Link to="home" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <VscHome className="text-xl mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="about" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <FiUser className="text-xl mr-1" /> About
                  </Link>
                </li>
                <li>
                  <Link to="skills" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <BsCode className="text-xl mr-1" /> Skills
                  </Link>
                </li>
                <li>
                  <Link to="experience" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <MdOutlineDashboard className="text-xl mr-1" /> Experience
                  </Link>
                </li>
                <li>
                  <Link to="mywork" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <MdOutlineDashboard className="text-xl mr-1" /> My Work
                  </Link>
                </li>
                <li>
                  <Link to="resume" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <AiOutlineUnorderedList className="text-xl mr-1" /> Resume
                  </Link>
                </li>
                <li>
                  <Link to="contactme" className="flex items-center hover:text-red-accent cursor-pointer text-lg" smooth={true} duration={300}>
                    <MdEmail className="text-xl mr-1" /> Contact Me
                  </Link>
                </li>
              </ul>
              
              <div className="flex space-x-4 ml-6">
                <a 
                  href="https://www.linkedin.com/in/waleed-samouh/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-red-accent text-lg"
                >
                  <AiFillLinkedin className="text-xl mr-1" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/samouh-waleed" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-red-accent text-lg"
                >
                  <AiFillGithub className="text-xl mr-1" /> Github
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-darker-blue pb-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    to="home" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <VscHome className="text-xl mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="about" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="text-xl mr-1" /> About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="skills" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <BsCode className="text-xl mr-1" /> Skills
                  </Link>
                </li>
                <li>
                  <Link 
                    to="experience" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdOutlineDashboard className="text-xl mr-1" /> Experience
                  </Link>
                </li>
                <li>
                  <Link 
                    to="mywork" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdOutlineDashboard className="text-xl mr-1" /> My Work
                  </Link>
                </li>
                <li>
                  <Link 
                    to="resume" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <AiOutlineUnorderedList className="text-xl mr-1" /> Resume
                  </Link>
                </li>
                <li>
                  <Link 
                    to="contactme" 
                    className="flex items-center hover:text-red-accent" 
                    smooth={true} 
                    duration={300}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdEmail className="text-xl mr-1" /> Contact Me
                  </Link>
                </li>
              </ul>
              
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/waleed-samouh/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-red-accent"
                >
                  <AiFillLinkedin className="text-xl mr-1" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/samouh-waleed" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-red-accent"
                >
                  <AiFillGithub className="text-xl mr-1" /> Github
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Add padding to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}

export default Topbar