import React, { useState,useEffect } from "react";
import {getDoc,doc} from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router";
import './TaskDetail.css';


const TaskDetail = ()=>{
    const [task,setTask]=useState({})
    const params = useParams();

  
    const getTask = async ()=>{
        const taskDocRef = doc(db, "tasks", params.id);
        try {
            const docSnap = await getDoc(taskDocRef);
            if (docSnap.exists()) {
                const task = docSnap.data();
                setTask(task);
                console.log(task)
            } else {
                console.log("Document does not exist")
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(()=>{
        getTask()
    },[])
    
    return (
      <div className="task-detail_container" >
         <h2>{task.title}</h2>
         <p>{task.description}</p>
      </div>
    )
}

export default TaskDetail;