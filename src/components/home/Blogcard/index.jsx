import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { cardDataBlog } from "../data"
import * as style from "../index.module.css"

const Blogcard = () => (
  <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
    {cardDataBlog.map((data) => (
      <div key={data.name} className={`${style.blog_card} px-4 py-5 sm:px-6 rounded-xl cursor-pointer`}>
        <Link to={data.href}>
          <div>
            <div className={`flex space-x-3 pt-2 p-3 h-60 bg-cover bg-center`} style={{ backgroundImage: `url(${data.image})` }}>
              <div className="flex -space-x-2">
                {data.profile.map((img) => (
                  <img key={data.name}
                    className="inline-block h-8 rounded-full ring-2 ring-green-600"
                    src={img.image}
                    alt={img.name} />
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">
                  {data.profileName.map((img) => (
                    <>
                      <span key={data.name} className="manrope-semibold">
                        {img.name}
                      </span>
                      <br />
                    </>
                  ))}
                </p>
                <p className="text-sm mt-1">
                  <span className="light-green font-mono">
                    {data.time}
                  </span>
                </p>
              </div>
            </div>
            <div className={` p-3`}>
              <h1 className="light-green font-mono">{data.name}</h1>
              <h1 className="gradient-color text-xl manrope-extrabold">{data.title}</h1>
              <p className="text-white py-5 manrope-regular text-sm">{data.description}</p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </section>
)

Blogcard.propTypes = { siteTitle: PropTypes.string }

Blogcard.defaultProps = { siteTitle: `` }

export default Blogcard
