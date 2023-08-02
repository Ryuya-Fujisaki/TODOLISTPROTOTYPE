import React, { useState } from 'react';

const InputEditArea = () => {
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [todoId, setTodoId] = useState(todos.length + 1)
    const [isEditable, setIsEditable] = useState(false)
    const [editId, setEditId] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [filter, setFilter] = useState('notStarted')
    const [filteredTodos, setFilteredTodos] = useState([])
  
    const handleAddFormChanges = (e) => { setTodoTitle(e.target.value) }
  
    const handleAddTodo = () => {
      setTodos([...todos, { id: todoId, title: todoTitle, status: "notStarted" }])
      setTodoId(todoId + 1)
      setTodoTitle('')
    }

    const handleEditFormChange = (e) => {
        setNewTitle(e.target.value)
      }
    
    const handleCloseEditForm = (todo) => {
      setIsEditable(false)
      setEditId('')
    }

    const handleEditTodo = () => {
      const newArray = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: newTitle } : todo)
      setTodos(newArray)
      setEditId('')
      setNewTitle('')
      handleCloseEditForm('')
    }

  return (
    <div>
        {isEditable ? (
          <div>
            <input
              type="text"
              label="新しいタイトル"
              value={newTitle}
              onChange={handleEditFormChange}
              className='editform'
            />
            <button onClick={handleEditTodo}>←編集し保存</button>
            <button onClick={handleCloseEditForm}>キャンセル</button>
          </div>
        ) : (
          <div className='todofilter'>
            <input
              type="text"
              label="タイトル"
              value={todoTitle}
              onChange={handleAddFormChanges}
              className='todo'
              placeholder="ここにTODOを入力し作成ボタンを押してください"
            />
            <button onClick={handleAddTodo}>作成</button>
            <br />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value='all'>すべて</option>
              <option value='notStarted'>未着手</option>
              <option value='inProgress'>作業中</option>
              <option value='done'>完了</option>
            </select>
          </div>
        )}
    </div>
  )
}

export default InputEditArea
