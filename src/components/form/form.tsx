import { ChangeEvent, Fragment, useState } from 'react';

import Button from '../../components/button/button'

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
        <div className='overlay' onClick={toggleModal}></div>
        <div className="modal-content">
          <h2>Add Task</h2>
          <h4>Title</h4>
          <input
            type="text"
            placeholder='Add a title...'
            name='task'
            className='input-box task-title'
            value={task}
            onChange={handleChange}
          />
          <h4>Description</h4>
          <input
            type="textarea"
            placeholder='Add a description...'
            name='description'
            className='input-box task-description'
            value={taskDescription}
            onChange={handleChange}
          />
          <h4>Deadline (in days)</h4>
          <input
            type="number"
            placeholder='Deadline (in days)...'
            name='deadline'
            className='input-box task-deadline'
            value={deadLine}
            onChange={handleChange}
          />
          <Button onClick={addTask}>Add Task</Button>
          <div className='close-modal'onClick={toggleModal}>
            <i className="fa-sharp fa-solid fa-circle-xmark "></i>
          </div>
        </div>
      </div>
    )}
  </Fragment>
)
}

export default Form;
