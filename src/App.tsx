
import { useDispatch, useSelector } from "react-redux";

import "./App.css"
import TaskContainer from './components/TaskContainer/TaskContainer';

function App() {
  const dispatch = useDispatch()
  function addTask() {
    dispatch({ type: "ADD_TASK", task: { title: "Lox" } })
  }
  const store = useSelector(store => store)
  console.log(store);

  return (
    <div className="app">
      <div className="app__title">
        <h2>Список дел</h2>
      </div>
      <div className="app__flex-container">
        <TaskContainer title={"Ожидание"} backgroundColor={"lightseagreen"} />
        <TaskContainer title={"Задачи на сегодня"} backgroundColor={"lightGreen"} />
        <TaskContainer title={"Выполненные задачи"} backgroundColor={"orange"} />
      </div>
      <div className="app__button-flex-container">
          <button onClick={addTask}>Добавить задание на сегодня</button>
          <button >Посмотреть все задания</button>
      </div>
    </div>
  );
}

export default App;
