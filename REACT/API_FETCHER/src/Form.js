import Button from './Button';
// e.preventDefault()}> prevents reload everytime button is clicked.
// pass the form props down to the button. (parent-> child)
/* concattinate button text to the API url's string by passing value on to Button.js. */


function Form( { request, setRequest}) {
  return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText ='users'
                request={request}
                setRequest={setRequest}/>
            <Button
                buttonText ='posts'
                request={request}
                setRequest={setRequest} />

            <Button
                buttonText ='comments'
                request={request}
                setRequest={setRequest}/>
            <Button />
        </form>
  )
}

export default Form;
