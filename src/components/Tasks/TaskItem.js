import React from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import DateTask from "./DateTask";
import './TaskItem.css'

const TaskItem = ({id,title,description,date,deleteTask,displayModalTask,getDocById,displayFormTask})=>{
    return(
        <li>
            <Card className="task-item">
                <DateTask date={date}/>
                <div className='task-item__container'>
                    <h2>{title}</h2>
                    <div className='task-item__description'><p className="description">{description}</p></div>
                </div>
                <div className="task-item_actions">
                    <Link to={`/task/${id}`} ><img src="/icons/detail.png" alt="detail icon" /></Link>
                    <a href="#/" onClick={()=>{displayModalTask();getDocById(id);displayFormTask()}}><img src="/icons/update-icon.png" alt="update icon" /></a>
                    <a href="#/" onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?'))deleteTask()}}><img src="/icons/delete-icon.png" alt="delete icon" /></a>
                </div>
            </Card>
        </li>
    )
}

export default TaskItem;