import React, { useState, useRef, useEffect, act } from "react";
import "./questions.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
const Questions = () => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="questions">
        <div>
          <button
            className={`questions__section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="questions__align">
                <h4 className="questions__style">
                  Quels services offrez-vous?
                </h4>
                {!active && (
                  <FaArrowRightLong
                    color="242318"
                    fontSize={"fa-light"}
                    className={"questions__icon"}
                  />
                )}
                {active && (
                  <IoCloseOutline
                    color="242318"
                    className={"questions__icon"}
                  />
                )}
              </div>
              <div
                ref={contentRef}
                className={active ? `question__answer` : `question__answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Questions;
