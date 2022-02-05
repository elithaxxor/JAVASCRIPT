import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import data from '../data';
import {Cards} from './Cards'
import {Notification} from'./Notification'
import { Container, Row, Col } from 'react-bootstrap';
// npm install react-bootstrap bootstrap@5.1.3
// npm install node-sass --> then change css to scss


export const Logout = () =>{
    const [toggle, setToggle] = useState(false)

    function displayCC() {
        setToggle(true);

        setTimeout(() => {
            setToggle(true);

        },3000);
    }

    useEffect(() =>{
        console.log('page loaded');
        displayCC()
    },[]);
return(
<html>
<Container>
    <Row> <header className='title'> <h1> WELCOME TO MY SIMPLE LOGIN-LOGOUT APP, USING REACT/REDUX/BOOTSTRAP</h1> </header> </Row>
<section>
    <Col> <Cards className='rectangle_1' data={data}> </Cards> </Col>
    <Col> <Cards className='rectangle_2' data={data}> </Cards> </Col>
    <Col> <Cards className='rectangle_3' data={data}> </Cards> </Col>

</section>
<section>
    toggle && <Notification setToggle={setToggle}> </Notification>
    <button className='logout_btn'> LOGOUT </button>

</section>
</Container>
    </html>

    )
};


