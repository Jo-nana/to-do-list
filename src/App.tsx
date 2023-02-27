import { FC, ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {

  const [tasks, setTasks] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    if (event.target.name === 'task') {
      setTasks(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  }

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <input type="text" placeholder='Task...' name='task' onChange={handleChange} />
          <input type="number" placeholder='Deadline (in days)...' name='deadline' onChange={handleChange}
           />
        </div>
        <button>Add Task</button>
      </header>
      <div className="list"></div>
    </div>
  );
}

export default App;
