'use client'

import Image from 'next/image'
import { SiJavascript, SiMicrosoftsqlserver, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiExpress, SiPython, SiAmazonaws, SiPowerbi, SiDocker, SiMongodb, SiNeo4J, SiTensorflow, SiPandas, SiScikitlearn } from 'react-icons/si'
import { MdOutlineApi } from 'react-icons/md'
import { FaJava, FaGitAlt } from 'react-icons/fa'
import { ReactNode } from 'react'

interface Skill {
  icon: ReactNode;
  name: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Languages
    { icon: <FaJava className="text-xl" />, name: "Java" },
    { icon: <SiPython className="text-xl" />, name: "Python" },
    { icon: <SiJavascript className="text-xl" />, name: "JavaScript" },
    { icon: <SiHtml5 className="text-xl" />, name: "HTML" },
    { icon: <SiCss3 className="text-xl" />, name: "CSS" },
    
    // Frameworks and Libraries
    { icon: <SiReact className="text-xl" />, name: "React.js" },
    { icon: <SiNodedotjs className="text-xl" />, name: "Node.js" },
    { icon: <SiExpress className="text-xl" />, name: "Express.js" },
    { icon: <SiTensorflow className="text-xl" />, name: "TensorFlow" },
    { icon: <SiPandas className="text-xl" />, name: "Pandas" },
    { icon: <SiScikitlearn className="text-xl" />, name: "scikit-learn" },
    
    // Tools and Platforms
    { icon: <FaGitAlt className="text-xl" />, name: "Git" },
    { icon: <SiDocker className="text-xl" />, name: "Docker" },
    { icon: <SiAmazonaws className="text-xl" />, name: "AWS" },
    { icon: <SiMicrosoftsqlserver className="text-xl" />, name: "SQL Server" },
    { icon: <SiMongodb className="text-xl" />, name: "MongoDB" },
    { icon: <SiNeo4J className="text-xl" />, name: "Neo4j" },
    { icon: <SiPowerbi className="text-xl" />, name: "PowerBI" },
    { icon: <MdOutlineApi className="text-xl" />, name: "REST API" },
  ]

  return (
    <div className="py-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <h1 className="font-big text-red-accent animate-slide-in-top">Technologies I know</h1>
              <hr className="my-4" />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="border rounded py-1 px-2 my-2 inline-flex items-center hover:border-red-accent transition-colors duration-300"
                  >
                    <span className="flex items-center">
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/Development-pana.png" 
                alt="Development illustration" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills