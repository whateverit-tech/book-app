import React, { useState, useEffect } from 'react';
import {
    collection, 
    query, 
    addDoc, 
    orderBy, 
    onSnapshot, 
    Timestamp,
} from "firebase/firestore";
import {db} from '../firebase';
import FancyTitle from '../components/FancyTitle';
import TodoItem from '../components/TodoItem';
import { set } from 'lodash';

function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const q = query(collection(db, 'test'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setTasks(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
    },[]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleCreateTodo = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'test'), {
                title: title,
                description: desc,
                completed: false,
                created: Timestamp.now()
            })
            setTitle("");
            setDesc("");
            // onClose()
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="flex items-center gap-1">
                    <FancyTitle title="Todo"/>
                    <span className="text-xs text-gray-600">with</span>
                    <span className="font-semibold text-orange-400">Firebase</span>
                </div>
            </div>

            <div className="flex gap-2 items-center my-6">
                <input type="text" 
                    className="border border-gray-300 px-2 py-1 rounded-md"
                    value={title} 
                    onChange={handleTitle}
                    placeholder="New Task" />
                
                <input type="text" 
                    className="border border-gray-300 px-2 py-1 rounded-md"
                    value={desc} 
                    onChange={handleDesc}
                    placeholder="New Description" />

                <button className="px-2 py-1 rounded-md bg-purple-500 text-white font-semibold"
                    onClick={handleCreateTodo}>
                    Create
                </button>
            </div>

            <hr className='mb-4' />

            <div className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                    <TodoItem todo={task.data} id={task.id} key={index}/>
                ))}
            </div>
        </>
    )
}

export default TodoPage