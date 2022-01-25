import Button from './Button'
// set button widgets for API fetch. (users, post, comments)
// passes buttonText, urlReq and setReq to Button. buttonText directs API calls.

const Form=( { setAPI, urlReq } ) => {
    return (
        <div className="Form">
            <form className='Form' onSubmit={(e)=> e.preventDefault()}>
                <Button
                    buttonText='users'
                    urlReq={urlReq}
                    setAPI={setAPI}
                />
                <Button
                    buttonText='post'
                    urlReq={urlReq}
                    setAPI={setAPI}
                />
                <Button
                    buttonText='comments'
                    urlReq={urlReq}
                    setAPI={setAPI}
                />
            </form>

        </div>
    )
}
export default Form;
