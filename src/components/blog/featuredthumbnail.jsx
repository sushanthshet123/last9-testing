import React from "react";
import { Link } from "gatsby";
import { PropTypes } from "prop-types";

const FeaturedThumbnail = ({ post }) => {

  return (
    <>
      <div className="sm:col-span-12 lg:col-span-4 mb-8 md:mb-0 relative pr-8 md:pr-0 posthover cursor-pointer">
        <Link to={`/blog/${post.slug}`}>
          <div className="grid grid-cols-12 gap-4">
            <div
              className="bg-cover bg-no-repeat w-full featured-thumbnail bg-center rounded-3xl col-span-6 md:col-span-12"
              style={{ backgroundImage: `url(${post.feature_image})` }}
            />
            <div className="col-span-6 md:col-span-12"><h1 className="text-md lg:text-2xl blog-title pt-5 manrope-extrabold">{post.title}</h1></div>
          </div>
        </Link>
      </div>
    </>
  )
}

FeaturedThumbnail.propTypes = { post: PropTypes.object }

FeaturedThumbnail.defaultProps = { post: `` }

export default FeaturedThumbnail