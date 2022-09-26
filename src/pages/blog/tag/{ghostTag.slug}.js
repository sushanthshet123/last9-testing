import React, { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import Pagination from "react-responsive-pagination";
import axios from "axios";

import Categories from "../../../components/blog/tag";
import Banner from "../../../components/common/banner";
import Posts from "../../../components/blog/posts";

import { tags } from "../../../components/common/data";
import Layout from "../../../components/common/layout";
import { useLocation } from "@reach/router";
import { graphql } from "gatsby";
import { Title, Link, Meta } from "react-head";

// URL to fetch tag based posts
// eslint-disable-next-line max-len
const ghostPostsURL = `${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?key=${process.env.GATSBY_GHOST_API_KEY}&order=published_at DESC&include=tags,authors&limit=9`;

const Tag = () => {
  const router = useLocation();
  // Const navigate = useNavigate();
  // Console.log( "router", router )

  const [clicked, setClicked] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [slug, setSlug] = useState(router.pathname.split("/")[3]);
  const [keyword, setkeyword] = useState("");
  const [searchResults, setSearhResults] = useState([]);

  // Include the changes due to long request time: fate removal of getServerSideProps and include axios!
  const [allPosts, setAllPosts] = useState([]);
  const [tag, setTag] = useState([]);

  // If page number changes, update the URL with page number
  useEffect(() => {
    if (router.pathname.split("?P=")[1])
      if (router.pathname.split("?P=")[1] !== page)
        setPage(router.pathname.split("?P=")[1]);


  }, [router]);

  // If search is clicked, auto focus text input
  useEffect(() => {
    if (clicked)
      inputRef.current.focus();

  }, [clicked]);

  // If blog slug changes, update slug so that the API is inovoked
  useEffect(() => {
    setSlug(router.pathname.split("/")[3]);
    setPage(1);
  }, [router]);

  // If page number changes, Call API
  useEffect(() => {
    if (slug) {
      setLoading(true);
      if (page !== 1) {
        scroller.scrollTo("all", {
          offset: -175,
          smooth: "easeOutCubic",
          duration: 500,
          delay: 0,
        });
        // eslint-disable-next-line no-unused-vars
        const baseURL = router.pathname.split("?");
        // Router.replace({ pathname: baseURL[0], query: { p: page } });
        // Navigate( `${baseURL[0]}?p=${page}`, { replace: true })
      }

      fetch(`${ghostPostsURL}&page=${page}&filter=tag:${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.posts);
          setPagination(data.meta.pagination);
          setLoading(false);
        });

      getDataApi("all").then((data) => {
        setAllPosts(data);
      })
    }
  }, [page, slug]);

  useEffect(() => {
    if (slug)
      axios
        .get(`${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/tags/slug/${slug}/?key=${process.env.GATSBY_GHOST_API_KEY}`)
        .then((res) => {
          setTag(res.data?.tags[0]);
        })

  }, [slug])


  const getDataApi = (limit = 9) => {
    const query = {
      order: "published_at DESC",
      include: "tags,authors",
      filter: `tags:${slug}`,
      limit: limit
    }
    return axios
      .get(`${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?key=${process.env.GATSBY_GHOST_API_KEY}`,
        { params: query })
      // Query must be passed as like the same not just as objects
      .then((res) => {
        return res.data.posts
      })
  }

  // To handle search click and close functionality
  const handleClicked = (data) => {
    // Update clicked to true or false
    setClicked(data);
    // On click, reset keyword to null
    setkeyword("");
  };

  // To handle keyword change functionality
  const handlekeywordchange = (data) => {
    setLoading(true);
    setkeyword(data);

    // Filter all posts and update results in searchResults state
    setSearhResults(
      allPosts.filter((data) => {
        // Filter method returns an array of values for which the conditions were true
        return (
          data.title.toLowerCase().includes(keyword.toLowerCase()) ||
          // Incluldes is a string method to return boolean incase of the string matched or not
          data.excerpt.toLowerCase().includes(keyword.toLowerCase())
        );
      })
    );

    setLoading(false);
  };

  // Ref to auto focus text input on open
  const inputRef = useRef(null);
  const fbimg = "/home/banner.jpg";
  const twitterimg = "/home/banner.jpg"
  return (
    <Layout>
      <Meta charSet="utf-8" />
      <Title>{tag?.name}</Title>
      <Meta name="description" content={`MTTR obsession > Uptime illusionary fatigue. Want to know more on how we think
         of Change Intelligence, and ${tag?.name}? Freshly minted from our stables`} />
      <Link rel="canonical" href="http://mysite.com/example" />
      <Meta name="twitter:title" content={tag?.name} />
      <Meta property="og:image" content={`${fbimg}`} />
      <Meta property="og:description" content={`MTTR obsession > Uptime illusionary fatigue. Want to know more on how we think
         of Change Intelligence, and ${tag?.name}? Freshly minted from our stables`} />
      <Meta property="og:title" content={tag?.name} />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:description" content={`MTTR obsession > Uptime illusionary fatigue. Want to know more on how we think
         of Change Intelligence, and ${tag?.name}? Freshly minted from our stables`} />
      <Meta name="twitter:image" content={`${twitterimg}`} />
      <Banner />

      {/* Tags */}
      <Categories
        tags={tags}
        clicked={clicked}
        handleClick={handleClicked}
        handleChange={handlekeywordchange}
        inputRef={inputRef}
        active={tag.slug}
        scrollType="link"
      />
      {/* End tags */}
      <section className="gradient-blog z-50">
        {keyword === "" && (
          <>
            {/* Tag Posts */}
            <section className="py-5">
              <div className="max-w-6xl mx-auto px-8 lg:px-8" id="articles">
                <Posts posts={posts} heading={tag.name} showSlider={false} />
              </div>
            </section>
            {/* End tag posts */}

            {/* pagination */}
            <section className="py-8">
              <div className="max-w-6xl mx-auto px-8 sm:px-8 lg:px-8 flex md:justify-end justify-center pr-5 md:pr-0">
                {!loading && pagination.pages >= 2 && (
                  //Now changed to 1 from 2 NA
                  <Pagination
                    current={pagination.page}
                    total={pagination.pages}
                    onPageChange={setPage}
                  />
                )}
              </div>
            </section>
          </>
        )}
      </section>
      {/* Search results */}
      {keyword !== "" && (
        <section className="py-8">
          <div className="w-10/12 mx-auto pr-5">
            <Posts
              posts={searchResults}
              heading={`Search Results for '${keyword}'`}
              searched={true}
              showSlider={false}
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Tag;

export const query = graphql`
      query ($id: String!,) {
        tag : ghostTag(slug: {eq: $id}) {
          id
          slug
        }
      }
   
    `
