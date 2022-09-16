import React, { useState, useRef, useEffect } from "react"
import Layout from "../../components/common/layout"
import Banner from "../../components/common/banner"
import { tags } from "../../components/common/data"
import Categories from "../../components/blog/tag"
import Posts from "../../components/blog/posts"
import axios from "axios"
import Seo from "../../components/common/seo"

const Blog = () => {
  const [clicked, setClicked] = useState(false)
  const [keyword, setkeyword] = useState("")
  const [searchResults, setSearhResults] = useState([])

  //Include changes for optimization
  const [posts, setPosts] = useState(null)
  // Latest posts
  const [engineeringPosts, setEngineeringPosts] = useState(null)
  const [culturePosts, setCulturePosts] = useState(null)
  const [productPosts, setProductPosts] = useState(null)
  const [featured, setFeatured] = useState(null)
  const [allPosts, setAllPosts] = useState(null)
  const [designPosts, setDesignPosts] = useState(null)

  useEffect(() => {
    if (clicked) inputRef.current.focus()
  }, [clicked])

  useEffect(() => {
    // eslint-disable-next-line max-len
    const stringQuery = `&filter=tag:benefits&filter=tag:deep-dives&filter=tag:devops&filter=tag:failures&filter=tag:hans&filter=tag:last9&filter=tag:last9&filter=tag:last9-engineering&filter=tag:latency&filter=tag:monitoring&filter=tag:observability&filter=tag:slo&filter=tag:sre&filter=tag:sre-tooling`
    const query = {
      order: "published_at DESC",
      limit: 4,
      include: "tags,authors",
    }

    const allPostQuery = {
      ...query,
      limit: "all",
    }

    // Let featuredQuery = {
    //   ...query,
    //   Limit: 3,
    //   Filter: "featured:true",
    // }

    dataFetch(query, stringQuery).then((data) => {
      // Latest posts
      setPosts(data)
    })

    dataFetch(query, ...[,], "sre").then((data) => {
      //Product
      setProductPosts(data)
    })

    dataFetch(query, ...[,], "deep-dives").then((data) => {
      //Engineering
      setEngineeringPosts(data)
    })

    dataFetch(query, ...[,], "slo").then((data) => {
      //Design
      setDesignPosts(data)
    })

    dataFetch(query, ...[,], "last9-engineering").then((data) => {
      //Culture
      setCulturePosts(data)
    })

    dataFetchFeatured().then((data) => {
      // Featured
      setFeatured(data)
    })

    dataFetch(allPostQuery, stringQuery).then((data) => {
      // Allpost
      setAllPosts(data)
    })
  }, [])

  const dataFetchFeatured = () => {
    return axios
      .get(
        // eslint-disable-next-line max-len
        `${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?key=${process.env.GATSBY_GHOST_API_KEY}&limit=3`,
      )
      .then((res) => {
        return res.data.posts;
      });
  }

  const dataFetch = (query, string = "", tag = "") => {
    tag !== "" && (query.filter = `tag:${tag}`)
    return axios
      .get(
        `${process.env.GATSBY_GHOST_API_URL}/ghost/api/v3/content/posts/?key=${process.env.GATSBY_GHOST_API_KEY}${string}`,
        { params: query }
      )
      .then((res) => {
        return res.data.posts
      })
  }

  // To handle search click and close functionality
  const handleClicked = (data) => {
    // Update clicked to true or false
    setClicked(data)
    // On click, reset keyword to null
    setkeyword("")
  }

  // To handle keyword change functionality
  const handlekeywordchange = (data) => {
    setkeyword(data)

    // Filter all posts and update results in searchResults state
    setSearhResults(
      allPosts.filter((data) => {
        // Posts have the data and we filter according to the keys searched
        return (
          data.title.toLowerCase().includes(keyword.toLowerCase()) ||
          data.excerpt.toLowerCase().includes(keyword.toLowerCase())
        )
      })
    )
  }

  // Ref to auto focus text input on open
  const inputRef = useRef(null)

  return (
    <Layout>
      <Banner />
      <Seo title="Blog" description="MTTR obsession > Uptime illusionary fatigue. Want to know more on how
       we think of Change Intelligence, and SRE? Freshly minted from our stables" />
      <Categories
        tags={tags}
        clicked={clicked}
        handleClick={handleClicked}
        handleChange={handlekeywordchange}
        inputRef={inputRef}
        scrollType="scroll"
      />

      <section className="gradient-blog z-50 pb-5">
        {/* Hide all posts is search term is not null */}
        {keyword === "" && (
          <>
            {/* Latest Posts */}
            <section className="bg-white">
              <div className="max-w-6xl mx-auto px-8 pr-0 md:pl-8 md:pr-8">
                <Posts
                  posts={posts}
                  heading="Latest"
                  viewAllLink="/blog/all"
                  showFeaturedposts={true}
                  clicked={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End Latest posts */}

            {/* Featured posts */}
            <section>
              <div className="max-w-6xl mx-auto px-8 md:pl-8 md:pr-8 mt-5 lg:mt-0">
                <Posts
                  posts={featured}
                  heading="Featured Posts"
                  showFeaturedposts={false}
                  featured={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End Featured posts */}

            {/* Research Posts */}
            <section id="sre">
              <div className="max-w-6xl mx-auto pl-8 pr-0 md:pl-8 md:pr-8 ">
                <Posts
                  posts={productPosts}
                  heading="SRE"
                  viewAllLink="/blog/tag/sre"
                  showFeaturedposts={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End produt Posts */}

            {/* Design Posts */}
            <section id="slo">
              <div className="max-w-6xl mx-auto pl-8 pr-0 md:pl-8 md:pr-8 mt-5 lg:mt-0">
                <Posts
                  posts={designPosts}
                  heading="SLO"
                  viewAllLink="/blog/tag/slo"
                  showFeaturedposts={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End Design posts */}


            {/* Culture Posts */}
            <section id="last9-engineering">
              <div className="max-w-6xl mx-auto pl-8 pr-0 md:pl-8 md:pr-8 mt-5 lg:mt-0">
                <Posts
                  posts={culturePosts}
                  heading="Last9 Engineering"
                  viewAllLink="/blog/tag/last9-engineering"
                  showFeaturedposts={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End Culture posts */}

            {/* Engineering Posts */}
            <section id="deep-dives">
              <div
                className="max-w-6xl mx-auto pl-8 pr-0 md:pl-8 md:pr-8
              mt-5 lg:mt-0"
              >
                <Posts
                  posts={engineeringPosts}
                  heading="Deep Dives"
                  viewAllLink="/blog/tag/deep-dives"
                  showFeaturedposts={true}
                  showSlider={true}
                />
              </div>
            </section>
            {/* End Engineering posts */}

          </>
        )}

      </section>


      {/* Search results */}
      {keyword !== "" && (
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-8 sm:px-8 lg:py-8 lg:px-8">
            <Posts
              posts={searchResults}
              heading={`Search Results for '${keyword}'`}
              searched={true}
            />
          </div>
        </section>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Blog"
  description="MTTR obsession > Uptime illusionary fatigue. Want to know more on how we think of Change Intelligence, and SRE? Freshly minted from our stables"
/>

export default Blog
