import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ITask {
    name: string;
    priority: string;
}

function Task() {

    const [task, setTask] = useState<ITask[]>([]);
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('');

    const handleTask = () => {
        setTask([...task, {name: newTask, priority: priority}]);
        console.log('hiiii', task);
    }
    useEffect(() => {
        console.log('new', newTask, task);
    },[newTask]);

    return(
        <div className="col-md-6">
            <h1 style={{ textAlign: "center" }}>Add Task</h1>
            <Stack gap={3}>
                <div style={{ display: "flex", flexDirection:"column", justifyContent: "center" }}>
                    <input type="text" className="form-control" placeholder="Task" name="name" value={newTask} onChange={(e) => {setNewTask(e.target.value)}}></input>
                    <input type="text" className="form-control" placeholder="Priority" name="priority" value={priority} onChange={e => {setPriority(e.target.value)}} ></input>
                    <Button className="btn btn-primary" onClick={handleTask}>Add Task</Button>
                    {(task) && <table border={1}>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                        {task.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.priority}</td>
                            </tr>
                            // <FontAwesomeIcon icon="fa-solid fa-trash" />
                        ))}
                        </tbody>
                    </table>}
                </div>
            </Stack>
        </div>
    )
}

export default Task;