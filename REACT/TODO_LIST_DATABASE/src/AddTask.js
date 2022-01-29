import { useState } from 'react';
/* task component - Task, da & time component */
// drills down onAdd

const AddTask = ( { onAdd } ) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    //  for the onAdd button.
    const onSubmit = (e) =>{
        e.preventDefault(); // prevents page from auto reloading.
        if(!text){
            alert('please enter text');
        }

        // sets the default values for user input (typed) / reminder button.
        onAdd({text, day, reminder});
        setText('')
        setDay('');
        setReminder('');
    }

    // the onSubmit sets the values under the task component, (Task, Day&Time and set-reminder checkbox)
    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'> </div>
            <label> Task </label>
            <input type='text'
                   placeholder='Add Task'
                    value={text}
                   onChange = {(e)=>setText(e.target.value)}
            />

            <div className='form-control'> </div>
            <label> Task </label>
            <input type='text'
                   placeholder='Add Day & Time'
                   value={day}
                    onChange={(e)=>setDay(e.target.value)}
            />

            <div className='form-control'> </div>
            <label> Task </label>
            <input
                type='checkbox'
                checked={reminder}
                placeholder={reminder}
                onChange={(e)=>setReminder(e.target.checked)}

            />
            <input type='submit' value='Save Task' className='btn btn-block' />

        </form>

    )
}
export default AddTask;
