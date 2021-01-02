import React from "react";
import { CollegeDetailsBlock } from "../CollegeDetailsBlock";
import { FeeStructure } from "../CollegeFeeStructure";
import { CollegeOverview } from "../CollegeOverview";
import { RatingAndReview } from "../CollegeRatingAndReviews";
import { Newsletter } from "../Newsletter";
import { Sidebar } from "../Sidebar";

const SidebarContainer = (props: any) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner inner">
        <div className="content-with-sidebar">
          <CollegeDetailsBlock />
          <CollegeOverview />
          <FeeStructure />
          <Newsletter />
          <RatingAndReview />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export { SidebarContainer };