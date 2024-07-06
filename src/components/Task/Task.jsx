import classes from './Task.module.css';
import Button from '../Button/Button';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import EditModal from '../EditModal/EditModal'

export default function Task({task, tasks, setTasks}) {
    const [showEditModal, setShowEditModal] = useState(false)
    function saveTasksInLocalStorage() {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // window.localStorage.setItem('tasks', JSON.stringify([{
    //     id: 1,
    //     title: 'create a new to-do in this app',
    //     date: new Date(),
    //     isDone: false
    //   }]));
      

    useEffect(() => {
        saveTasksInLocalStorage()
    }, [tasks])

    console.log(JSON.parse(window.localStorage.getItem('tasks')))

    function handleEdit() {
        setShowEditModal(!showEditModal)
    }
    function handleDelete() {
        setTasks([
            ...tasks.filter((iter_task) => iter_task.id !== task.id)
        ])
    }
    function handleCheckboxChange() {
        setTasks([
            // ...tasks.filter((iter_task) => iter_task.id !== task.id)
            ...tasks.map((iter_task) => {
                if (iter_task.id == task.id) {
                    iter_task.isDone = !iter_task.isDone
                }
                return iter_task
            })
        ])
    }
    return (
        <li className={classes.task}>
            {
                showEditModal && createPortal(<EditModal task={task} showEditModal={showEditModal} setShowEditModal={setShowEditModal} tasks={tasks} setTasks={setTasks} />, document.getElementById('modal'))
                
            }
            <input className={classes.taskCheckbox} checked={task.isDone} onChange={handleCheckboxChange} type="checkbox" name={task.id} id={task.id} />
            <label className={classes.taskName}>{task.title}</label>
            <Button squared type="edit" onClick={handleEdit}></Button>
            <Button squared type="delete" onClick={handleDelete}></Button>
        </li>
    )
}