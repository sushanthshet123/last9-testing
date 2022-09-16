import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: process.env.GATSBY_GHOST_API_URL,
  key: process.env.GATSBY_GHOST_API_KEY,
  version: "v3",
})

// Get signle post
export async function getPost(slug) {
  return await api.posts
    .read({
      slug: slug,
      include: "authors,tags",
    })
    .catch(() => {
    })
}
