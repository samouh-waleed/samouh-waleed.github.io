/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4"> 
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../project-images/ecars-1.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/ecars-2.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/ecars-3.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/ecars-4.PNG" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                  <GrPrevious className="bold-arrow"/>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                  <GrNext className="bold-arrow"/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">E-Cars</h5>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/Ali-Adam7/E-Cars" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../project-images/ware-1.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/ware-2.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/ware-3.PNG" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <GrPrevious className="bold-arrow"/>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <GrNext className="bold-arrow"/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">WareHouse</h5>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/samouh-waleed/ware-house" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../project-images/hospital-1.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/hospital-2.PNG" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                  <GrPrevious className="bold-arrow"/>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                  <GrNext className="bold-arrow"/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Hospital System</h5>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/samouh-waleed/Hospital-System" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../project-images/simon-1.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/simon-2.PNG" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../project-images/simon-3.PNG" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                  <GrPrevious className="bold-arrow"/>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                  <GrNext className="bold-arrow"/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Simon Game</h5>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/samouh-waleed/Simon-Game" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../project-images/drum-1.PNG" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                  <GrPrevious className="bold-arrow"/>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                  <GrNext className="bold-arrow"/>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Drum Kit Game</h5>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/samouh-waleed/Drum-Kit-Game" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
