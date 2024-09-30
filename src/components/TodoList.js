import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure this path is correct
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'; // Firestore methods
import './TodoList.css'; // Import the CSS file

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    const tasksCollectionRef = collection(db, 'tasks');
    const q = query(tasksCollectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTasks(taskList);
    });

    return unsubscribe;
  }, []);

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        // Add task to Firestore
        await addDoc(collection(db, 'tasks'), {
          text: newTask,
          done: false,
          createdAt: Date.now(),
        });
        setNewTask(''); // Clear input after adding
      } catch (error) {
        console.error('Error adding task: ', error);
      }
    }
  };

  const toggleTask = async (id, currentStatus) => {
    const taskDocRef = doc(db, 'tasks', id);
    try {
      await updateDoc(taskDocRef, {
        done: !currentStatus,
      });
    } catch (error) {
      console.error('Error updating task: ', error);
    }
  };

  const deleteTask = async (id) => {
    const taskDocRef = doc(db, 'tasks', id);
    try {
      await deleteDoc(taskDocRef);
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
        className="input-field"
      />
      <button className="button button1" onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-text" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div className="task-buttons">
              <button className="button button2" onClick={() => toggleTask(task.id, task.done)}>
                {task.done ? 'Undo' : 'Done'}
              </button>
              <button className="button button3" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
