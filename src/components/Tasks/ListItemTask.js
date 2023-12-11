import React from "react";
import TaskItem from "./TaskItem";
import './ListItemTask.css'
import Card from "../../UI/Card";

const ListItemTask =({data,deleteTask,displayModalTask,getDocById,displayFormTask})=>{
    
   return(
       <div>
         <Card className="tasks">
            <ul className="task-list">
               {data?
                  data.map((task)=>(
                     <TaskItem 
                        key={task.id} 
                        id={task.id} 
                        title={task.data.title} 
                        description={task.data.description} 
                        date={task.data.date} 
                        deleteTask={()=>deleteTask(task.id)}
                        displayModalTask ={displayModalTask}
                        getDocById={getDocById}
                        displayFormTask={displayFormTask}
                     /> 
                  )):<p>No data found for the moment</p>
               }
            </ul>
         </Card>
       </div>
   )
}

export default ListItemTask;