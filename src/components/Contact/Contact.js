import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact" id="gif-bg" className="s-contact target-section">
  
                <div className="row s-contact__header">
    <div className="column large-12">
      <h3 className="section-header-allcaps">What's Up?</h3>
    </div>
  </div>
  <div className="row s-contact__content">
    <div className="column large-7 medium-12">
      <h4 className="huge-text">
        I'm actively looking for opportunties. Lets build something together.
      </h4>
    </div>
    <div className="column large-4 medium-12">
      <div className="row contact-infos">
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">
              Email
            </h5>
            <p className="contact-block__content">
              <a className="mailtoui" href="mailto:oloka.dev@gmail.com">oloka.dev@gmail.com</a>
            </p>
          </div> {/* end contact-block */}
        </div>
        <div className="column large-12 medium-6 tab-12">
          {/* <div className="contact-block">
            <h5 className="contact-block__header">
              Phone
            </h5>
            <p className="contact-block__content">
              <a href="tel:+3322013999">+332 201 3999</a>
            </p>
          </div> end contact-block */}
        </div>
        <div className="column large-12">
          <a href="mailto:oloka.dev@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
        </div>
      </div> {/* end contact-infos */}
    </div>
  </div> {/* s-contact__content */}
</section> {/* end s-contact */}
      </React.Fragment>
    );
  }
}