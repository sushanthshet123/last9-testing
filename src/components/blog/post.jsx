import React from "react";
import { Link } from "gatsby";
import dateFormat from "dateformat";
import { PropTypes } from "prop-types";

const Post = ({ post, smLayout = false, news=false }) => {
  const slugPage = news ? "news" : "blog";
  return (
    <>
      {smLayout &&
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 flex flex-col mb-12 md:mb-0 md:mr-8 lg:mr-0 p-2 lg:p-0">
          <Link to={`/${slugPage}/${post.slug}`}>
            <a className="posthover">
              <div
                className="bg-cover bg-no-repeat w-full h-40 lg:h-52 bg-center rounded-3xl"
                style={{ backgroundImage: `url(${post.feature_image})` }}
              />
              <h3 className="blog-title text-lg md:text-2xl pb-4 pt-5 manrope-extrabold">{post.title}</h3>
              <p className="flex-1 text-black">{post.excerpt.substring( 0, 100 ) + "..."} </p>
              <div className="mt-5 text-sm tracking-widest text-opacity-50">
                <p className="uppercase font-mono font-bold">{post.authors[0].name}</p>
                <p className="font-mono font-bold">{dateFormat( post.published_at, "mmm dS, yy" )} | {post.reading_time} min read</p>
              </div>
            </a>
          </Link>
        </div>
      }

      {!smLayout &&
        <Link to={`/${slugPage}/${post.slug}`}>
          <a className="posthover">
            <div className="grid grid-cols-12 gap-x-5 pt-8 md:pt-0 md:py-5">
              <div
                className="bg-cover bg-no-repeat w-full h-40 lg:h-52 bg-center rounded-3xl col-span-7"
                style={{ backgroundImage: `url(${post.feature_image})` }} />
              <div className="col-span-5">
                <h3 className="text-sm md:text-2xl pb-2 pt-5 text-secondary font-normal">{post.title}</h3>
                <div className="mt-2 text-sm tracking-widest text-opacity-50">
                  <p className="uppercase font-normal text-xsm">{post.authors[0].name}</p>
                  <p className="text-xsm">{dateFormat( post.published_at, "mmm dS, yy" )} | {post.reading_time} min read</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      }
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  smLayout: PropTypes.bool,
  news: PropTypes.string
}

Post.defaultProps = {
  post: ``,
  smLayout: ``,
  news: ``
}

export default Post