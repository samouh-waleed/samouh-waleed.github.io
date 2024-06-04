/* eslint-disable react/no-unescaped-entities */
import  { Fragment } from 'react';

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center about-container">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious software engineer, a self-led learner and team player with one year of experience in software engineer.</p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Previously worked as Software Engineer. The technology I've worked on: <span className="text-red ls-2">Java, Python, JavaScript, node.js, React, SQL, Ssms, Rest API, PowerBI</span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning ML and AI.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default About;
