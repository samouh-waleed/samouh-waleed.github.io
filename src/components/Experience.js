/* eslint-disable react/no-unescaped-entities */
import  { Fragment } from 'react';

function Experience() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Work Experience</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12">
              <h4 className="ff-jose ls-2">Software Engineer, Ontario Power Generation</h4>
              <h6 className="blue-label px-2 py-1">January 2023 - August 2023</h6>
              <ul>
                <li>Designed and developed large-scale SQL and Power BI dashboards to monitor work orders lifecycle, from initiation to completion. 
                  Improved accuracy of work orders tracking, led to a 20% reduction in completion times at OPG.</li>
                <li>Developed and led the creation of a Power BI dashboard to analyze Observation and Coaching data, which enhanced performance by 
                  enabling quicker identification of trends and key focus areas, by employing full-stack web development techniques to 
                  integrate data visualization and reporting tools. This achievement earned me the Employee of the Month recognition in March.</li>
                <li>Enhanced the CFAM Dashboard, a large-scale web application, resulting in a 30% improvement in user efficiency and increased reliability
                   for monitoring nuclear plant statistics and training qualifications, by resolving critical bugs and optimizing data accessibility 
                   using SQL, Node.js, and React.js. The dashboard’s enhanced performance led to over 100K hits, directly contributing to better decision-making and operational excellence.</li>
              </ul>
              <h4 className="ff-jose ls-2">Software Engineer, Riipen</h4>
              <h6 className="blue-label px-2 py-1">September 2022 - April 2023</h6>
              <ul>
                <li>Developed full stack mobile applications using React Native and Expo, enhancing user experience for 500+ mosque visitors. 
                  Implemented prototypes and final designs using modern architectural patterns to ensure scalability and reliability.</li>
                <li>Collaborated with an 8-member team using GitHub and Trello, optimizing the development and testing process to ensure 
                  high-quality delivery of features and applications.</li>
              </ul>
              <h4 className="ff-jose ls-2">Software Engineer, Freelancer</h4>
              <h6 className="blue-label px-2 py-1">May 2020 - August 2022</h6>
              <ul>
                <li>Delivered medium to large-scale software projects for various clients, utilizing Python and other scripting languages to 
                  develop custom applications and data analysis tools.</li>
                <li>Built and shipped high-quality software solutions by leveraging strong problem-solving skills and a deep understanding 
                  of software development principles.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Experience;
