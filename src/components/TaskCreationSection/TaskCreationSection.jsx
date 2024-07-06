import { useEffect, useState } from "react";
import Button from "../Button/Button";
import LabeledControl from "../LabeledControl/LabeledControl";
import classes from './TaskCreationSection.module.css';
import dateFormat from "dateformat";

export default function TaskCreationSection({tasks, setTasks}) {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDueDate, setTaskDueDate] = useState(dateFormat(new Date(), "yyyy-mm-dd"))
    const [taskTitleWarning, setTaskTitleWarning] = useState({})
    function clearFields() {
        setTaskTitle('')
        setTaskDueDate(dateFormat(new Date(), "yyyy-mm-dd"))
    }

    function saveTasksInLocalStorage() {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    useEffect(() => {
        saveTasksInLocalStorage()
    }, [tasks])

    function handleAddTask(event) {
        if (taskTitle.length != 0) {
            setTasks([
                ...tasks,
                {
                    id: tasks.length + 1,
                    title: taskTitle,
                    date: new Date(taskDueDate),
                    isDone: false
                }
            ])
            clearFields()
        } else {
            setTaskTitleWarning({border: taskTitle.length != 0 ? null : '1px solid red'})
        }
    }

    function handleTaskTitleChange(event) {
        setTaskTitle(event.target.value)
        setTaskTitleWarning({border: event.target.value.length != 0 ? null : '1px solid red'})
    }
    function handleFieldKeyDown(event) {
        if (event.code === 'Enter') {
            handleAddTask()
            clearFields()
        }
    }
    
    return (
        <div className={classes.taskCreationSection}>
            <LabeledControl style={taskTitleWarning} key="1" onChange={handleTaskTitleChange} onKeyDown={handleFieldKeyDown} value={taskTitle} label="task" type="text" />
            <LabeledControl key="2" onChange={(event) => setTaskDueDate(dateFormat(event.target.value, "yyyy-mm-dd"))} onKeyDown={handleFieldKeyDown} value={taskDueDate} label="due date" type="date" />
            <Button onClick={handleAddTask} type="add" squared active>+</Button>
        </div>
        
    )
}