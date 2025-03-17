'use client'

interface Experience {
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      title: 'Co-founder, Software Engineer, Relnix',
      period: 'October 2024 - Present',
      location: 'Remote',
      responsibilities: [
        'Designed and launched an automated code analysis platform that improves code quality and test coverage by visualizing repository structures and dependencies, resulting in increased maintainability and a streamlined workflow.',
        'Implemented a scalable multi-database architecture (Neo4j for code structure, MongoDB for analytics, AWS S3 for storage), leveraging AWS SQS FIFO queues for reliable message processing, resulting in faster bug detection and resolution.',
        'Increased test coverage by integrating OpenAPI-driven automated test generation for untested functions, significantly reducing manual testing effort and enhancing code reliability for engineering teams.'
      ]
    },
    {
      title: 'Software Engineer, Ontario Power Generation (OPG)',
      period: 'January 2023 - August 2023',
      location: 'Toronto, ON',
      responsibilities: [
        'Created large-scale SQL and Power BI dashboards to track work orders from initiation to completion, reducing completion times by 20% by automating data collection and reporting.',
        'Developed a Power BI dashboard to analyze Observation & Coaching data, boosting performance by quickly identifying trends by employing full-stack web development for data visualization and reporting.',
        'Enhanced the CFAM Dashboard to improve user efficiency by 30% by resolving critical bugs and optimizing data accessibility with SQL, Node.js, and React.js, driving over 100K hits and enabling better decision-making.'
      ]
    },
    {
      title: 'Software Engineer, Riipen',
      period: 'September 2022 - April 2023',
      location: 'Toronto, ON',
      responsibilities: [
        'Developed full-stack mobile applications with React Native & Expo, enhancing user experience for 500+ mosque visitors by implementing prototypes and modern architectural patterns.',
        'Collaborated with an 8-member team on GitHub & Trello, accelerating development and testing cycles by 20% by establishing continuous integration and clear task management.'
      ]
    }
  ]

  return (
    <div className="p-8 md:p-16">
      <div className="bg-darker-blue p-6 md:p-8 rounded-lg animate-slide-in-top">
        <div className="flex justify-between items-center">
          <h2 className="font-jost font-bold tracking-wider text-2xl md:text-3xl">Work Experience</h2>
        </div>
        <hr className="my-4" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-jost tracking-wider text-xl">{exp.title}</h4>
              <div className="blue-label my-2 text-sm">{exp.period} | {exp.location}</div>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-base">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience