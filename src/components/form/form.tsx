import { ChangeEvent, Fragment } from 'react';
import './form.scss';

interface Props{
  task: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deadLine: number;
  addTask: () => void;
}

const Form = ({task, handleChange, deadLine, addTask}: Props) => {
return(
  <Fragment>
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
  </Fragment>
)
}

export default Form;
