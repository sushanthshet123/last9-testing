/* eslint-disable max-len */
import React from "react"
import Layout from "../../components/common/layout"
import Banner from "../../components/product/banner"
import SecondaryBanner from "../../components/product/secondarybanner"
import Metricsrow from "../../components/product/metricsrow"
import CTA from "../../components/product/cta"
import { metricsData1, metricsDataCompass } from "../../components/product/data.js"
import Clients from "../../components/common/clients"
import CompassBanner from "../../components/product/compassBanner"
import CompassSecondaryBanner from "../../components/product/compassSecondaryBanner"
import Seo from "../../components/common/seo"

const Products = () => {
  return (
    <Layout>
      <div>
        <Banner />
        <SecondaryBanner />
        <section className="product-bg" id="products">
          <h1 className="text-center lg:w-2/4 mx-auto text-white md:leading-tight manrope-extrabold text-3xl px-10 md:text-5xl md:px-20 pb-16 md:mb-10">Outgrowing Prometheus with Levitate</h1>
          <div className="max-w-6xl mx-auto md:p-10 lg:p-0">
            <Metricsrow data={metricsData1} />
          </div>
        </section>
      </div>
      <div className="pt-20">
        <CompassBanner />
        <CompassSecondaryBanner scrollStart={"2800"} scrollStop={"3200"} scrollInitial={400} />

        <section className="product-bg" id="products">
          <h1 className="text-center lg:w-2/3 mx-auto text-white manrope-extrabold text-3xl px-10 md:text-5xl md:px-20 py-16 md:mb-10">Reliability to the last 9 with Compass </h1>
          <div className="max-w-6xl mx-auto md:p-10 lg:p-0">
            <Metricsrow data={metricsDataCompass} />
          </div>
        </section>
        <div className="md:pt-16">
          <Clients />
        </div>
        <section id="cta" className="max-w-6xl mx-auto py-8 md:px-10 lg:px-0">
          <CTA />
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Last9 — The Reliability Platform"
  description="🟢 A managed timeseries databse to uplift your metrics woes, because self-management sucks like gravity. Levitate. Change detection so easy; Darwin wish they had it. Compass. 🟢"
/>
export default Products