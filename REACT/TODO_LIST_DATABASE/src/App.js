import logo from './logo.svg';
import Header from './Header';
import Tasks from './Tasks';
import Task from './Task';
import { useState, useEffect } from 'react';
import AddTask from './AddTask';
import Footer from './Footer';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    // used as state for to right button. it will hide / show the UI feed upon click
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState('');

    // takes id value from task component
    const deleteTask = async (id)  =>{ //delete
        console.log('delete', id);
        await fetch(`http://localhost:5005/tasks/${id}`,
            {
            method:'DELETE',
        })
        setTasks(tasks.filter((tasks) => tasks.id !== id))
    };

    // adds back to the state.
    const addTask = async(task)=>{
        try{
       const resp= await fetch(`http://localhost:5005/tasks/`, {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(task)
            }
        );
        console.log(resp.status);
        const db_data = await(resp.json);
        if(!db_data){ // check if anything is actually added, add nothing
            let failed_add = 'Nothing Added [DB-MESSAGE]';
            console.log('nothing to add in the database:\n ', db_data);
            console.log('response status: ', resp.status);
            setTasks([...tasks, failed_add]);
            console.log(tasks);
        }

       console.log('status: ', resp.status_code);
        setTasks([...tasks, db_data]);

        }catch(err){
            console.log('add task error', err);
            throw Error()
        }};

      // ::  IF DB IS NOT PRESENT, AND DATA IS FRONTLOADED ::
    // const id = Math.floor(Math.random() * 1000) +1 --> best used if DB is not implimented yet, and data is local.
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask ])

    //  use effect will run upon page load. once loaded it will call the function fetchServerTasks,
    // this will load the server data from the back to the front end.

    useEffect(() =>{ //fetch - it is set to contionusly update. uses fetchServerTasks() to fulfil constant feed
        const getTask = async() =>{
            try{
            const serverTasks = await fetchServerTasks();
            setTasks(serverTasks);
            console.log(serverTasks)
            }
            catch(err){
            console.log(err);
            throw Error()
            }}
        console.log('calling fetchServerTasks function')
        fetchServerTasks();
    },);

    const fetchServerTasks = async() =>{ // fetch tasks, will be used for CRUD && useEffect function
        try{
        const resp = await fetch('http://localhost:5005/tasks');
        const db_data = await resp.json();
        console.log('server response: \n',resp.status);
        console.log('database info: \n', db_data);
        setTasks(db_data);
        }catch(err){
            console.log(err);
            throw Error();
        }
    }

    //controller for 'toggle reminder'  passes id for unique server fetch
    // this is where values with unique ID's get passed (so to access API data.)
    const fetchServerTask = async(id) =>{ // Get
        try{
            const resp = await fetch(`http://localhost:5005/tasks/${id}`);
            const db_data = await resp.json();
            console.log('server response: \n',resp.status);
            console.log('database info: \n', db_data);
            setTasks(db_data);
        }catch(err){
            console.log(err);
            throw Error();
        }
    }
// to cross off tasks from the UI. uses the bool val 'reminder' found in the data.
    const toggleReminder = async (id) =>{ // PUT (on/ly update the reminder --> bool val)
        try{
            const taskToToggle = await fetch(fetchServerTasks(id));
            const updateTask= {taskToToggle, reminder: !taskToToggle.reminder};
            if (updateTask){
                console.log('reminder succesfuly updated', taskToToggle);
            }
            const resp = await fetch(`http://localhost:5005/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application-json'
                },
                body: JSON.stringify(updateTask)
            })
            setTasks(tasks.map((task=> task.id === id ? {...tasks, reminder: !task.reminder} :
                task && console.log(taskToToggle,'\n\n' ,task)
            )))
            if (!taskToToggle){
                console.log('Error in Console Log toggle.. ');
            }
        }catch(err){
            console.log('error in toggle reminder', err);
            throw Error();
        }
    };

// const onAdd = () => {
//     setShowAddTask(!showAddTask)
// }
    // the header will 'flip' the ui interface from showing tasks. onAdd is drilled down 'Header'  button
    // the tasks menu has a conditional display, where 'no tasks available' will render if the db has no data
    // showAdd passes drill a bool, and will change the button color pending UI element choice (button)

  return (      <Router>
          <div className='container'>
              <Header
                  onAdd={() => setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}
              />

              <Routes>
                  <Route
                      path='/'
                      element={
                          <>
                              {showAddTask && <AddTask onAdd={addTask} />}
                              {tasks.length > 0 ? (
                                  <Tasks
                                      tasks={tasks}
                                      onDelete={deleteTask}
                                      onToggle={toggleReminder}
                                  />
                              ) : (
                                  'No Tasks To Show'
                              )}
                          </>
                      }
                  />
                  <Route path='/about' element={<About />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  )
}

export default App;
