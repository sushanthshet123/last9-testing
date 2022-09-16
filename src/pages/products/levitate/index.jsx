/* eslint-disable max-len */
import React, { useRef, useEffect, useState } from "react"
import Layout from "../../../components/common/layout"
import Banner from "../../../components/product/banner"
import SecondaryBanner from "../../../components/product/secondarybanner"
import Metricsrow from "../../../components/product/metricsrow"
import CTA from "../../../components/product/cta"
import { metricsData } from "../../../components/product/data.js"
import Clients from "../../../components/common/clients"
import Seo from "../../../components/common/seo"
import Blogcard from "../../../components/home/Blogcard"
import BlogSlider from "../../../components/home/Blogcard/blogSlider"

const Levitate = () => {
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
      <Banner />
      <SecondaryBanner />
      <section className="product-bg" id="products">
        <h1 className="text-center lg:w-2/4 mx-auto text-white md:leading-tight manrope-extrabold text-3xl px-10 md:text-5xl md:px-20 pb-16 md:mb-10">Outgrowing Prometheus with Levitate</h1>
        <div className="max-w-6xl mx-auto md:p-10 lg:p-0">
          <Metricsrow data={metricsData} showAnimation={showAnimation} />
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

export const Head = () => <Seo title="Levitate"
  description="🟢 A managed timeseries databse to uplift your metrics woes, because self-management sucks like gravity. Levitate. 🟢" />

export default Levitate