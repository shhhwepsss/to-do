
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css"
import TaskContainer from './components/TaskContainer/TaskContainer';
import { modalWindowHelper } from "./helpers/modalWindowHelper";

function App() {
  const modalWindow = useRef<HTMLDivElement | null>(null)
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const windowApi = new modalWindowHelper(modalWindow)

  function addTask() {
    windowApi.openWindow()
  }

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
      <div ref={modalWindow} className="modale-window app__modal-window non-active">
        <button className="modale-window__close-button" onClick={() => windowApi.closeWindow()}></button>
        <div className="modal-window__inputs-container">
          <h2 className="modal-window__title">Новое задание</h2>
          <input placeholder="Название задачи" type="text" className="modalWindow__title-input" />
          <textarea placeholder="Описание задачи" name="" id="" cols={30} rows={10} className="modalWindow__textarea"></textarea>
        </div>
        <button className="modal-window__add-task-button">Добавить задачу</button>
      </div>
    </div>
  );
}

export default App;
