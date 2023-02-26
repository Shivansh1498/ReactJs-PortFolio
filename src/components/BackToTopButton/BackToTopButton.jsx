import React, { useState, useEffect, useRef } from "react";
import "./BackToTopButton.css";

import arrowUpwardIcon from "../../assets/arrowUpwardIcon.svg";

const BackToTopButton = () => {
  const [offset, setOffset] = useState(0);
  const backToTopBtn = useRef();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    if (offset < 200) {
      backToTopBtn.current.style.display = "none";
    } else {
      backToTopBtn.current.style.display = "flex";
    }

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <>
      <div className="portfolio__backToTop" title="Back To Top">
        <a
          href="#navbar"
          className="portfolio__backToTop-btn"
          ref={backToTopBtn}
        >
          <img src={arrowUpwardIcon} alt="" />
        </a>
      </div>
    </>
  );
};

export default BackToTopButton;
