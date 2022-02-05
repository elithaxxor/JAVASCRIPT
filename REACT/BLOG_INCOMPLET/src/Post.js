import { Link } from 'react-router-dom';

// set up logic take in the  the post, displayu the title (post.title);
// use Router link to create unique URL id with post ID
const Post = ( { post_data } ) => {
// if the post has lenght, then display the post. if no lenght, set default message
// drill data to feed

    // sets up feed

    return(
        <article className='post' >
            <Link to={`/posts/${post_data.id}`}>
                <h2> {post_data.title} </h2>
                <p className ='post date'> {post_data.datetime} </p>
            </Link>
            <p className='postBody'> {
                (post_data.body).length <= 25 ? post_data.body: `${(post_data.body).slice(0, 25)}...`

            } </p>
        </article>
        )
    }
export default Post

// postBody sets up the intiial feed, with 25 charicteres max.

