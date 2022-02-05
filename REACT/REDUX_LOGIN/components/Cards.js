import React from 'react'
import { Toast } from 'react-bootstrap';
import { Card, Badge, Button } from 'react-bootstrap';


export function Cards({ data }){
    return(
     <body>
        <Card className='h-100 shadow-sm bg-white rounded'>
            <Card.Img variant='top' src={data.image}/>
            <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'/>
                <Card.Title className='mb-0 font-weight-bold'>{data.name}</Card.Title>
            </Card.Body>
        </Card>
     </body>
    )}


