import './App.css';
import Button from './Button';
import Form from './Form';
import { useState, useEffect } from 'react';

/* create template where form passes down API str values. The buttons concatinate necesarry string for concatination, and subsequently API access. */
function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [request, setRequest] = useState('users');
    const [data, setData] = useState('') ;

    useEffect(() => {
        const fetch_data = async () =>{
        try {
            let date = new Date();
            let req = fetch(`${API_URL}${setRequest}`);
            console.log('Fetching data for: \n' + `${API_URL}${request}`  + date);
            console.log('[Request Data] \n' + req)
            const req_data = await req.json();
            console.log('[REQ_DATA]\n' + req_data + '\n\n' + req.statusCode + date);
            if (!req.ok){
                console.log('successful handshake, updating itemlist' + req.statusCode + date);
                setData(req_data); 
            }
        } catch(err){
            console.log(err);
        } finally{
            console.log('finally');
            fetch_data()
        }}})



return (
    <div className='App'>
        <Form
        request={request}
        setRequest={setRequest}
        />
    </div>)
}
export default App;
