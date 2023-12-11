import React from "react";
import './updateTask.css'

const UpdateTask = ({handles,handleUpdate,inputs,displayModalTask}) => {
    const id=  inputs.taskId
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="close-modal-btn-container">
                    <button className="modal-close-btn" onClick={()=>displayModalTask()} >X</button>
                </div>
                <div className="modal-inner">
                    <form >
                        <div className='update-task__controls'>
                            <div className='update-task__control'>
                                <label>Title</label>
                                <input
                                    type='text'
                                    value={inputs.enteredTitle}
                                    onChange={handles.titleChangeHandler}  
                                />
                            </div>
                            <div className='update-task__control'>
                                <label>description</label>
                                <textarea
                                    value={inputs.enteredDescription}
                                    onChange={handles.descriptionChangeHandler}
                                    rows="5" cols="40"
                                >
                                </textarea>
                            </div>
                            <div className='update-task__control'>
                                <label>Date</label>
                                <input
                                    type='dateTime-local'
                                    min='2019-01-01'
                                    value={inputs.enteredDate}
                                    onChange={handles.dateChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="modal-btn_submit">
                            <button type="submit" className="modal-btn" onClick={(e)=>handleUpdate(e,id)} >Accept</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpdateTask;