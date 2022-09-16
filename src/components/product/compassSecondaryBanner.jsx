/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import * as styles from "./product.module.css"
// Import CompassBanner from "../../assets/compass-banner-animated.svg"
import { PropTypes } from "prop-types";


const CompassSecondaryBanner = ( { scrollStart, scrollStop, scrollInitial } ) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scollNavigation, setScrollnaviagtion] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScrollnaviagtion(position + scrollInitial);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
        .rotationClass{
        transform: translate(-50%, -10%) rotate(${-scollNavigation/2.5}deg)
        }
        `}

      </style>
      <section className={`${styles.background} relative z-10`}>
        {/* <div className={`md:block hidden`}>
        <CompassBanner />
      </div> */}
        <section className={` ${styles.compassBg} w-full`}>
          <img src="/img/products/compass-image-animated.svg" style={{ transform: "translate(-50%, -50%) " }} className={`hello ${styles.imageSize} ${ scrollPosition >= scrollStart && scrollPosition <= scrollStop ? "hidden" : "block" }`} />
          <img src={"/img/products/navigation.svg"} className={`${scrollPosition >= scrollStart && scrollPosition <= scrollStop ? "block" : "hidden"} hi ${styles.imageSize} rotationClass`} />
        </section>
      </section>
    </>
  )
}

CompassSecondaryBanner.propTypes = {
  scrollStart: PropTypes.string,
  scrollStop: PropTypes.string,
  scrollInitial: PropTypes.number,

}
CompassSecondaryBanner.defaultProps = {
  scrollStart: `350`,
  scrollStop: `750`,
  scrollInitial: 170
}

export default CompassSecondaryBanner
