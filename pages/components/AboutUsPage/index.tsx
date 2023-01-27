import React from "react";
import Style from "./AboutUsPage.module.scss";

function AboutUsPage() {
  return (
    <>
      <div className={Style.container}>
        <h1>About Us</h1>
        <div className={Style.aboutDetails}>
          <div className={Style.aboutContent}>
            {
              "We are a group of enthusiastic individuals who are eager to educate readers about money matters. Our team includes top-tier financial and investing professionals, but we simply write to spread knowledge and information. Being financially independent is an admirable aim, but helping millions of people in need all over the world and one's own life would be a far greater accomplishment. "
            }
          </div>
          <div className={Style.aboutContent}>
            {
              "In addition, reaching a point where we are financially independent is the first step in achieving our goal of making a positive impact on the world. We are not simply a group of financial bloggers; we are much more than that. "
            }
          </div>
          <div className={Style.aboutContent}>
            {
              "We are students who act as teachers by passing on our knowledge and experiences to the audience. Despite the fact that we come from simple beginnings, we have expanded along with our audience as time has passed. Although we are currently not offering any investment-related advice, we are steadfast in our belief that we can forge solid connections, offer a variety of knowledge and resources to learn about investments and financial terms. "
            }
          </div>
          <div className={Style.aboutContent}>
            {
              "Providing you with security is crucial for your financial development, in our opinion. For this reason, we create connections based on an all-encompassing understanding of your financial situation and offer reliable reading content."
            }
          </div>
          <div className={Style.aboutContent}>
            {
              "We don't generate content for ourselves; rather, we write it to help you achieve your long-term goals. The articles that we write are primarily focused on the most recent events that have occurred in the market. The same has only one goal: to increase our readers' financial literacy."
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
