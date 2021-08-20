import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img
                className="s-about__pic"
                src="images/avatars/portraitsquare.jpg"
                alt=""
              />
            </div>
            <div className="column large-9 tab-12 s-about__content">
                        <h3>Olu Kareem</h3>
                        <h3>Full Stack Junior Developer</h3>
              <p>
              I’m an early-career full stack software engineer with experience in building scalable applications, product design, mixed media and self management within an agile workflow. I’ve built functional apps on my own and as a collaborator and I understand the process of working the software development cycle; from analysis and design, to implementation and QA, to deployment and maintenance. I’m familiar with working  through iterations, “sprints” and achieving deliverables and in a team environment, I make it a priority to ask many questions, remain mindful and hold myself accountable. I attended General Assembly’s Software Engineering Bootcamp in 2020 but I’m mostly self-taught. Most recently, I was employed as a software engineer intern for Splice. I’m ready to work and always looking for ways to improve.
              </p>
              <hr />
              <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                                <h3>Brookyln, NY</h3>
                                <h3><a href="mailto:#0">oloka.dev@gmail.com</a></h3>

                </div>
                <div className="column w-1000-stack">
                  <a href="images/portfolio/resume/OluKareemCV.pdf" className="btn btn--download">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                      <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                    </svg>
                    CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
