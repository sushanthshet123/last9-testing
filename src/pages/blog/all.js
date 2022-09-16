/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react"
import { useLocation } from "@reach/router"
import { scroller } from "react-scroll"
import Pagination from "react-responsive-pagination"

import Banner from "../../components/common/banner"
import Posts from "../../components/blog/posts"
import Categories from "../../components/blog/tag"

import { tags } from "../../components/common/data"
import Layout from "../../components/common/layout"
import axios from "axios"
import Seo from "../../components/common/seo"

const AllPosts = () => {
  const tag = tags.map((ele) => ele.slug)
  // URL to fetch tag based posts
  // eslint-disable-next-line max-len
  const ghostPostsURL = `${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?key=${process.env.GATSBY_GHOST_API_KEY}&order=published_at DESC&include=tags,authors&filter=tag:benefits&filter=tag:deep-dives&filter=tag:devops&filter=tag:failures&filter=tag:hans&filter=tag:last9&filter=tag:last9&filter=tag:last9-engineering&filter=tag:latency&filter=tag:monitoring&filter=tag:observability&filter=tag:slo&filter=tag:sre&filter=tag:sre-tooling`
  const router = useLocation()

  const [clicked, setClicked] = useState(false)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(1)
  const [posts, setPosts] = useState([])
  const [pagination, setPagination] = useState({})
  const [keyword, setkeyword] = useState("")
  const [searchResults, setSearhResults] = useState([])
  //Search result addition
  const [allPosts, setAllPosts] = useState([])

  // If page number changes, update the URL with page number
  useEffect(() => {
    if (router.pathname.split("?P=")[1])
      if (router.pathname.split("?P=")[1] !== page)
        setPage(router.pathname.split("?P=")[1])
  }, [router])

  // If search is clicked, auto focus text input
  useEffect(() => {
    if (clicked) inputRef.current.focus()
  }, [clicked])

  // If page number changes, Call API
  useEffect(() => {
    setLoading(true)

    // To avoid scroll on initial load
    if (page !== 1)
      scroller.scrollTo("all", {
        offset: -175,
        smooth: "easeOutCubic",
        duration: 500,
        delay: 0,
      })

    // Call Api and fetch data for a given page
    fetch(`${ghostPostsURL}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        // Console.log(data.posts);
        setPosts(data.posts)
        setPagination(data.meta.pagination)
        setLoading(false)
      })
  }, [page])

  useEffect(() => {
    // To get data for allPost state
    axios.get(ghostPostsURL + "&limit=all").then((data) => {
      setAllPosts(data)
    })
  }, [])

  // To handle search click and close functionality
  const handleClicked = (data) => {
    // Update clicked to true or false
    setClicked(data)
    // On click, reset keyword to null
    setkeyword("")
  }

  // To handle keyword change functionality
  const handlekeywordchange = (data) => {
    setLoading(true)
    setkeyword(data)

    // Filter all posts and update results in searchResults state
    setSearhResults(
      allPosts.data.posts.filter((data) => {
        return (
          data.title.toLowerCase().includes(keyword.toLowerCase()) ||
          data.excerpt.toLowerCase().includes(keyword.toLowerCase())
        )
      })
    )
    setLoading(false)
  }

  //Function to fetch allposts data
  const getAllPostData = () => {
    const data = axios.get(ghostPostsURL)
    return data
  }

  // Ref to auto focus text input on open
  const inputRef = useRef(null)
  return (
    <Layout>
      <Seo
        title="Blog"
        description="MTTR obsession > Uptime illusionary fatigue. Want to know more on how we think
         of Change Intelligence, and SRE? Freshly minted from our stables"
      />
      <Banner />

      {/* Tags */}
      <Categories
        tags={tags}
        clicked={clicked}
        handleClick={handleClicked}
        handleChange={handlekeywordchange}
        inputRef={inputRef}
        scrollType="link"
      />
      {/* End tags */}
      <section className="gradient-blog z-50">
        {/* Show posts and pagination only if the keyword is not set */}
        {keyword === "" && (
          <>
            {/* All Posts */}
            <section className="py-5 " id="all">
              <div className="max-w-6xl mx-auto px-5" id="articles">
                {!loading && (
                  <Posts posts={posts} heading="All Posts" showSlider={false} />
                )}
              </div>
            </section>
            {/* End All posts */}

            {/* pagination */}
            <section className="py-8">
              <div className="max-w-7xl mx-auto px-2 lg:px-8 flex justify-center lg:justify-end pr-5 md:pr-0">
                {!loading && (
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
      {keyword !== "" && pagination.pages >= 2 && (
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
  )
}

const Head = () => (
  <Seo
    title="Blog"
    description="MTTR obsession > Uptime illusionary fatigue. Want to know more on how we
     think of Change Intelligence, and SRE? Freshly minted from our stables"
  />
)

export default AllPosts
