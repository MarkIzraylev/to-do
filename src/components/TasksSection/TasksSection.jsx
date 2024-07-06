import LabeledControl from "../LabeledControl/LabeledControl";
import Task from "../Task/Task";
import dateFormat from "dateformat";

export default function TasksSection({ tasks, setTasks }) {
  const datesTasks = tasks.reduce((acc, task) => {
    const dateKey = dateFormat(task.date, "mmm d yyyy").toLowerCase();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(task.id);
    return acc;
  }, {});
  let datesTasksJsx = [];
  
  Object.prototype.withoutTime = function () {
    var d = new Date(this);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  let today = new Date().withoutTime();

  for (let date of Object.keys(datesTasks).toSorted()) {
    datesTasksJsx.push(
        <div style={{ marginTop: "15px" }} key={date}>
        { today.valueOf() == new Date(dateFormat(date, "yyyy-mm-dd")).withoutTime().valueOf() ? 'today' : date }
        <ul key={date + '_ul'} style={{ listStyleType: "none", padding: 0, marginTop: "5px", marginBottom: 0 }}>
          {datesTasks[date].map(taskId => {
            let thisTask;
            tasks.map(task => {
                if (task.id == taskId) {
                    thisTask = task
                }
            })
            return <Task task={thisTask} key={thisTask.id} setTasks={setTasks} tasks={tasks} />
          })}
        </ul>
      </div>
    )
  }
  
  return <>{datesTasksJsx}</>;
}
