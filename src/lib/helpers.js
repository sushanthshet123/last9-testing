export function updateFeaturedPost( posts ) {
  if ( posts && posts.length > 0 )
    // eslint-disable-next-line camelcase
    posts[0].is_featured = true
  return posts
}
