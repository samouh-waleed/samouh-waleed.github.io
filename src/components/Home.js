/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center home-container"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                <h1 className="m-0 font-big animate-charcter">I'm Waleed,</h1>
                <p className="ls-2 mt-2 slide-in-bottom">Full Stack Developer / Software Engineer</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
              <img className="profile-img img-fluid" src="../images/mypic.png" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;