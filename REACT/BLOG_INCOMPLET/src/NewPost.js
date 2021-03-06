const NewPost = ({ handleSubmit, post, setPostTitle, setPostBody, postTitle, postBody }) => {

// sets up the new form page. title, textbox and submit button. submit buttorefereces setPostTitle and setPostBody
return(
        <main className='newPost' >
            <h2> New Post </h2>
            <form className='newPostForm' onSubmit={handleSubmit} >
            <label htmlFor='postTitle'> Title </label>
                <input
                    id='postTitle'
                    type='text'
                    required
                    value={postTitle}
                    onChange={(e)=> setPostTitle(e.target.value)}
                />
                <label htmlFor='postBody'> Post: </label>
                <textarea id='postBody'
                          required
                          value={postBody}
                          onChange={(e)=> setPostBody(e.target.value)}
                />
                <button type='submit'> Submit </button>
        </form>
        </main>
)
}
export default NewPost