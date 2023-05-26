import React from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="image-hero">
        <div className="container banner-content col-lg-9">
          <div>
            <h1 className="text-white">
              REAL FITNESS <br /> DEPENDS ON EXERCISE
            </h1>
            <h6 className="text-white">SHAPE YOUR BODY WELL.</h6>
          </div>
        </div>
      </div>

      <ProductCard />
      <div className="d-flex justify-content-center">
        <div
          style={{
            width: "1000px",
            borderBottom: "3px solid rgba(246,33,75,0.7)",
          }}
        ></div>
      </div>
      <section className="top-course-area section-gap" id="top-course">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-9">
              <div className="title text-center">
                <h1 className="mb-1">Top Courses That are open for Students</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c1.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Running Classes <span>$275</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c2.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Weight Lifting Classes <span>$200</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c3.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Body Combat Classes <span>$225</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c4.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Organic Yoga Classes <span>$300</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c5.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Raw Fitness Classes <span>$500</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/gym/img/c6.jpg"
                    alt=""
                  />
                </div>
                <span className="course-status">Course Available</span>
                <a href="add">
                  <h4>
                    Body Building Classes <span>$250</span>
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="callto-area section-gap relative">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h1 className="text-white">Huge Transaction in last Week</h1>
              <p className="text-white pt-20 pb-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore <br /> magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <a className="primary-btn" href="add">
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
