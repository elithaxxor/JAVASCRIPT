import {Link} from "react-router-dom";

const About = () => {

    return(
        <main className='About'>
        <h2> About Page </h2>
            <p style= {{marginTop: '1rem'}}> This is a blog app, with help from Dave Gray on Youtube. </p>
            <p>
                <Link to="/"> Home</Link>
                <Link to="/posts"> Posts </Link>
                <Link to="/about"> About </Link>

            </p>

        </main>
    )
}

export default About