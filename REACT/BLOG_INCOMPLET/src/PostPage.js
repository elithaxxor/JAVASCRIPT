import { useParams, Link } from 'react-router-dom';
// id is called on App page useParams

const PostPage = ( { post, handleDelete } ) => {
    const { id } = useParams();
    const post_data= post.find(post_data => (post_data.id).toString() === id);
    console.log('post_data', post_data)

    return(
        <main className='PostPage'>
            <article className='post' >
                {post_data &&
                <>
                    <h2> {post_data.title} </h2>
                    <p className ='postDate'> {post_data.datetime} </p>
                    <p className='postBody'> {post_data.body} </p>

                        <button onClick={()=> handleDelete(post_data.id)}>
                            Delete Post
                        </button>
                </>
                }
                {!post_data &&
                <>
                    <h2> Post Not Found </h2>
                <p>
                <Link to='/'> Homepage </Link>
                </p>
                </>}
            </article>
        </main>)}
export default PostPage

// seperate page used to display indivual pages.
// set the post to ID
// if the post_data exists, then it will be displayed betwee
        // render the frames under h2


