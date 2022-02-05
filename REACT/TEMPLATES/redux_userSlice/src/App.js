import "./styles.css";
import { useDispatch, useState } from 'react-redux;

// feed data into reducer (login reducer)
export default function App() {

  // useDispatch() --> TO SET REDUCER STATE (INPUT)
  const dispatch = useDispatch();

  // useSelector() --> TO CALL STATE (OUTPUT)
  const email = useSelector(selectEmail);


  const [getEmail, setEmail]=useState('');
  const [getPass, setPass]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login)({
      email: getEmail, 
      pass: getPass
    })
  }
  /// ADD TEXT INPUT TO COMPLETE 
  return (
    <html> 
      <section className="App">
        <form onSubmit = {(e) => {
          value={setEmail}
        handleSubmit(e)}
    }/>
      </section> 

  <section> 
    <div> <t> --- to test state ---  </t>
    {email ? <h1 email found /> : <h1 no email found />} 
    </div> 
    </section> 
</html> 
    
  );
}
