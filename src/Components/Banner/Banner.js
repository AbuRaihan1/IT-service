import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div class="banner mx-auto">
      <div className="banner-overlay"></div>
      <div className="banner-content relative container px-12  space-y-3 pt-28">
        <h1 className="text-6xl text-white">It-service</h1>
        <h1 className="text-4xl text-white">Get your all it service from us</h1>
        <p className="text-xl text-white">
          We are Bangladeshi based software company, we are providing you all of
          your it solution
        </p>

        <div className="banner-buttons">
          <Link>
            <button className="btn-custom">Services</button>
          </Link>
          <Link>
            <button className="btn-custom">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
