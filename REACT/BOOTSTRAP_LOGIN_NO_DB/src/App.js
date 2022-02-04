import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormButton} from './components/FormButton';
import { Form } from './components/Form';
import react, { useState } from 'react';
import { configureStore } from "@reduxjs/toolkit";
import { selectUser } from './app/slices/userSlice'
import { Logout } from './components/Logout'
import { useSelector} from "react-redux";
import { Routes, Route, Link } from "react-router-dom";


// to use redux, check the imports in .index
//  npm install react-redux
//npm install react-bootstrap bootstrap@5.1.3
function App() {
    const [getEmail, setEmail] = useState('');
    const [getPass, setPass] = useState('');

    const user = useSelector(selectUser);

    return (
        <html>
    <section className="App">
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path='logout' element={<Logout />} />
        </Routes>

        <Form to="/"
            className="login-form"
            getEmail={getEmail}
            setEmail={setEmail}
            getPass={getPass}
            setPass={setPass}
        >
            <FormButton >
        </FormButton>
        </Form>

            {user ? <Logout to="/logout" className='logout_btn'/> : <Logout to="/logout" className='logout_btn'/>}
    </section>
        </html>
    );
}

export default App;
