import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface ITasks {
    task: string;
    priority: string;
    status?: boolean;
}

function Todo() {

    const [tasks, setTasks] = useState<ITasks[]>([]);
    const [search, setSearch] = useState('');
    const [newTask, setNewTask] = useState<ITasks>({task: '', priority: 'Medium'});
    const handleTask = () => {
        if(newTask.task && newTask.priority) {
            setTasks([...tasks, {task: newTask.task, priority: newTask.priority, status: false}]);
            setNewTask({task: '', priority: 'Medium'});
        } else{
            alert('Please enter task and priority');
        }
    }
    const handleDelete = (ind: number) => {
        setTasks(tasks.filter((item, i) => {
            return i !== ind;
        }))
    }
    const searchTask = tasks.filter((item) => (
        item.task.toLowerCase().includes(search.toLowerCase())
    ))
    const handleStatus = (ind) => {
        const n = tasks.map((item, i) => {
            return (ind === i) ? {...item, status: !item.status} : item;
        });
        setTasks(n);
    }

    return(
        <Box style={{width: "50vw"}}>
            <h1 style={{textAlign: "center"}}>Todo</h1>
            <Stack spacing={2} sx={{m: 5}}>
                <TextField variant="filled" type="text" placeholder="Search Task" value={search} onChange={e => setSearch(e.target.value)} />
                <TextField variant="outlined" type="text" placeholder="Add Task" value={newTask.task} onChange={e => {setNewTask({...newTask, task: e.target.value})}} />
                {/* <TextField variant="outlined" type="text" placeholder="Priority" value={newTask.priority} onChange={(e) => setNewTask({...newTask, priority: e.target.value})} /> */}
                <Select variant="outlined" value={newTask.priority} onChange={(e) => {setNewTask({...newTask, priority: e.target.value})}}>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </Select>
                <Button variant="outlined" onClick={handleTask}>Add Task</Button>
            </Stack>
                {searchTask.length>0 && <div>
                    {searchTask.map((item,index) => (
                        <div key={index} style={{display:"flex", flexDirection:"column", border:"1px solid", margin:'5px', width:'400px'}}>
                            <span>Task: {item.task}</span>
                            <span>
                                Priority: {item.priority}
                                <input type="checkbox" checked={item.status} onChange={() => {handleStatus(index)}} />
                            </span>
                            <Button variant="contained" onClick={() => {handleDelete(index)}}>Delete</Button>
                        </div>
                    ))}
                    </div>
                }
        </Box>
    )
}

export default Todo;