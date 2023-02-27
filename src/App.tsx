import { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTasks from './components/todotasks';
import { Task } from './Interfaces'

const App: FC = () => {
  // state variables
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  // function to handle change in input fields
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  }

  // function to add task to todoList array
  const addTask = (): void => {
    const newTask = { taskName: task, taskDeadline: deadLine };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete; // keep all tasks that don't match the taskNameToDelete
    }))
  }
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <input
            type="text"
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder='Deadline (in days)...'
            name='deadline'
            value={deadLine}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </header>
      <div className="list">
        {todoList.map((task: Task, key: number)=> {
          return <TodoTasks key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
}

export default App;
