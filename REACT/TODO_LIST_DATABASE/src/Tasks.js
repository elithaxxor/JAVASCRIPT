import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <section>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </section>
    )
}

export default Tasks