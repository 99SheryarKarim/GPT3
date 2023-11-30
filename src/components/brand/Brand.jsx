import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div className="">
        <img src={google} alt="google" />
      </div>
      <div className="">
        <img src={slack} alt="slack" />
      </div>
      <div className="">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
