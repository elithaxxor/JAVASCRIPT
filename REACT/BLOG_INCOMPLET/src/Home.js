import Feed from './Feed';
// the homepage serves as as a feed where a historical data will be rendered.
// drill the post to the Feed for parsing.
const Home = ( {post} ) => {
// if the post has lenght, then display the post. if no lenght, set default message
// drill data to <Feed> IF the post has length.

    return(
        <main className='Home'>
            {
                post.length ? (<Feed post={post}/>) :
                    (<p> No feed found </p>)

            }
        </main>
    )
}

export default Home