import React from "react";
import NewTaskButton from "./NewTaskButton";
import NewTaskForm from "./NewTaskForm";
import './NewTask.css';

const NewTask= ({handleSubmit,inputs,handles,displayForm,displayFormTask,Loading})=>{
    return(
        <div className="new-task_container">
          {
            !displayForm?<NewTaskButton displayFormTask={displayFormTask}/>
            :
            <NewTaskForm
            handleSubmit={handleSubmit}
            inputs={inputs}
            handles={handles}
            displayFormTask={displayFormTask}
            Loading={Loading}
          />
          }  

           
        </div>
    )
}

export default NewTask;