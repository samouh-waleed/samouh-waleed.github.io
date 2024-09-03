import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  const projects = [
    {
      title: 'Fake News Spread Analysis',
      images: ['fk1.PNG', 'fk2.PNG', 'fk3.PNG', 'fk4.PNG', 'fk5.PNG'],
      githubLink: 'https://github.com/MalikSamouh/Fake-News-Network-Analysis'
    },
    {
      title: 'E-Cars',
      images: ['ecars-1.PNG', 'ecars-2.PNG', 'ecars-3.PNG', 'ecars-4.PNG'],
      githubLink: 'https://github.com/Ali-Adam7/E-Cars'
    },
    {
      title: 'WareHouse',
      images: ['ware-1.PNG', 'ware-2.PNG', 'ware-3.PNG'],
      githubLink: 'https://github.com/samouh-waleed/ware-house'
    },
    {
      title: 'Hospital System',
      images: ['hospital-1.PNG', 'hospital-2.PNG'],
      githubLink: 'https://github.com/samouh-waleed/Hospital-System'
    },
    {
      title: 'Simon Game',
      images: ['simon-1.PNG', 'simon-2.PNG', 'simon-3.PNG'],
      githubLink: 'https://github.com/samouh-waleed/Simon-Game'
    },
    {
      title: 'Drum Kit Game',
      images: ['drum-1.PNG'],
      githubLink: 'https://github.com/samouh-waleed/Drum-Kit-Game'
    }
  ];

  return (
    <div className="col p-4">
      <div className="p-4 slide-in-top">
        <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
        <hr />
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 text-center my-2">
              <div id={`carousel${index}`} className="carousel slide my-1" data-bs-ride="false" data-bs-interval="false">
                <div className="carousel-inner">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}>
                      <div className="project-image-container">
                        <img
                          src={`/project-images/${img}`}
                          className="d-block w-100 h-100 project-image"
                          alt={`${project.title} ${imgIndex + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {project.images.length > 1 && (
                  <>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                      <GrPrevious className="bold-arrow" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                      <GrNext className="bold-arrow" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </>
                )}
              </div>
              <h5 className="ff-jose my-1">{project.title}</h5>
              <div className="row d-flex justify-content-center">
                <a href={project.githubLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyWork;