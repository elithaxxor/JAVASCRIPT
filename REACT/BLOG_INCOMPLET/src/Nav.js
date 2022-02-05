import { Link } from 'react-router-dom';


// use  form/button event to update search results (setSearch)
const Nav = ( {search, setSearch} ) => {
    return(
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'> Search Post </label>
                <input
                    type='text'
                    id='search'
                    placeholder='Search Posts'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </form>
            <p>
                <Link to="/"> Home</Link>
                <Link to="/posts"> Posts </Link>
                <Link to="/about"> About </Link>
            </p>

        </nav>
    )
}

export default Nav