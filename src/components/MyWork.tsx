'use client'

import { GrPrevious, GrNext } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  title: string;
  images: string[];
  githubLink: string;
}

const MyWork = () => {
  const projects: Project[] = [
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

  // State to keep track of current image for each project
  const [currentImage, setCurrentImage] = useState<Record<number, number>>({});

  useEffect(() => {
    const initialState: Record<number, number> = {};
    projects.forEach((_, index) => {
      initialState[index] = 0;
    });
    setCurrentImage(initialState);
  }, []);

  const handlePrevious = (projectIndex: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 ? 
        projects[projectIndex].images.length - 1 : 
        prev[projectIndex] - 1
    }));
  };

  const handleNext = (projectIndex: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }));
  };

  return (
    <div className="p-8 md:p-16">
      <div className="animate-slide-in-top">
        <h2 className="font-jost font-bold tracking-wider text-2xl md:text-3xl">Something I've Built</h2>
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 md:h-56 bg-gray-100 mb-4 overflow-hidden rounded">
                {Object.keys(currentImage).length > 0 && (
                  <div className="relative w-full h-full">
                    <Image
                      src={`/project-images/${project.images[currentImage[index] || 0]}`}
                      alt={`${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      priority={index < 3}
                    />
                    
                    {project.images.length > 1 && (
                      <>
                        <button 
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                          onClick={() => handlePrevious(index)}
                          aria-label="Previous image"
                        >
                          <GrPrevious className="text-red-accent text-xl" />
                        </button>
                        <button 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                          onClick={() => handleNext(index)}
                          aria-label="Next image"
                        >
                          <GrNext className="text-red-accent text-xl" />
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              <h5 className="font-jost text-lg my-2">{project.title}</h5>
              <div className="flex justify-center">
                <a 
                  href={project.githubLink} 
                  className="flex items-center bg-navy-blue hover:bg-red-accent transition-colors duration-300 text-white py-1 px-3 rounded"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="mr-1" /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;