import { Task } from "../../Interfaces";

import './todotasks.scss';

// setting up the interface for the props, with Task as the type
interface Props {
  task: Task;
  completeTask: (taskNameToDelete: string) => void;
}

// displaying the task into a list
const TodoTasks = ({ task, completeTask }: Props) => {
  return (
    <div className='task-container'>
      <div className='task-content'>
        <h1>{task.taskName}</h1>
        <p>{task.taskDescription}</p>
      </div>
      <div className='task-content-bottom'>
        <p>{task.taskDeadline} days</p>
        <div className='trash-icon' onClick={() => completeTask(task.taskName)}>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
};

export default TodoTasks;
