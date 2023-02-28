import { FC, ChangeEvent, useState } from 'react';
import './App.scss';
import TodoTasks from './components/todotask/todotasks';
import { Task } from './Interfaces'
import Form from './components/form/form'

const App: FC = () => {
  // state variables
  const [task, setTask] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  // function to handle change in input fields
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else if (event.target.name === 'description') {
      setTaskDescription(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  }

  // function to add task to todoList array
  const addTask = (): void => {
    const newTask = { taskName: task, taskDeadline: deadLine, taskDescription: taskDescription };
    setTodoList([...todoList, newTask]);
    setTask("");
    setTaskDescription("");
    setDeadLine(0);
  }


 //function for the delete button
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete; // keep all tasks that don't match the taskNameToDelete
    }))
  }
  return (
  <div className="App">
    <header className="header">
      <h1>Todo</h1>
      <Form task={task} handleChange={handleChange} deadLine={deadLine} addTask={addTask} taskDescription={taskDescription}/>
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
