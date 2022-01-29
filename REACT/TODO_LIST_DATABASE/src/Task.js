import { FaTimes } from 'react-icons/fa';


// pass the bool 'reminder: ' from tasks. Double clicking the task will toggle the bool expression in tasks object.
// corrosponding .css in App.css will change UI frame as className is updated ( indicating wether the task has been completed or not )

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' :''}`}
             onDoubleClick ={()=> onToggle(task.id)}
        >
        <h3>
            {task.text}{' '}
            <FaTimes
                style={{ color:'red', cursor:'pointer' }}
                onClick={()=> onDelete(task.id)}
            />

        </h3>
        <h2> Task Page </h2>
        <p> {task.text} </p>
        <p> {task.day} </p>
        </div>
    )
}

export default Task