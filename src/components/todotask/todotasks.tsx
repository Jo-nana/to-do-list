import { Task } from "../../Interfaces";
import { useState } from "react";
import './todotasks.scss';

// setting up the interface for the props, with Task as the type
interface Props {
  task: Task;
  completeTask: (taskNameToDelete: string) => void;
}

// displaying the task into a list
const TodoTasks = ({ task, completeTask }: Props) => {
  const [isComplete, setIsComplete] = useState(false);

  const toggleComplete = () => {
    setIsComplete(!isComplete);
  }

  const taskContentClass = isComplete ? 'task-content crossed-out' : '';

  return (
    <div className='task-container'>
      <div className={`${taskContentClass} task-content`}>
        <h1>{task.taskName}</h1>
        <p>{task.taskDescription}</p>
      </div>
      <div className='task-content-bottom'>
        <p className={taskContentClass}>{task.taskDeadline} days</p>
        <div className='checkbox-bottom'>
          <div className='task-done'>
            <input type="checkbox" onChange={toggleComplete} checked={isComplete} />
            <label>Done</label>
          </div>
          <div className='trash-icon' onClick={() => completeTask(task.taskName)}>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TodoTasks;
