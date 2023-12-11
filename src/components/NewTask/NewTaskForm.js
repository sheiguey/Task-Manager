import React from 'react';


const NewTaskForm = ({handleSubmit,inputs,handles,displayFormTask}) => {
  return (
      <form onSubmit={handleSubmit}>
        <div className='new-task__controls'>
          <div className='new-task__control'>
            <label>Title</label>
            <input
              type='text'
              value={inputs.enteredTitle}
              onChange={handles.titleChangeHandler}
              required
            />
          </div>
          <div className='new-task__control'>
            <label>description</label>
            <input
              type='text'
              value={inputs.enteredDescription}
              onChange={handles.descriptionChangeHandler}
              required
            />
          </div>
          <div className='new-task__control'>
            <label>Date</label>
            <input
              type='dateTime-local'
              min='2019-01-01'
              value={inputs.enteredDate}
              onChange={handles.dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-task__actions'>
          <button type='submit'>Add task</button>
          <button type='button' onClick={()=>displayFormTask()}>close</button>
        </div>
      </form>
  );
};

export default NewTaskForm;
