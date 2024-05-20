// Testimonials.js

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="testimonial">
            <div className="shadow-effect responsive-testimonial">
              <img
                className="img-circle responsive-image"
                src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                alt=""
              />
              <p className="responsive-text">
                <strong>Lorem Ipsum</strong>
                <br />
                Dramatically maintain clicks-and-mortar solutions without
                functional solutions. Completely synergize resource taxing
                relationships via premier niche markets. Professionally
                cultivate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
