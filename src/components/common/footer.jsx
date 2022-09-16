import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="pt-4 pb-5">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 lg:px-8">
      <div className="grid lg:grid-cols-4 lg:gap-20 gap-10">
        <div className="col-span-2 lg:col-span-1 mx-auto">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-5 text-center lg:text-start">
            <div className="lg:col-span-2 justify-self-center">
              <img src="/footer/discord.svg" className="w-full h-auto ml-6 md:ml-1" />
            </div>
            <div className="col-span-4">
              <h1 className="lg:text-lg text-xl manrope-extrabold">Join the Last9 User Group</h1>
              <a href="https://discord.com/invite/Q3p2EEucx9" target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="inline-flex items-center px-5 py-2 my-2 border border-black
                shadow-sm text-sm manrope-semibold rounded-md text-gray-900 bg-white
                  hover:bg-gray-50 focus:outline-none"
                >
                  Open Discord
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 mx-auto">
          <div className="grid md:grid-cols-6 grid-cols-1 text-center lg:text-start">
            <div className="lg:col-span-2 lg:justify-self-end">
              <img src="/footer/soc.svg" className="pb-2 md:pb-0 mx-auto lg:h-16 h-20" />
            </div>
            <div className="col-span-4 lg:ml-6">
              <h1 className="lg:text-lg text-xl manrope-extrabold">SOC2 Type II certified</h1>
              <p className="text-sm lg:text-sm manrope-regular pt-2 px-10 lg:px-0">
                Last9 cares deeply about its customer’s data and is SOC2 Type II
                certified. Please contact us at hello@last9.io for the report.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between md:pt-10 pt-12">
        <div className="lg:flex lg:justify-between justify-center">
          <div className="flex justify-center">
            <a href="https://twitter.com/last9io" target="_blank" rel="noopener noreferrer">
              <img src="/footer/twitter.svg" className="h-5 lg:mt-5 lg:mr-5 mx-4" />
            </a>
            <a href="https://www.linkedin.com/company/last9/" rel="noopener noreferrer" target="_blank">
              <img src="/footer/linkedIn.svg" className="h-5 lg:mt-5 lg:mx-5 mx-4" />
            </a>
            <a href="/blog" className="flex items-center h-5 lg:mt-5 lg:mx-5 mx-4" rel="noopener noreferrer">
              <img src="/footer/blog.svg" className="mr-2" /><span>Blog</span>
            </a>
          </div>
          <p className="mx-5 text-gray-400 text-sm text-center pt-7 md:pt-5 manrope-regular">&copy;
            <span>{new Date().getFullYear()} {" "}</span>
            {" "}Last9. All rights reserved.
          </p>
        </div>
        <div className="flex lg:justify-between justify-center pt-5 lg:pt-0">
          <Link to="/privacy" className="text-sm md:mr-5 lg:mt-5 mx-5 text-gray-400 manrope-regular">Privacy</Link>
          <Link to="/terms" className="text-sm md:mr-5 lg:mt-5 mx-5 text-gray-400 manrope-regular">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = { siteTitle: PropTypes.string }

Footer.defaultProps = { siteTitle: `` }

export default Footer
