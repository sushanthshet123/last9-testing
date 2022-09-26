/* eslint-disable */
import * as React from "react"
import Clients from "../components/common/clients"
import Layout from "../components/common/layout"
import Seo from "../components/common/seo"
import Banner from "../components/home/banner"
import Blogcard from "../components/home/Blogcard"
import BlogSlider from "../components/home/Blogcard/blogSlider"
import Cta from "../components/home/cta"
import HowItsWork from "../components/home/how-its-work"
import Products from "../components/home/products"
import Testimonials from "../components/home/testimonials"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <Clients />
    <HowItsWork />
    <div className="overflow-hidden">
      <Testimonials />
    </div>
    <Products />
    <div className="py-8">
      <Cta />
    </div>
    {/* blog section start */}
    <section className="gradient-bg md:pt-10 pb-5">
      <section className="flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-center md:py-12 py-5 pt-10 md:text-5xl text-4xl max-w-lg manrope-extrabold mx-auto text-black">
            From our Blog
          </h1>
          <div className="hidden md:block pb-16">
            <Blogcard />
          </div>
        </div>
      </section>
      <div className="md:hidden block">
        <BlogSlider />
      </div>
    </section>
    {/* blog section end */}

  </Layout>
)

export const Head = () => <Seo
  title="Last9 — The Reliability Platform"
  description="Last9 is an change intelligence platform for software reliability."
/>

export default IndexPage
