import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Work History</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <div className="ga-logo">
                    <h4 className="h3">
                      Splice{" "}
                      <a href="https://splice.com">
                        <img src="images/workhistory/splice.png" alt="Splice" />
                      </a>
                    </h4>
                  </div>
                  <p className="resume-block__header-meta">
                    <span>Software Engineer Internship: Creator Tools</span>
                    <span className="resume-block__header-date">
                      Summer 2021
                    </span>
                  </p>
                </div>
                <p>
                  Performed agile work as a member of the creator tools team. Our duties
                  were to craft the surface for musicians to express their
                  ideas. I contributed front and backend work to their new
                  desktop UI. One task I had was to take a component, break it
                  down and rewrite it into separate components that didn’t rely
                  on an obsolete state. The task involved front and backend work
                  with Typescript and Angular. With my fellow interns, we
                  created an audio effect chaining plugin using
                  Superpowered and WebAssembly. I worked solely on the backend using
                  javascript.
                </p>
              </div>{" "}
              {/* end resume-block */}
              <div className="resume-block">
                <div className="resume-block__header">
                  <div className="ga-logo">
                    <h4 className="h3">
                      General Assembly{" "}
                      <a href="https://splice.com/">
                        <img src="images/workhistory/GA-Logo.png" alt="General Assembly" />
                      </a>
                    </h4>
                  </div>
                  <p className="resume-block__header-meta">
                    <span>Software Engineering Fellow</span>
                    <span className="resume-block__header-date">
                      Spring/Summer 2020
                    </span>
                  </p>
                </div>
                <p>
                  In the summer of 2020, I embarked on a fully immersive
                  Software Engineering and Programming cohort, run by General
                  Assembly. In that time I created a few projects including a
                  self-help blogging site that used ruby on rails backend with
                  an SQL database, and a react frontend. I also worked on an
                  open source meal recipe app using React/Redux, Node/Express,
                  and MongoDB. You can find some of these projects below. It was
                  a great introduction to this career path and gave me rare
                  opportunities for peer-coding.
                </p>
              </div>{" "}
              {/* end resume-block */}
              <div className="resume-block">
                <div className="resume-block__header">
                  <div className="pr-logo">
                    <h4 className="h3">
                      Public Records{" "}
                      <a href="https://publicrecords.nyc/">
                        <img
                          src="images/workhistory/PublicRecsLogo.gif"
                          alt="PRlogo"
                        />
                      </a>
                    </h4>
                  </div>
                  <p className="resume-block__header-meta">
                    <span>Client Facing Operations</span>
                    <span className="resume-block__header-date">
                      March 2019 - Present
                    </span>
                  </p>
                </div>
                <p>
                  Public Records is a music-driven restaurant, performance, and
                  community space. As a member of the inaugural staff, I
                  contributed to the early development of the space. As we
                  progressed I performed a variety of duties including
                  customer-facing services and bar management.
                </p>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                  Since finishing at GA, I spend most of my time on learning
                  resources like Udemy and Leetcode working to improve my
                  skillset. Below are my current concentrations.
                </p>
                <ul className="skill-bars-fat" className="skill-icons">
                  {/* <li>
                    <div className="progress percent85" />
                    <strong>HTML</strong>
                  </li>
                  <li>
                    <div className="progress percent85" />
                    <strong>CSS</strong>
                  </li>
                  <li>
                    <div className="progress percent65" />
                                    <strong>Javascript</strong>
                                    <img src="images/portfolio/Skills/javascriptlogo.png" alt="javascript" />
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Figma</strong>
                  </li>
                  <li>
                    <div className="progress percent75" />
                    <strong>Illustrator</strong>
                  </li>
                  <li>
                    <div className="progress percent60" />
                    <strong>Photoshop</strong>
                  </li> */}
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/Html5Logo.png"
                    alt="html"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/CSSlogo.png"
                    alt="CSS"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/sassLogo.png"
                    alt="SCSS"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/javascriptlogo.png"
                    alt="javascript"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/typescriptlogo.png"
                    alt="typescript"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/gologoblue.png"
                    alt="Golang"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/rubylogo.png"
                    alt="Golang"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/railslogo.png"
                    alt="Rails"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/nodejslogo.png"
                    alt="Node.js"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/reactLogo.png"
                    alt="React"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/angularlogo.png"
                    alt="Angular"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/expressjslogo.png"
                    alt="Express"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/restlogo.png"
                    alt="REST"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/graphqllogo.png"
                    alt=" GraphQl"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/mongodb-logo.png"
                    alt="MongoDB"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/storybooklogo.png"
                    alt="Storybook"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/sqllogo.png"
                    alt="SQL"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/PSGSQLLogo.png"
                    alt="PostgreSQL"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/vscodelogo.png"
                    alt="VSCode"
                  />
                  <img
                    class="skill-icon"
                    src="images/portfolio/Skills/giticon.png"
                    alt="Git Version Control"
                  />
                </ul>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
        </section>{" "}
        {/* end s-resume */}
      </React.Fragment>
    );
  }
}
