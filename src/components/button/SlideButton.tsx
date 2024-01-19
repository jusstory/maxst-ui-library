import React from 'react';
import { SlideButtonStyles } from './SliderButtonStyle';

function SlideButton() {
  return (
    <SlideButtonStyles>
      <div id="slide-button" className="icon-container show">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask className="mask" id="mask-slide-button">
            <rect x="0" y="0" width="50" height="50" fill="white"></rect>
            <polygon
              className="mask"
              points="0 0, 100 0, 100 100, 0 100"
              fill="black"
            ></polygon>
          </mask>
          <defs>
            <clipPath id="clip-slide-button">
              <polygon
                className="mask"
                points="0 0, 100 0, 100 100, 0 100"
              ></polygon>
            </clipPath>
          </defs>
          <g mask="url(#mask-slide-button)">
            <path
              className="border"
              d="M0.5 12.3806C0.5 11.2234 0.945841 10.1106 1.7449 9.27351L8.79006 1.89286C9.63919 1.0033 10.8154 0.5 12.0452 0.5H45C47.4853 0.5 49.5 2.51472 49.5 5V45C49.5 47.4853 47.4853 49.5 45 49.5H5C2.51472 49.5 0.5 47.4853 0.5 45V12.3806Z"
              fill="white"
              stroke="black"
            ></path>
          </g>
          <g className="hover" clip-path="url(#clip-slide-button)">
            <path
              className="border"
              d="M0.5 12.3806C0.5 11.2234 0.945841 10.1106 1.7449 9.27351L8.79006 1.89286C9.63919 1.0033 10.8154 0.5 12.0452 0.5H45C47.4853 0.5 49.5 2.51472 49.5 5V45C49.5 47.4853 47.4853 49.5 45 49.5H5C2.51472 49.5 0.5 47.4853 0.5 45V12.3806Z"
              fill="white"
              stroke="black"
            ></path>
          </g>
        </svg>
      </div>
    </SlideButtonStyles>
  );
}

export default SlideButton;
