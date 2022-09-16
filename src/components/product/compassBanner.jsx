import * as React from "react"
import * as styles from "./product.module.css"

const CompassBanner = () => (
  <section className="bg-white lg:py-10 pt-10">
    <div className={`max-w-4xl mx-auto`}>
      <div className="text-center md:pb-0 pb-32">
        <div className="flex justify-center">
          <img src="/img/products/compass.svg" className="text-center" alt="Levitate" />
        </div>
        <h1 className="text-6xl manrope-extrabold">Compass</h1>
        <p className="my-5 text-2xl opacity-50 md:px-3 px-10 py-3 manrope-medium !leading-3">
        Transform microservice chaos into operational clarity
        </p>
        <a href="/schedule-demo"
          className={`rounded-md manrope-semibold text-base hover:bg-black px-6 py-3 block md:inline-block mx-4 md:mx-0 text-white bg-black primary-btn`}>
          Request a demo
        </a>
        <div className={`${styles.compassBg} md:hidden p-5 py-10 flex justify-center`}>
          <div className={`${styles.compass_mobile_banner}`}></div>
        </div>
      </div>
    </div>
  </section>
)

export default CompassBanner