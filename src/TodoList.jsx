import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (input.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = input;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, input]);
      }
      setInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addOrUpdateTask();
    }
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="input-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={editIndex !== null ? "Update task..." : "Add a new task..."}
          style={{ flex: '1', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '0.8rem' }}
        />
        <button
          onClick={addOrUpdateTask}
          style={{ padding: '10px 15px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item colorful-item">
            {task}
            <div className="task-actions">
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;