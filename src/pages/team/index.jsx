import * as React from "react"
import Layout from "../../components/common/layout"
import Seo from "../../components/common/seo"
import TeamMembers from "../../components/teams/member"
import CTA from "../../components/teams/cta"


const Team = () => (
  <Layout>
    <div className="max-w-7xl mx-auto">
      <h1 className="lg:w-2/4 mx-auto pt-20 pb-16 text-center text-5xl manrope-extrabold md:px-4 tracking-tight sm:text-5xl lg:text-7xl">
        The Team
      </h1>
    </div>

    <TeamMembers />

    <div className="max-w-xl mx-auto text-center py-16 px-5">
      <h1 className="manrope-extrabold text-xl">
        Last9 helps businesses gain insights into the Rube Goldberg of
        micro-services.{" "}
      </h1>
      <p className="manrope-regular py-5 text-sm las9-letter-spacing">
        With two products; Levitate &amp; Compass, we help understand, track,
        &amp; improve an org’s system dependencies. By reducing the toil for
        platform engineering teams, they can now focus on shipping
        reliable features &amp; products.
      </p>
      <p className="manrope-regular text-sm">
        Last9 recently raised a Series A round of $11 million, and is backed by Sequoia Capital, along with prominent angel investors.
      </p>
    </div>

    <CTA />

  </Layout >
)

export const Head = () => <Seo title="About — Last9"
  description="Last9 is an operational intelligence platform for software reliability." />

export default Team
