import { useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';

function App() {
  function getTasksFromLocalStorage() {
    const tasksFromLocalStorage = window.localStorage.getItem('tasks');
    if ( tasksFromLocalStorage !== null ) {
        return JSON.parse(tasksFromLocalStorage);
    }
    return [{
      id: 1,
      title: 'create a new to-do in this app',
      date: new Date(),
      isDone: false
    }];
  }

  const [tasks, setTasks] = useState(/*[
    {
      id: 1,
      title: 'пропылесосить лестницу',
      date: new Date()
    },
    {
      id: 2,
      title: 'приготовить бабл ти',
      date: new Date('07.04.2024')
    },
    {
      id: 3,
      title: 'сплести браслет',
      date: new Date('07.02.2024')
    },
  ]*/
  getTasksFromLocalStorage());
  const [tab, setTab] = useState('app')
  return (
    <>
      <div id="modal"></div>
      <Header tab={tab} setTab={setTab} />
      <MainContainer tasks={tasks} setTasks={setTasks} tab={tab} />
      
    </>
  );
}

export default App;
