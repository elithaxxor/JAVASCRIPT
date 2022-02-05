import { FormButton } from './FormButton'
import { login } from '../app/slices/userSlice'
import { useDispatch } from 'react-redux'


export const Form = ({getEmail,setEmail,getPass,setPass }) =>{
    const dispatch = useDispatch()

    const handleChange=(e)=>{
    e.preventDefault()
    console.log('user entetered info')
}
    return(
        <section>
            <form className='form'>
               <input className='form-control'>
                   type='text'
                    value={getEmail}

                   onChange={e=>{setEmail(e.value.target)}}
                   onChange={e=>{handleChange(e)}}

               </input>
                <input className='form-control'>
                    type='password'
                    placeholder='password'
                    required='required'
                    value={getPass}
                    onChange={e=>{setPass(e.value.target)}}
                    onChange={e=>{handleChange(e)}}
                </input>
                <FormButton
                    className='btn'
                    getEmail={getEmail}
                    setEmail={setEmail}
                    getPass={getPass}
                    setPass={setPass}
                >

                </FormButton>
            </form>
        </section>
    )
};


