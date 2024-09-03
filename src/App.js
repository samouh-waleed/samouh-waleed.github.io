import './App.css';
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Experience from './components/Experience';
import MyWork from './components/MyWork';
import { Element } from 'react-scroll';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="app-container container-fluid">
      <Topbar />
      <div className="row flex-nowrap">
        <div className="col">
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="mywork">
            <MyWork />
          </Element>
          <Element name="resume">
            <Resume />
          </Element>
          <Element name="contactme">
            <ContactMe />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
