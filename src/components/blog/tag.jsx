import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router";
import { Link as ScrollLink } from "react-scroll"
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { PropTypes } from "prop-types";

const Categories = ( props ) => {
  const location = useLocation();

  const { clicked, scrollType = "link", } = props
  // On change of keyword, call handleChange function from parent to update the keyword
  const handleKeywordChange = ( e ) => {
    props.handleChange( e.target.value )
  }


  const CategoryLink = ({ tag }) => {
    if ( scrollType === "link" )
      return (
        <Link to={`/blog/tag/${tag.slug}`} key={tag.id}>
          <p key={tag.id} className={`rounded-full py-2 px-6 mr-3 lg:mr-5
           capitalize lg:mb-0 mb-6 text-black lg:mb-3 cursor-pointer bg-gray-100  manrope-extrabold hover:text-white hover:bg-black 
           ${location.pathname.split( "/" )[3] === tag.slug ? `tag-background text-white` : ""}`}>
            {tag.name}
          </p>
        </Link>
      )
    else
      return (
        <ScrollLink
          className={`rounded-full flex-shrink-0 py-2 px-6 mr-3 lg:mr-5
           capitalize lg:mb-0 mb-6 text-black lg:mb-3 cursor-pointer bg-gray-100 manrope-extrabold hover:bg-black hover:text-white
          `} to={tag.slug} spy={true} smooth={true} duration={500} >
          {tag.name}
        </ScrollLink>
      )
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-8 sm:px-8 py-8 lg:px-8 hidden lg:block">
        <div className="flex justify-between ">
          <div className="flex overflow-x-auto lg:overflow-x-hidden">
            {/* If search is clicked, hide tags else show all tags with search icon */}
            {
              !clicked &&
                props.tags.map( ( tag ) => (
                  // Scroll in the same page or redirect to other page based on prop
                  <CategoryLink tag={tag} key={tag.slug} />
                ) )
            }

            {
              !clicked &&
                <Link to={`/blog/all#articles`} className="mt-2">
                  <a className={`rounded-full flex-shrink-0 py-2 text-black px-6 mr-5 capitalize bg-gray-100 manrope-extrabold hover:bg-black hover:text-white
                  ${location.pathname.split( "/" )[2] === "all" ? "tag-background text-white" : ""}`}>
                        All
                  </a>
                </Link>
            }
          </div>
          <div className={`searchbox ${clicked ? "active-width" : "normal-width"}`}>
            {/* Show search icon only if clicked is false */}
            {
              !clicked &&
                <div className="inline-block cursor-pointer mt-1"
                  onClick={() => props.handleClick( true )}
                >
                  <SearchIcon className="inline-block px-1 h-5" />
                  <span className="hidden md:inline-block manrope-extrabold mt-2">
                        Search
                  </span>
                </div>
            }

            {/* Show text input if cliked is true */}
            {
              clicked &&
                <div className={`flex justify-between ${clicked ? "inline-block w-full pb-2" : "hidden"}`}
                  style={{ borderBottom: "2.5px solid black" }}>
                  <input
                    type="text"
                    className={`${clicked ? "search-input w-11/12" : "hidden"}`}
                    placeholder="Search for a specific article"
                    onChange={handleKeywordChange}
                    ref={props.inputRef}
                  />
                  <XIcon className="px-2 h-6 cursor-pointer" onClick={() => props.handleClick( false )} />
                </div>
            }
          </div>
        </div>
      </div>
      {/* Search & Tags - mobile */}
      <div className="md:hidden">
        <div className="relative mx-6 mb-8">
          <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-3 bg-dark rounded-full
            placeholder-gray-400 sm:text-sm"
            placeholder="Search for a specific article"
            onChange={handleKeywordChange}
            ref={props.inputRef}
          />
        </div>
        <div className="flex flex-wrap justify-center">

          {
            !clicked &&
              props.tags.map( ( tag ) => (
                // Scroll in the same page or redirect to other page based on prop
                <CategoryLink tag={tag} key={tag.slug} />
              ) )
          }
          {
            !clicked &&
              <Link to={`/blog/all#articles`} className="mt-2">
                <a className={`rounded-full py-2 px-6 mr-3 lg:mr-5 text-black capitalize bg-gray-100  manrope-extrabold hover:bg-black hover:text-white
                 ${location.pathname.split( "/" )[2] === "all" ? "tag-background text-white" : "bg-gray-100"}}`}>
                      All
                </a>
              </Link>
          }

        </div>
      </div>
      {/* Search & Tags - mobile */}
    </section>
  )
}

Categories.propTypes = {
  clicked: PropTypes.bool,
  scrollType: PropTypes.string,
  active: PropTypes.string,
  tag: PropTypes.string,
  handleChange: PropTypes.func,
  tags: PropTypes.array,
  handleClick: PropTypes.func,
  inputRef: PropTypes.object,
}

Categories.defaultProps = {
  clicked: ``,
  scrollType: ``,
  active: ``,
  tag: ``,
  handleChange: ``,
  tags: ``,
  handleClick: ``,
  inputRef: ``,
}

export default Categories
