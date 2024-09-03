import { Fragment } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { BsCode } from 'react-icons/bs';
import { MdOutlineDashboard, MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList } from 'react-icons/ai';
import { Link } from "react-scroll";

function Topbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">Waleed</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="home" className="nav-link" smooth={true} duration={300}><VscHome className='fs-5' /> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link" smooth={true} duration={300}><FiUser className='fs-5' /> About</Link>
              </li>
              <li className="nav-item">
                <Link to="skills" className="nav-link" smooth={true} duration={300}><BsCode className='fs-5' /> Skills</Link>
              </li>
              <li className="nav-item">
                <Link to="experience" className="nav-link" smooth={true} duration={300}><MdOutlineDashboard className='fs-5' /> Experience</Link>
              </li>
              <li className="nav-item">
                <Link to="mywork" className="nav-link" smooth={true} duration={300}><MdOutlineDashboard className='fs-5' /> My Work</Link>
              </li>
              <li className="nav-item">
                <Link to="resume" className="nav-link" smooth={true} duration={300}><AiOutlineUnorderedList className='fs-5' /> Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="contactme" className="nav-link" smooth={true} duration={300}><MdEmail className='fs-5' /> Contact Me</Link>
              </li>
            </ul>
            <div className="d-flex">
              <a href="https://www.linkedin.com/in/waleed-samouh/" target="_blank" rel="noopener noreferrer" className="nav-link text-white"><AiFillLinkedin className='fs-5' /> LinkedIn</a>
              <a href="https://github.com/samouh-waleed" target="_blank" rel="noopener noreferrer" className="nav-link text-white"><AiFillGithub className='fs-5' /> Github</a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Topbar;