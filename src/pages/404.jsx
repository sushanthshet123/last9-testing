import * as React from "react"

import Layout from "../components/common/layout"
import Seo from "../components/common/seo.jsx"

const NotFoundPage = () => (
  <Layout>
    <section className="gradient-bg pageNotFound flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl manrope-extrabold">404</h1>
        <p className="text-xl manrope-regular pt-4">The page could not be found</p>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
