import { Task } from "../../Interfaces";

// setting up the interface for the props, with Task as the type
interface Props {
  task: Task;
  completeTask: (taskNameToDelete: string) => void;
}

// displaying the task into a list
const TodoTasks = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
        <span>{task.taskDeadline} days</span>
      </div>
      <button className='btn-delete' onClick={() => completeTask(task.taskName)}>X</button>
    </div>
  )
};

export default TodoTasks;
