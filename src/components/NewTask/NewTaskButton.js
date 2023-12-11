import React from "react";

const NewTaskButton = ({displayFormTask})=>{
    return(
           <button className="new-task_button" onClick={()=>displayFormTask()} >Add new Task</button>
    )
}

export default NewTaskButton