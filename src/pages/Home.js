import React,{useEffect,useState} from "react";
import {collection, query,getDoc, addDoc,doc, updateDoc,deleteDoc,onSnapshot} from "firebase/firestore";
import { db } from "../firebase";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import ListItemTask from "../components/Tasks/ListItemTask";
import NewTask from "../components/NewTask/Newtask";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [displayForm, setDisplayForm] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        const q = query(collection(db, 'tasks'));
        onSnapshot(q, (querySnapshot) => {
            setTasks(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    }, []);

    const displayFormTask = () => {
        setDisplayForm(prevDisplayForm => !prevDisplayForm)
    }

    const displayModalTask = () => {
        setDisplayModal(prevDisplayModal => !prevDisplayModal)
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'tasks'), {
                title: enteredTitle,
                description: enteredDescription,
                date: new Date(enteredDate),
            })
            setEnteredTitle('');
            setEnteredDescription('');
            setEnteredDate('')
        } catch (err) {
            alert(err)
        }
    }

    async function getDocById(id) {
        const taskDocRef = doc(db, "tasks", id);
        try {
            const docSnap = await getDoc(taskDocRef);
            if (docSnap.exists()) {
                const task = docSnap.data();
                setEnteredTitle(task.title);
                setEnteredDescription(task.description);
                setTaskId(docSnap.id);

            } else {
                console.log("Document does not exist")
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleUpdate = async (e, id) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'tasks', id)
        try {
            await updateDoc(taskDocRef, {
                title: enteredTitle,
                description: enteredDescription,
            })
            setEnteredTitle('');
            setEnteredDescription('');
        } catch (err) {
            alert(err)
        }
    }

    const deleteTask = async (id) => {
        const taskDocRef = doc(db, 'tasks', id)
        try {
            await deleteDoc(taskDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            {
                displayModal &&
                <UpdateTask
                    handleUpdate={handleUpdate}
                    displayModalTask={displayModalTask}
                    inputs={{ enteredTitle, enteredDescription, enteredDate, taskId }}
                    handles={{ titleChangeHandler, descriptionChangeHandler, dateChangeHandler }}
                />
            }

            <NewTask
                handleSubmit={handleSubmit}
                inputs={{ enteredTitle, enteredDescription, enteredDate }}
                handles={{ titleChangeHandler, descriptionChangeHandler, dateChangeHandler }}
                displayFormTask={displayFormTask}
                displayForm={displayForm}
            />

            <ListItemTask
                data={tasks}
                deleteTask={deleteTask}
                displayModalTask={displayModalTask}
                displayFormTask={displayFormTask}
                getDocById={getDocById}
            />
        </div>
    )
}

export default Home;