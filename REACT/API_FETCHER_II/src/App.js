import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Form from './Form';
import { useState, useEffect } from 'react';
import List from './List';
import Table from './Table';

function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [urlReq, setAPI] = useState('users');
    const [data, setData] = useState([]);
    /*
    * UseEffect set to listen to when there are changes to the original URL, this will create a fetch
    * with the appropiate API URL appended.
    *  */

useEffect(()=>{
    let date = Date()

    console.log('New Page Loaded', date)
    const fetchData = async () => {
        try{
            console.log('fetching', `${API_URL}${urlReq}`)
            const resp = await fetch(`${API_URL}${urlReq}`); // API will defualt to user, but the buttons will redirect.
            const req_data = await resp.json();
            console.log(resp);
            console.log(JSON.stringify(req_data));
            console.log(JSON.stringify(resp));
            setData(req_data); // takes the repsonse .json
        }catch(err){
            console.log('API load error: \n', err);
        }finally {
            console.log(date)
        }
    };  fetchData();},[urlReq]) // for every load


    // <Form: for fetching. <List: parsing data. <Table: Display Data.
return(
    <div className='App'>
        <Form
        urlReq = {urlReq}
        setAPI = {setAPI}/>
        <List data={data} />
        <Table data={data}/>
        </div>
)}

export default App;
