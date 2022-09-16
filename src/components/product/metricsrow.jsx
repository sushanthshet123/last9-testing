/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from "react";
import ProductMetrics from "../product/productmetrics"
import { useInView } from "react-intersection-observer";

const metricsrow = (props) => {

  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView({ threshold: 0, triggerOnce: true, });
  const { ref: magicSectionRef1, inView: magicSectionIsVisible1 } = useInView({ threshold: 0, triggerOnce: true, });
  const { ref: magicSectionRef2, inView: magicSectionIsVisible2 } = useInView({ threshold: 0, triggerOnce: true, });
  const { ref: magicSectionRef3, inView: magicSectionIsVisible3 } = useInView({ threshold: 0, triggerOnce: true, });

  return (
    <>
      {props?.data.map((data) => (
        <div ref={data.ref === "magicSectionRef" ? magicSectionRef : data.ref === "magicSectionRef1" ? magicSectionRef1 : data.ref === "magicSectionRef2" ? magicSectionRef2 : magicSectionRef3 } className="grid grid-cols-12 max-w-6xl mx-auto pb-10" key={data.id}>

          <div className="relative col-span-12 md:col-span-3 px-6 md:px-0 mb-10 md:mb-0 pl-10 md:pl-0">
            <ProductMetrics
              heading={data.legacyserverheading}
              description={data.legacyserverdescription}
              scrollStart={data.scrollStart}
              scrollEnd={data.scrollEnd}
              color="text-white"
            />
            <div className="absolute md:hidden top-0 left-3">
              <img src="/img/products/last-arrow.svg" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 pr-5 mt-2 hidden md:block">
            <img src={data.arrow} alt="Long arrow" />
          </div>

          <div className="col-span-12 md:col-span-3 px-3 pl-10 md:pl-0">
            <ProductMetrics
              heading={data.last9heading}
              description={data.lastdescription}
              scrollStart={data.scrollStart}
              scrollEnd={data.scrollEnd}
              color="text-green-300"
            />
          </div>

          <div className="col-span-12 md:col-span-3 md:ml-10 my-auto mx-10 md:mx-0">
            {/* <img src={data.illustration} alt="High Cardinality" className="w-100 mx-auto md:mr-auto my-6 md:my-0" />
             */}
            {/* {scrollPosition >= data.scrollStart && props.showAnimation ? */}
            <div >
              {(data.state === "magicSectionIsVisible" ? magicSectionIsVisible : data.state === "magicSectionIsVisible1" ? magicSectionIsVisible1 : data.state === "magicSectionIsVisible2" ? magicSectionIsVisible2 : magicSectionIsVisible3 ) ?
                <div className="hidden lg:flex  mx-auto my-6 md:my-0 justify-center overflow-hidden">
                  {data.svg}
                </div>
                : <img src={data.illustration} alt="High Cardinality" className="hidden lg:block w-100 mx-auto md:mr-auto my-6 md:my-0" />}
              <div className="lg:hidden flex mx-auto my-6 md:my-0 justify-center overflow-hidden">
                {data.svg}
              </div>
            </div>
          </div>
          {data.horizontalborder === true && <div className="col-span-12 opacity-10 my-3 md:my-8">
            <hr />
          </div>}
        </div>
      ))
      }
    </>
  )
}

export default metricsrow