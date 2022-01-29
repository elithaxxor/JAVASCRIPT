import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

// the header drills down the button o nthe top right. the top right button is set to change the display
// using the bool expression setStateAdd and showAdd. onAdd is the button-listener, and has been drilled from APP
// button will change red-green upon UI feed being viewed/hidden

const Header = ({ onAdd, showAdd, tasks }) => {
    //const location = useLocation()
    // const onClick = (e) => {
    //     console.log('Header Element Clicked');
    // }
    return (
        <header className='header'>
            <Button
                color={showAdd ? 'red' : 'grey'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

