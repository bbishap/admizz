import React from "react";
import { CallToAction } from "../Button/callToAction";
import { Input } from "../Input";

const Login = () => {
  return (
    <div className="signin">
      <div className="signin__inner">
        <div className="signin__left">
          <div className="signin__title">How Admizz helps you in Admission</div>
          <div className="signin__desc">
            We continuously strive towards facilitating campus-drives where
            eminent companies offer the most worth-while career opportunities.
          </div>
          <div className="signin__list">
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title">Research Your Options</div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title">
                Register Yourself - Online/Offline
              </div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title">Submit Your Application</div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title">
                Download The Offer Letter
              </div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title">Prepare For Departure</div>
            </div>
          </div>
          <div className="signin__cta">Learn More About Us</div>
        </div>
        <div className="signin__right">
          <div className="signin__header">Login</div>
          <div className="signin__header__desc">
            We continuously strive towards facilitating campus-drives where
            eminent companies offer the most worth-while career opportunities.
          </div>
          <div className="signin__form login">
            <form className="form">
              <Input
                placeholder="Phone Number*"
                className="margin-md"
                type="text"
              />
              <Input
                placeholder="Password"
                className="margin-md"
                type="password"
              />
            </form>
            <div className="signin__forgot">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="signin__submit column">
            <CallToAction className="filled login">Login</CallToAction>
            <div className="signin__change login">
              <a href="#">New Here? Click Here To Create our Account.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };