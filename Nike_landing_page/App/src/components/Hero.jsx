import React from "react";

const Hero = () => {
  return (
    <main className="Hero container">
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero-btn">
          <button>Shop Now</button>
          <button className = "secondary-btn">Category</button>
        </div>
        <div className="Shopping">
          <p>Also Available On</p>
          <div className="Shop-img">
            <img src="./public/images/flipkart.png" alt="flipkart-logo" />
            <img src="./public/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
          <div className="Hero-img">
              <img src="./public/images/shoe_image.png" alt="shoe-logo"/>
      </div>
    </main>
  );
};
export default Hero;
