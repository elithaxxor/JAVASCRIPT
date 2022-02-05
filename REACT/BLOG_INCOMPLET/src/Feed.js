// take the post, and drill down the object (id) abnd the full post to <Post =
// pass on the post and post(id]

import Post from './Post'
const Feed = ( { post } ) => {
    return(
  <>
      {post.map(post_data => (
          <Post key={post_data.id} post={post_data} />
        ))}
  </>
    )
}
export default Feed