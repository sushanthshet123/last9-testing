import { Script } from "gatsby"
import * as React from "react"
import Layout from "../components/common/layout"
import Seo from "../components/common/seo"

const Schedule = () => (
  <Layout>
    <Seo title="Home" />
    <section className="gradient-blog z-50">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-6xl manrope-extrabold text-center">
          Schedule a Demo
        </h1>
        <p className="my-5 max-w-sm mx-auto text-xl opacity-50 md:px-3 px-10 manrope-medium text-center">
          Use the calendar below to schedule a demo with a Last9 team member.
        </p>
      </div>
      <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/apurva-chaudhary?embed=true"></div>

      <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Schedule a demo"
  description="Talk to us on how to bring in operational intelligence, and improve your software reliability."
/>

export default Schedule
