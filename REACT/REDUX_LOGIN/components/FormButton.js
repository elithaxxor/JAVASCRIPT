import {useDispatch} from "react-redux";
import {login} from "../app/slices/userSlice";


export const FormButton = ({ getEmail,setEmail,getPass,setPass}) => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('user submitting information');
           dispatch(
            login({
                email: getEmail,
                password: getPass,
            })
        );
    }


    return(

        <section>
            <form>
                <button className='btn'
                onSubmit={e=>{handleSubmit(e)}}
                >

                </button>
            </form>
        </section>
    )
};


