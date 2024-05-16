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
              <h6 className="blue-label px-2 py-1">Jan 2023 - Aug 2023</h6>
              <ul>
                <li>Designed a comprehensive SQL and Power BI dashboard to monitor work order stages from initiation to completion. Detected and corrected errors, achieving a 20% reduction in late work orders in the station.</li>
                <li>Enhanced the CFAM Dashboard (with over 100K hits) using SQL, Node.js, and React.js, resolving bugs and improving data accessibility and usability for nuclear plant statistics and training qualifications.</li>
                <li>Developed a Power BI dashboard to analyze Observation and Coaching data effectively, allowing for quicker identification of trends and key focus areas. This data-driven approach enhanced overall performance and my commitment to high-quality results earned me the Employee of the Month recognition in March.</li>
              </ul>
              <h4 className="ff-jose ls-2">Software Engineer, Riipen</h4>
              <h6 className="blue-label px-2 py-1">Sep 2022 - Apr 2023</h6>
              <ul>
                <li>Crafted Figma wireframes for the Global Islamic Society's app, benefiting 500+ mosque visitors and seamlessly transitioned these into a functional app using JavaScript, React Native, and Expo.</li>
                <li>Efficiently collaborated with a diverse team of 8, harnessing tools like GitHub and Trello for streamlined development and testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Experience;
