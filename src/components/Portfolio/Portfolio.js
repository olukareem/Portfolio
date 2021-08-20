import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="portfolio" className="s-portfolio target-section">
          <div className="row s-portfolio__header">
            <div className="column large-12">
              <h3>Portfolio</h3>
            </div>
          </div>
          <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            <div className="column folio-item">
              <a
                href="https://allstar-reference.netlify.app/"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/all-star-reference/thumbnail/AS-ref-home-square.jpg"
                  srcSet="images/portfolio/all-star-reference/thumbnail/AS-ref-home-square.jpg 1x, 
                           images/portfolio/all-star-reference/thumbnail/AS-ref-home-square.jpg"
                  alt="All Star Reference Thumbnail"
                />
              </a>
                        <div class="overlay">
                        <a href="https://github.com/glolorun/AllStarReference">  
                        <img className="github-icon" src="images/portfolio/githublogo.png" alt="Github" /></a>
                <div class="portfolio-item-meta">
                  <h5>All Star Reference</h5>
                  <p>
                    All-Star Reference is a database containing players from the
                    National Basketball Association. Basketball fanatics can
                    enter a name and have information and the current season's
                    statistics returned to them. It was made with vanilla
                    javascript and axios.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="https://apollo-weather.netlify.app/"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/Apollo-Weather/thumbnail/Apollo-weather-square.jpg"
                  srcSet="images/portfolio/Apollo-Weather/thumbnail/Apollo-weather-square.jpg 1x, 
                           images/portfolio/Apollo-Weather/thumbnail/Apollo-weather-square.jpg 2x"
                  alt="Apollo Weather Thumbnail"
                />
              </a>
                        <div class="overlay">
                        <a href="https://github.com/glolorun/AP-Weather">  
                                <img className="github-icon" src="images/portfolio/githublogo.png" alt="Github" />
                                </a>
                <div class="portfolio-item-meta">
                  <h5>Apollo Weather</h5>
                  <p>
                    Apollo weather an interactive weather app. Users will be
                    able to search a city or from their current location and
                    render weather condition including high/low and
                    sunrise/sunset information. The icons change depending on the current weather. I made it using javascript and react/router.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="https://shoulder-app.netlify.app/"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/shoulder/shoulderlogo.png"
                  srcSet="images/portfolio/shoulder/shoulderlogo.png 1x, 
                           images/portfolio/shoulder/shoulderlogo.png 2x"
                  alt="shoulder thumbnail"
                />
              </a>
                        <div class="overlay">
                        <a href="https://github.com/glolorun/shoulder-app"> 
                                <img className="github-icon" src="images/portfolio/githublogo.png" alt="Github" />
                                </a>
                <div class="portfolio-item-meta">
                    
                                <h5>shoulder<p>(in development)</p></h5>
                                
                  <p>shoulder is a blogging application intended for users to ask and receive help on a multitude of topics including services, advice, and opportunities. Members can login, create, edit and share posts. I made this using a react frontend with a rails backend.</p>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="http://tan-wrench.surge.sh/"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/yummy-dish/thumbnail/yummy-dish-square.jpg"
                  srcSet="images/portfolio/yummy-dish/thumbnail/yummy-dish-square.jpg 1x, 
                           images/portfolio/yummy-dish/thumbnail/yummy-dish-square.jpg 2x"
                  alt="Yummy Dish thumbnail"
                />
              </a>
                        <div class="overlay">
                        <a href="https://github.com/glolorun/yummy-dish"> 
                                <img className="github-icon" src="images/portfolio/githublogo.png" alt="Github" />
                                </a>
                            <div class="portfolio-item-meta">
                            
                  <h5>Yummy Dish</h5>
                  <p>
                    With Yummy Dish users can browse and search for recipes.
                    Once logged in, you can save and comment on recipes as well
                    as create, update and delete your own reviews. This was a
                    group effort and was created with javascript, react/router,
                    and mongoose.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="https://www.linkedin.com/in/oloka/"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/LinkedIn/linkedin-logo-high-res-1.jpg"
                  srcSet="images/portfolio/LinkedIn/linkedin-logo-high-res-1.jpg 1x, 
                           images/portfolio/LinkedIn/linkedin-logo-high-res-1.jpg 2x"
                  alt=""
                />
              </a>
              <div class="overlay">
                <div class="portfolio-item-meta">
                  <h5>linkedin</h5>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            <div className="column folio-item">
              <a
                href="https://github.com/glolorun"
                className="folio-item__thumb"
              >
                <img
                  src="images/portfolio/github/avatar.png"
                  srcSet="images/portfolio/github/avatar.png 1x, 
                           public/images/portfolio/github/avatar.png 2x"
                  alt="github avatar"
                />
              </a>
              <div class="overlay">
                <div class="portfolio-item-meta">
                  <h5>github</h5>
                </div>
              </div>
            </div>{" "}
            {/* end folio-item */}
            {/* <div className="column folio-item">
      <a href="#modal-07" className="folio-item__thumb">
        <img src="images/portfolio/rucksack.jpg" srcSet="images/portfolio/rucksack.jpg 1x, 
                           images/portfolio/rucksack@2x.jpg 2x" alt="" />
                        </a>
                        <div class="overlay"><div class="portfolio-item-meta"><h5>project2</h5><p>mobileapp</p></div></div>
    </div> 
    <div className="column folio-item">
      <a href="#modal-08" className="folio-item__thumb">
        <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
                           images/portfolio/sanddunes@2x.jpg 2x" alt="" />
                        </a>
                        <div class="overlay"><div class="portfolio-item-meta"><h5>project2</h5><p>mobileapp</p></div></div>
    </div>  */}
          </div>
          {/* Modal Templates Popup
  =========================================================== */}
          <div id="modal-01" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Droplet</h5>
                <p>
                  Odio soluta enim quos sit asperiores rerum rerum repudiandae
                  cum. Vel voluptatem alias qui assumenda iure et expedita
                  voluptatem. Ratione officiis quae.
                </p>
                <ul className="modal-popup__cat">
                  <li>Branding</li>
                  <li>Product Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-02" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>The Lamp</h5>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <ul className="modal-popup__cat">
                  <li>Branding</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-03" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Minimalismo</h5>
                <p>
                  Exercitationem reprehenderit quod explicabo consequatur
                  aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet
                  ratione necessitatibus ipsam mollitia.
                </p>
                <ul className="modal-popup__cat">
                  <li>Product Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-04" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-shutterbug.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Shutterbug</h5>
                <p>
                  Dolores velit qui quos nobis. Aliquam delectus voluptas quos
                  possimus non voluptatem voluptas voluptas. Est doloribus
                  eligendi porro doloribus voluptatum.
                </p>
                <ul className="modal-popup__cat">
                  <li>E-Commerce</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-05" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Fuji</h5>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <ul className="modal-popup__cat">
                  <li>Product Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-06" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Skaterboy</h5>
                <p>
                  Quisquam vel libero consequuntur autem voluptas. Qui aut vero.
                  Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin,
                  lorem quis bibendum auctor.
                </p>
                <ul className="modal-popup__cat">
                  <li>Branding</li>
                  <li>Product Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-07" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Rucksack</h5>
                <p>
                  Odio soluta enim quos sit asperiores rerum rerum repudiandae
                  cum. Vel voluptatem alias qui assumenda iure et expedita
                  voluptatem. Ratione officiis quae.
                </p>
                <ul className="modal-popup__cat">
                  <li>Branding</li>
                  <li>Product Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
          <div id="modal-08" hidden>
            <div className="modal-popup">
              <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />
              <div className="modal-popup__desc">
                <h5>Sand Dunes</h5>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit.
                </p>
                <ul className="modal-popup__cat">
                  <li>Web Design</li>
                </ul>
              </div>
              <a
                href="https://www.behance.net/"
                className="modal-popup__details"
              >
                Project link
              </a>
            </div>
          </div>{" "}
          {/* end modal */}
        </section>{" "}
        {/* end s-portfolio */}
      </React.Fragment>
    );
  }
}
