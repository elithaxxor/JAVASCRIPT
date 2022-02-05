import React from 'react'
import { Toast } from 'react-bootstrap';


export const Notification = ({ setToggle }) =>{
    return(
        <footer>
            <Toast className='notification' onClose={() => {setToggle(false)}}>
                <Toast.header>
                    <strong className='mr-auto'>
                    <small> justnow </small>
                    </strong>
                </Toast.header>
                <Toast.Body>
                    You Made It! Welcome to my bootstrap/react/redux website!!!
                </Toast.Body>
            </Toast>
        </footer>
    )
};




