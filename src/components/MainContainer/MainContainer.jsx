import TaskCreationSection from '../TaskCreationSection/TaskCreationSection';
import TasksSection from '../TasksSection/TasksSection';
import classes from './MainContainer.module.css';

export default function MainContainer({tasks, setTasks, tab}) {
    return (
        <div className={classes.mainContainer}>
            {tab == "app" && (
                <>
                    <TaskCreationSection tasks={tasks} setTasks={setTasks} />
                    <TasksSection tasks={tasks} setTasks={setTasks} />
                </>
            )}
            {tab == "about" && (
                <>
                    <p className={classes.paragraph}>ahoy!</p>
                    <p className={classes.paragraph}>this is a to-do web app utilizing React under the hood.</p>
                    <p className={classes.paragraph}>it was created in educational purposes by <a href="https://github.com/MarkIzraylev">mark</a>.</p>
                    <p className={classes.paragraph}>enjoy {'<3'}</p>
                </>
            )}
        </div>
    )
}