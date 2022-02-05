import { Link } from 'react-router-dom';
// missing header and  footer do not require props

const Missing = () => {
    return(
    <main className='Missing'>
        <h2> 404 Error </h2>

            <p>
                <Link to="/"> Home</Link>
                <Link to="/posts"> Posts </Link>
                <Link to="/about"> About </Link>

            </p>
    </main>
        )
}

export default Missing