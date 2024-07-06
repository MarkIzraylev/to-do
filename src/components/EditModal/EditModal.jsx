import LabeledControl from '../LabeledControl/LabeledControl';
import dateFormat from 'dateformat';
import Button from '../Button/Button';
import { useEffect, useRef, useState } from 'react';
import classes from './EditModal.module.css';

export default function EditModal({task, showEditModal, setShowEditModal, tasks, setTasks}) {
    let dialog = useRef()
    const [newTaskTitle, setNewTaskTitle] = useState(task.title)
    const [newTaskDate, setNewTaskDate] = useState(task.date)
    function handleClose() {
        dialog.current.close()
        setShowEditModal(false)
    }
    function handleSave() {
        if (newTaskTitle.length != 0) {
            setTasks([
                ...tasks.filter(iter_task => iter_task.id != task.id),
                {
                    id: task.id,
                    title: newTaskTitle,
                    date: new Date(newTaskDate)
                }
            ])
            handleClose()
        }
    }
    useEffect(() => {
        dialog.current.showModal()
    }, [])
    return (
        <dialog className={classes.modal} ref={dialog}>
            <LabeledControl label="task" type="text" value={newTaskTitle} style={{border: newTaskTitle.length == 0 ? '1px solid red' : null}} onChange={(event) => setNewTaskTitle(event.target.value)}></LabeledControl>
            <LabeledControl label="due" type="date" value={dateFormat(newTaskDate, "yyyy-mm-dd")} onChange={(event) => setNewTaskDate(event.target.value)}></LabeledControl>
            <div className={classes.buttonsBlock}>
                <Button onClick={handleClose}>cancel</Button>
                <Button active onClick={handleSave}>save</Button>
            </div>
            
        </dialog>
    )
}