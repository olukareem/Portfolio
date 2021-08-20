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
                I'm Olu. I'd describe myself as a self-driven creative
                interested in extending my knowledge and wisdom however I can.
                I’m always excited to discover new creative approaches through
                collaboration. I currently work as a full stack developer and I
                chose this path because its where my love of problem-solving and
                development intersects. I've been programming since Winter of 2020 and I have experience in JavaScript, Ruby on
                Rails, GO, SQL, Node, Express, React, Redux, MongoDB. I look
                to keep expanding.
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
