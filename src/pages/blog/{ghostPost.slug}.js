/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { SocialIcon } from "react-social-icons";
import { useLocation } from "@reach/router";
import { authorSocialLinks } from "../../components/common/data";
import shareThis from "share-this";
import * as twitterSharer from "share-this/dist/sharers/twitter";
import Layout from "../../components/common/layout";
import { getPost } from "../../lib/post";
import ReadingProgress from "../../components/common/ReadingProgress"
import { graphql } from "gatsby";
import { Title, Link, Meta } from "react-head";

const ghostPostsURL = `${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?
key=${process.env.GATSBY_GHOST_API_KEY}&order=published_at DESC&include=tags,authors&limit=4`

const BlogDetails = ( ) => {
  const [url, setUrl] = useState("");
  const [relatedTag, setrelatedTag] = useState(null)
  const location = useLocation();
  const [post, setPost] = useState();
  // eslint-disable-next-line no-unused-vars
  const [slug, setSlug] = useState();

  // eslint-disable-next-line no-unused-vars

  const filteredslug = location.pathname.split("/");
  const filteredRouter = filteredslug[2];
  useEffect(() => {
    if (filteredRouter)
      getPost(filteredRouter).then((res) => {
        setPost(res)
      })
  }, [])


  const relatedpostsFilter = relatedTag?.filter((elem) => elem.slug !== filteredRouter);

  useEffect(() => {
    setUrl(`${process.env.NEXT_PUBLIC_URL}/blog/${post?.slug}`);
    setSlug(post?.slug)
  }, [post?.slug]);
  // Share selected word/statement on twitter
  useEffect(() => {
    const selectionShare = shareThis({
      selector: "#shareable",
      sharers: [twitterSharer]
    });

    selectionShare.init();

  }, []);


  // Get related articles by passing the tag or category of the article that you are currently viewing
  useEffect(() => {
    if (post?.primary_tag !== null) {
      const slug = post?.primary_tag.slug;
      fetch(`${ghostPostsURL}&filter=tag:${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setrelatedTag(data.posts);
        });
    }
  }, [post]);

  const target = React.createRef();

  return (
    <Layout>
      <Meta charSet="utf-8" />
      <Title>{post?.title}</Title>
      <Meta name="description" content={post?.excerpt} />
      <Link rel="canonical" href="http://mysite.com/example" />
      <Meta property="og:title" content={post?.title} />
      <Meta property="og:description" content={post?.excerpt} />
      <Meta property="og:image" content={`${post?.feature_image}`} />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content={post?.title} />
      <Meta property="twitter:site" content="@last9io" />
      <Meta name="twitter:description" content={post?.excerpt} />
      <Meta name="twitter:image" content={`${post?.feature_image}`} />
      <ReadingProgress target={target} />
      <div ref={target} className={`w-full lg:w-10/12 mx-auto py-8 px-5 lg:px-0`}>
        <div className="post-details max-w-screen-sm mx-auto">
          <h1 className=" text-3xl md:text-5xl lg:text-5xl mb-5 lg:mt-5 manrope-bold">{post?.title}</h1>
          <p className="text-xl py-5 excerpt">{post?.excerpt}</p>

          <hr className="text-opacity-25" />

          <div className="mt-8 uppercase meta md:flex md:justify-between">
            <p className="mb-4 md:mb-0 font-mono">{dateFormat(post?.published_at, "mmm dS, yy")} | {post?.reading_time} min read</p>
            <div className="flex items-center">
              <p className="md:inline block font-mono">Share: </p>
              <TwitterShareButton
                url={url}
                title={post?.title}
                className="Demo__some-network__share-button mx-2"
              >
                <TwitterIcon size={30} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={url}
                title={post?.title}
                quote={post?.title}
                className="Demo__some-network__share-button mx-2"
              >
                <LinkedinIcon size={30} round />
              </LinkedinShareButton>

              <WhatsappShareButton
                url={url}
                className="Demo__some-network__share-button mx-2"
                title={post?.title}
              >
                <WhatsappIcon size={30} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>

        <div className="lg:my-12 mt-8">
          {post?.og_image ?
            (
              <figure className="post-full-image">
                <img src={post?.og_image} alt={post?.title} className="md:w-4/5 mx-auto blog-image" />
              </figure>
            )
            :
            (
              <figure className="post-full-image">
                <img src={post?.feature_image} alt={post?.title} className="md:w-4/5 mx-auto blog-image" />
              </figure>
            )}
          {/* End Post image */}
        </div>

        <div className="mx-auto max-w-screen-sm" id="target-el">
          {/* Author bio */}
          <div className="mt-16 lg:mt-0">
            <div className="grid grid-cols-12 md:gap-16 gap-10 pt-12 lg:pt-3">
              <div
                className="col-span-2 manrope-regular inline-block rounded-full overflow-hidden h-16 w-16"
                aria-hidden="true"
              >
                {
                  post?.primary_author?.profile_image !== null &&
                  <img className="rounded-full h-full w-full"
                    src={post?.primary_author?.profile_image}
                    alt={`${post?.primary_author?.name}'s profile picture'`} />
                }
                {
                  post?.primary_author?.profile_image === null &&
                  <span className="inline-block h-full w-full overflow-hidden bg-gray">
                    <svg className="h-full w-full text-white" fill="white" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354
                          11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                }
              </div>

              <div className="md:col-span-10 col-span-7">
                <h4 className="text-xl md:mb-5 mb-2 md:mt-3 manrope-bold">Written by {" "}
                  <span className="text-secondary manrope-bold">{post?.primary_author?.name}</span>
                </h4>
                <p className="text-sm break-words manrope-regular">{post?.primary_author?.bio}</p>
                <div className="md:mt-3 my-5">
                  {authorSocialLinks?.map((link) =>
                    post?.primary_author?.[link.network] !== null &&
                    <SocialIcon
                      className="mr-2 cursor-pointer"
                      key={link.id} network={link.network}
                      style={{ width: "2rem", height: "2rem" }}
                      url={`${link.link}${post?.primary_author?.[link.network]}`}
                      bgColor="#63b38f"
                      fgColor="#fff"
                      target="_blank"
                      rel="noreferrer"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="post-content" >
            <hr className="text-opacity-25" />
            <div className="html_content"
              dangerouslySetInnerHTML={{ __html: post?.html, }}
            />
          </div>
        </div>
      </div>

      {/* Related articles */}

      <div className="py-10">
        <div className="max-w-6xl mx-auto md:px-7 px-5">
          <div className="grid grid-cols-3 gap-12">
            {
              relatedpostsFilter?.map((data, index) => (
                <>
                  {
                    // Show only 3 posts
                    index <= 2 &&
                    <div key={data.id} className="lg:col-span-1 col-span-3 posthover mx-auto">
                      <a href={`/blog/${data?.slug}`}>
                        <img src={data?.feature_image} className="h-52 w-full" alt={data?.title} />
                        <h1 className="text-xl py-3 manrope-bold">{data?.title}</h1>
                        <p className="text-sm opacity-50 manrope-regular">{data.excerpt.substring(0, 100) + "..."} </p>
                        <div className="flex pt-5">
                          <div>
                            {
                              data?.primary_author?.profile_image !== null &&
                              <img className="rounded-full h-12 w-12"
                                src={data?.primary_author?.profile_image}
                                alt={`${data?.primary_author?.name}'s profile picture'`} />
                            }
                            {
                              data?.primary_author?.profile_image === null &&
                              <span className="inline-block w-10 w-10 overflow-hidden bg-gray">
                                <svg className="h-full w-full text-white" fill="white" viewBox="0 0 24 24">
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354
                                        11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                            }
                          </div>
                          <div className="ml-5">
                            <p className="text-sm">Written by {" "}
                              <span className="text-secondary font-mono ">{data?.primary_author?.name}</span>
                            </p>
                            <p className="text-sm md:mb-5 mt-1 font-mono">
                              {dateFormat(data.published_at, "mmm dS, yy")} | {data?.reading_time} min read
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  }
                </>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default BlogDetails

export const query = graphql`
      query($id: String!,) {
        blog : ghostPost(slug: {eq: $id}) {
          slug
        }
      }      
    `
