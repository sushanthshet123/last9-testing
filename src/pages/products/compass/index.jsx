/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from "react"
import Layout from "../../../components/common/layout"
import Metricsrow from "../../../components/product/metricsrow"
import CTA from "../../../components/product/cta"
import { metricsDataCompass } from "../../../components/product/data"
import Clients from "../../../components/common/clients"
import CompassBanner from "../../../components/product/compassBanner"
import CompassSecondaryBanner from "../../../components/product/compassSecondaryBanner"
import Seo from "../../../components/common/seo"
import Blogcard from "../../../components/home/Blogcard"
import BlogSlider from "../../../components/home/Blogcard/blogSlider"

const Compass = () => {

  const myRef = useRef();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const observer = new IntersectionObserver((entries, observer) => {

      const entry = entries[0];

      if (showAnimation && entry.isIntersecting)
        setShowAnimation(false)
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <Layout>
      <CompassBanner />
      <CompassSecondaryBanner />
      <section className="product-bg md:pb-20" id="products">
        <h1 className="text-center lg:w-2/3 mx-auto md:leading-tight text-white manrope-extrabold heading px-10 md:px-20 py-16 md:mb-10">Reliability to the last9 <br /> with Compass </h1>
        <div className="max-w-6xl mx-auto md:p-10 lg:p-0">
          <Metricsrow data={metricsDataCompass} showAnimation={showAnimation} />
        </div>
      </section>
      <div>
        <Clients />
      </div>
      {/* blog section start */}
      <section className="flex items-center justify-center pb-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-center md:py-12 py-5 pt-10 md:text-5xl text-4xl max-w-lg manrope-extrabold mx-auto text-black">
            From our stables
          </h1>
          <div className="hidden md:block pb-16">
            <Blogcard />
          </div>
        </div>
      </section>
      <div className="md:hidden block">
        <BlogSlider />
      </div>
      {/* blog section end */}
      <section id="cta" className="max-w-6xl mx-auto py-8 md:px-10 lg:px-0 " ref={myRef} >
        <CTA />
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Compass"
  description="🟢 Change detection so easy; Darwin wish they had it. Compass. 🟢" />

export default Compass