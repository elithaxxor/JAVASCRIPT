import Home from './Home';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Router, Routes,  Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import Layout from './Layout';
import './index.css';
import api from './api/posts';
//  npm
//  i date-fns -S (saves as production dependancy) --> to set datetime object in handleSubmit
// flexbox to set height/width of react application (#root in .css)
// npm i axios for server

function App() {
    const [post, setPosts] = useState('');
    // for search componenet (Nav)
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // for submissions under NewPost.js
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    // for edit/update
    const  [editTitle, setEditTitle]=useState('');
    const  [editBody, setEditBody]=useState('');

    const navigate = useNavigate();
    // this function will run on every page load. It will use a get response to fetch data from db (axios)
    // axioos 'get' replaces 'fetch' and automatically .jsonifies / catches http errors.
    useEffect(() => { //axios db
        try {
            const fetch_posts = async () => {
                const resp = await api.get('/posts');

                if (resp && resp.data) {
                    setPosts(resp.data);
                    console.log('[DB]-- \n',resp.status);
                } else {
                    console.log('[DB]-- Non 200 from DB: \n', resp.status);
                }
            }
        } catch (err) {
            console.log('[DB]-- Try/Catch Error: \n', err);
            console.log('[DB]-- Try/Catch Error: \n', err.resp.data);
            console.log('[DB]-- Try/Catch Error: \n', err.resp.status);
            console.log('[DB]-- Try/Catch Error: \n', err.resp.headers);
        }
    }, []);


// for the seachbar. (search results/ set search results)
// set post ans earch as useEffect depenancy. tHis will serve as a filter for users as they search
// new array, post_data will filter the post history by backchecking the search val.
// preset to .toLowerCase to ensure matching values. then set searchresults with filteredResults


    useEffect(() => {
            const filteredResults = post.filter((post_data) => ((post_data.body).toLowerCase()).includes(search.toLowerCase())
                || ((post_data.title).toLowerCase()).includes(search.toLowerCase()));
            setSearchResults(filteredResults.reverse());
        },[post, search]
    )

    // reference the last post by cost id. if post len==0, then default to position 1
    // load the post data array and newPost in allPosts, and reset post array with combined array.
    // then reset postTitle/postBody to empty data

    const handleSubmit = async (e) => { // for feeding data to db, and appending new data to old data.
        e.preventDefault();
        console.log('handle-submit')

        const id= post.length ? post[post.length-1].id+1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {id, title: postTitle, datetime, body: postBody};
        try{
            const resp = await api.post('/posts', newPost);
            const allPosts = [...post, newPost];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
            if (resp && resp.data) {
                setPosts(resp.data);
                console.log('[DB]-- \n',resp.status);
            } else {
                console.log('[DB]-- Non 200 from DB: \n', resp.status);
            }
    }catch(err) {
            console.log('[DB]-- Try/Catch Error: \n', err.message);
        }

}



    const handleDelete = async (id) => {
        try{
            console.log('handle-del')
            const resp = await api.delete(`/posts${id}`);
            const postsList = post.filter(post_data => post_data.id !== id); // checks the post history and resets the array accordingy
            setPosts(postsList);
            navigate('/'); // access browser history with useHistory and push the route back to homepage.
            if (resp && resp.data) {
                console.log('[DB-DEL]-- \n',resp.status);
            } else {
                console.log('[DB-DEL]-- Non 200 from DB: \n', resp.status);
            }
        }catch(err) {
            console.log('[DB-DEL]-- Try/Catch Error: \n', err.message);
        }

    }


const handleEdit = async (id) =>{
    try {
        const updatedPost = {id, title: postTitle, datetime, body: postBody};
        console.log('handle-edit');
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');

    }catch(err) {
        console.log('[DB-DEL]-- Try/Catch Error: \n', err.message);
    }
}

  return(
      <Routes>
          <Route path="/" element={<Layout
              search={search}
              setSearch={setSearch}
          />}>
              <Route index element={<Home post={searchResults} />} />

              <Route path="post">
                  <Route index element={<NewPost
                      handleSubmit={handleSubmit}
                      postTitle={postTitle}
                      setPostTitle={setPostTitle}
                      postBody={postBody}
                      setPostBody={setPostBody}
                  />} />

                  <Route path=":id" element={<PostPage
                      post={post}
                      handleDelete={handleDelete}
                  />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="*" element={<Missing />} />
          </Route>
      </Routes>
  );
}

export default App;
