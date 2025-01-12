import React from "react";
import "./MainContent.css";
import storyDetails from "../StaticData/storyDataDetails.json";
export const MainContent = () => {
  const storyMap = storyDetails.storyDetails;
  return (
    <div className="main-content-flex">
      <div className="story-flex">
        <div className="story-details-container">
          {storyMap?.map((item, index) => {
            return (
              <div className="story-items">
                <img src={item.img} alt="story-image"></img>
                <div className="profile-name">
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
