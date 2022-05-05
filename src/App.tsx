
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css"
import TaskContainer from './components/TaskContainer/TaskContainer';
import { modalWindowHelper } from "./helpers/modalWindowHelper";
import { ITask } from "./interfaces/interfaces";

function App() {
  const modalWindow = useRef<HTMLDivElement | null>(null)
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const windowApi = new modalWindowHelper(modalWindow)
  const [modalWindowInputValue, setModalWindowInputValue] = useState<string>('');
  const [modalWindowTextAreaValue, setModalWindowTextAreaValue] = useState<string>('');

  function addTask(event: React.MouseEvent) {
    const preparedTask:ITask = { 
      title: modalWindowInputValue, 
      id: Date.now(), 
      description: modalWindowTextAreaValue
    }
    dispatch({type: "ADD_TASK", task: preparedTask})
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
        <button onClick={() => windowApi.openWindow()}>Добавить задание на сегодня</button>
        <button >Посмотреть все задания</button>
      </div>
      <div ref={modalWindow} className="modale-window app__modal-window non-active">
        <button className="modale-window__close-button" onClick={() => windowApi.closeWindow()}></button>
        <div className="modal-window__inputs-container">
          <h2 className="modal-window__title">Новое задание</h2>
          <input 
          value={modalWindowInputValue}  
          onChange={(e) =>  setModalWindowInputValue(e.currentTarget.value)}
          placeholder="Название задачи" type="text" 
          className="modalWindow__title-input" 
          />
          <textarea 
          value={modalWindowTextAreaValue} 
          onChange={(e) =>  setModalWindowTextAreaValue(e.currentTarget.value)}
          placeholder="Описание задачи" 
          name="" id="" cols={30} 
          className="modalWindow__textarea"></textarea>
        </div>
        <button className="modal-window__add-task-button" onClick={(e) =>addTask(e)}>Добавить задачу</button>
      </div>
    </div>
  );
}

export default App;
