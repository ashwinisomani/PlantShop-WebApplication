import React, { useEffect, useState } from "react";

import "../styles/About.css";

const About = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 2000);
  }, []);

  if (showLoader) {
    return (
      <div className="about-load-area">
        <i class="gg-spinner-two"></i>
      </div>
    );
  } else {
    return (
      <div className="about-load-area">
        <div className="about-container">
          <div className="about-heading">
            <h1>ABOUT US</h1>
          </div>
          <div className="about-content">
            <p>Little Leaf specializes in plants including unusual perennials, 
              conifers, shrubs  and trees, as well as a full range of vegetable
              seeds, starts and herbs. The shop inside carries a wide selection
              of house plants and succulents, quality gardening tools and supplies,
              as well as garden related art and gifts.
            </p>  
          </div>
        </div>
      </div>
    );
  }
};

export default About;