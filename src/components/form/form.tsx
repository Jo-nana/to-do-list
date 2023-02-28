import { ChangeEvent, Fragment, useState } from 'react';
import './form.scss';

interface Props{
  task: string;
  taskDescription: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deadLine: number;
  addTask: () => void;
}

const Form = ({task, handleChange, deadLine, addTask, taskDescription}: Props) => {

// create a toggle function for the modal
const [modal, setModal] = useState<boolean>(false);
const toggleModal = (): void => {
  setModal(!modal);
}

return(
  <Fragment>
    <div onClick={toggleModal}>
      <i className="fa-solid fa-circle-plus"></i>
    </div>

    {modal && (
      <div className="modal">
        <h2>Add Task</h2>
        <div className='overlay' onClick={toggleModal}></div>
        <div className="modal-content">
          <h4>Title</h4>
          <input
            type="text"
            placeholder='Title...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <h4>Description</h4>
          <input
          type="text"
          placeholder='Description...'
          name='description'
          value={taskDescription}
          onChange={handleChange}
          />
          <h4>Deadline</h4>
          <input
            type="number"
            placeholder='Deadline (in days)...'
            name='deadline'
            value={deadLine}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
          <button className='close-modal' onClick={toggleModal}>Close</button>
        </div>
      </div>
    )}
  </Fragment>
)
}

export default Form;
