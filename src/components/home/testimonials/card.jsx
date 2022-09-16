import * as React from "react"
import PropTypes from "prop-types"
import { cardData } from "../data"
import * as style from "../index.module.css"

const Card = () => (
  <section className="grid lg:grid-cols-2 gap-6">
    {cardData.map((data) => (
      <div key={data.name} className={`${style.testmonial_card} px-4 py-5 sm:px-6 rounded-xl`}>
        <div className="p-5">
          <div className="flex-shrink-0">
            <img
              className={`rounded-full ${data.size === "sm" ? "h-16" : ""}`}
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className="text-white manrope-regular py-5 min-h-[135px]">
            <p>
              {data.description}
            </p>
          </div>
          <div className="flex space-x-3 pt-2">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={data.profile}
                alt={data.name}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm manrope-semibold text-white">
                {data.name}
              </p>
              <p className="text-sm light-green font-mono">
                {data.designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
)

Card.propTypes = { siteTitle: PropTypes.string }

Card.defaultProps = { siteTitle: `` }

export default Card
