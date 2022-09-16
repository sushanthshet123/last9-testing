import React from "react"
import { Link } from "gatsby"
import { updateFeaturedPost } from "../../lib/helpers"
import FeaturedPost from "./featuredPost"
import Post from "./post"
import FeaturedThumbnail from "./featuredthumbnail"
import Slider from "react-slick"
import { PropTypes } from "prop-types";
import { ArrowRightIcon } from "@heroicons/react/outline"

const sliderSettings = {
  infinite: false,
  arrows: false,
  dots: true,
  slidesToShow: 1.1,
  slidesToScroll: 1,
}

const Posts = ({ posts, heading, viewAllLink = false, showFeaturedposts = false, featured = false, searched = false, showSlider = true, news = false }) => {
  // Only for home page, show 1st article as featured post
  const featuredPosts = showFeaturedposts ? updateFeaturedPost(posts) : posts
  const data = posts !== null ? featuredPosts : []

  let mobileSliderPosts = posts !== null ? posts.slice(1, 4) : []

  if (searched)
    mobileSliderPosts = posts

  return (
    <div>
      {!featured && (
        <>
          <div className="flex justify-between pt-6 items-center pr-8 md:pr-0">
            <h1 className="text-3xl md:text-5xl manrope-extrabold mb-7 lg:my-10">{heading}</h1>
            {viewAllLink && (
              <Link to={viewAllLink}>
                <a className="font-bold capitalize link flex">
                  <span className="pr-2 manrope-bold">View all </span>
                  <ArrowRightIcon className="h-6" />
                </a>
              </Link>
            )}
          </div>
          {!news && posts !== null && posts.length > 0 && <hr className="text-white text-opacity-25 mr-8 mb-8" />}
          <div className="hidden lg:block">
            <div
              className="grid md:grid-cols-12 md:gap-12"
            >
              {data.map((post) => (
                <React.Fragment key={post.id}>
                  {post.is_featured && <FeaturedPost post={post} />}
                  {!post.is_featured && <Post news={news} post={post} smLayout={true} />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div
            className="lg:hidden blogslicdots"
          >
            {data.map((post) => (
              <React.Fragment key={post.id}>
                {heading === "Latest"
                  ? post.is_featured && (
                    <div className="mt-10 pr-8">
                      <FeaturedPost post={post} />
                    </div>
                  )
                  : ""}
              </React.Fragment>
            ))}

            {!searched && showSlider && (
              <Slider {...sliderSettings} className="pt-2">
                {mobileSliderPosts.map((post) => (
                  <React.Fragment key={post.id}>
                    {
                      <div className="lg:mt-10">
                        <Post
                          // News={news}
                          post={post}
                          smLayout={true}
                        />
                      </div>
                    }
                  </React.Fragment>
                ))}
              </Slider>
            )}

            {!searched && !showSlider && (
              <div className="pt-2">
                {posts?.map((post) => (
                  <React.Fragment key={post.id}>{<Post news={news} post={post} />}</React.Fragment>
                ))}
              </div>
            )}

            {searched && data.map((post) => <React.Fragment key={post.id}>{<FeaturedPost post={post} />}</React.Fragment>)}
          </div>
        </>
      )}
      {featured && (
        <>
          <div className="">
            <h1 className="text-3xl md:text-5xl font-medium py-10">{heading}</h1>
            {posts !== null && posts.length > 0 && <hr className="text-white text-opacity-25" />}
            <div
              className="grid md:grid-cols-12 md:gap-12 mt-8"
            >
              {data.map((post) => (
                <React.Fragment key={post.id}>{!post.is_featured && <FeaturedThumbnail post={post} />}</React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}

      {/* No data found if posts.length = 0 */}
      {posts !== null && posts.length === 0 && <h1 className="text-3xl font-medium my-10 text-center">No data found</h1>}

      {/* Loading  */}
      {posts === null && <h1 className="text-3xl font-medium my-10 text-center">Loading...</h1>}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  heading: PropTypes.string,
  viewAllLink: PropTypes.string,
  showFeaturedposts: PropTypes.bool,
  featured: PropTypes.string,
  searched: PropTypes.string,
  showSlider: PropTypes.string,
  news: PropTypes.string,
}

Posts.defaultProps = {
  posts: ``,
  heading: ``,
  viewAllLink: ``,
  showFeaturedposts: ``,
  featured: ``,
  searched: ``,
  showSlider: ``,
  news: ``,
}

export default Posts
