const  Button = ( { buttonText, urlReq, setAPI }) => {
    return (
        <div className="Button_0">
        <button
            className={buttonText===urlReq ? 'selected':null} // set the class name to 'selected' if true.
            type='button'
            onClick={() => setAPI(buttonText)} // sends api request by changing setAPI state.
        >
            {buttonText}
        </button>
        </div>
    );
}

export default Button;
