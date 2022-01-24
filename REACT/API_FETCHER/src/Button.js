import logo from './logo.svg';
import './App.css';

// The buttons renedered will be from ./form .js ; they will make the API call once initiated.

// buttonText is passed from Formjs and is used to align the button widget with the API's URL
function Button( { request, setRequest, data, get_data, buttonText } ) {
    console.log('User Chose: \n' + buttonText)
    return (
      <div>
        <button
            className={buttonText === request ? 'selected' : null}
            type='button'
            onClick={()=> setRequest(buttonText)}
        >
            <p> Call {buttonText}</p>
      </button>
      </div>
  )
}

export default Button;
