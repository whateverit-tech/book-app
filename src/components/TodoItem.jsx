import React from 'react'
import { FiFile, FiTrash } from 'react-icons/fi'
import {db} from '../firebase';
import {
  doc,
  deleteDoc
} from "firebase/firestore";

function TodoItem({ todo, id }) {

  const handleDelete = async () => {
    const taskDocRef = doc(db, 'test', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    } 
  }

  return (
    <div className="group border border-gray-300 px-2 py-2 rounded-md flex gap-1 justify-between cursor-pointer hover:bg-orange-400 hover:border-orange-300 hover:shadow-xl transition duration-300 ease-in-out">
        <div className="flex gap-2 items-center">
          <FiFile className="text-orange-400 group-hover:text-white"/>
          <div className="flex gap-1">
            <span className="font-semibold text-gray-700">{ todo.title }</span>
            <span>:</span>
            <span className='text-gray-400 group-hover:text-white'>{ todo.description }</span>
          </div>
        </div>

        <button className="bg-orange-50 text-orange-300 p-1 rounded-md group-hover:bg-white hover:text-red-400 transition duration-150 ease-in-out"
          onClick={handleDelete}>
          <FiTrash size={14}/>
        </button>
    </div>
  )
}

export default TodoItem