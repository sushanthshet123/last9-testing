import React from "react";
import { Link } from "gatsby";
import dateFormat from "dateformat";
import { PropTypes } from "prop-types";

const FeaturedPost = ({ post }) => {
  return (
    <div className="col-span-12 posthover">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 lg:col-span-8">
          <Link to={`/blog/${post.slug}`}>
            <a>
              <div className="bg-cover bg-no-repeat w-full h-40 md:h-96 min-h-full bg-center rounded-3xl"
                style={{ backgroundImage: `url(${post.feature_image})`, backgroundPosition: "top center" }}
              />
            </a>
          </Link>
        </div>
        <div className="col-span-8 lg:col-span-4">
          <Link to={`/blog/${post.slug}`}>
            <a>
              <h1 className="text-lg md:text-4xl manrope-extrabold">{post.title}</h1>
              <p className="mt-5 text-black manrope-regular">{post.excerpt.substring( 0, 200 ) + "..."}</p>
              <div className="mt-5 text-sm tracking-widest text-opacity-50 uppercase">
                <p className="font-mono font-bold">{post.authors[0].name}</p>
                <p className="font-mono font-bold">{dateFormat( post.published_at, "mmm dS, yy" )} | {post.reading_time} min read</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

FeaturedPost.propTypes = { post: PropTypes.object }

FeaturedPost.defaultProps = { post: `` }

export default FeaturedPost