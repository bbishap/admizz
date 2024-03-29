import { faMicrophoneAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Select } from "../components";

const Topbar = (props: any) => {
  return (
    <div className="topbar">
      <div className="topbar__contact">
        <div className="contact">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faMicrophoneAlt} />
          </div>
          <div className="contact__item">
            <span className="contact__title">Nepal:</span>
            <span className="contact__info">+977 87654321</span>
          </div>
          <div className="contact__item">
            <span className="contact__title">India:</span>
            <span className="contact__info">+91 87654321</span>
          </div>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__country">
          <span>Study In</span>
          {/* <Select /> */}
        </div>
        <div className="topbar__signup">
          <div className="signup">
            <div className="signup__icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <div className="signup__text">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Topbar };
