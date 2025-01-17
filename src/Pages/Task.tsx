import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Task() {

    const [task, setTask] = useState([{
        "name": '',
        "priority" : ''
    }]);
    const [newTask, setNewTask] = useState('');

    const handleTask = () => {
        const task1 = {"name": newTask};
        // setTask({...task, ...task1});
        // task.name = newTask;
    }
    useEffect(() => {
        console.log('new', newTask, task);
    },[newTask]);

    return(
        <div className="col-md-6">
            <h1 style={{ textAlign: "center" }}>Add Task</h1>
            <Stack gap={5}>
                <div style={{ display: "flex", flexDirection:"column", justifyContent: "center" }}>
                    <input type="text" className="form-control" placeholder="Task" name="name" value={newTask} onChange={(e) => {setNewTask(e.target.value)}}></input>
                    <input type="text" className="form-control" placeholder="Priority" name="priority"></input>
                    <Button className="btn btn-primary" onClick={handleTask}>Add Task</Button>

                    {task && <ul>
                        {task.map((item) => (
                            <li>{item.name}</li>
                            // <FontAwesomeIcon icon="fa-solid fa-trash" />
                        ))}
                    </ul>}
                </div>
            </Stack>
        </div>
    )
}

export default Task;