import React, { useEffect, useState } from 'react';
import './styles.css';
import InputEditArea from './components/InputEditArea';

const App = () => {
  const [todos, setTodos] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [filter, setFilter] = useState('notStarted')
  const [filteredTodos, setFilteredTodos] = useState([])

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }

  const handleOpenEditForm = (todo) => {
    setIsEditable(true)
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

  const handleCloseEditForm = (todo) => {
    setIsEditable(false)
    setEditId('')
  }

  const handleStatusChange = (targetTodo, e) => {
    console.log(targetTodo)

    const newArray = todos.map((todo) => todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    )
    setTodos(newArray)
  }

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilteredTodos(todos.filter((todo) => todo.status === 'notStarted'))
          break
        case 'inProgress':
          setFilteredTodos(todos.filter((todo) => todo.status === 'inProgress'))
          break
        case 'done':
          setFilteredTodos(todos.filter((todo) => todo.status === 'done'))
          break
        default:
          setFilteredTodos(todos)
      }
    }
    filteringTodos()
  }, [filter, todos])

  return (
    <>
      <div className="App">
        <InputEditArea />
        <ul className='todolist'>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <select
                value={todo.status}
                onChange={(e) => handleStatusChange(todo, e)}
              >
                <option value="notStarted">未着手</option>
                <option value="inProgress">作業中</option>
                <option value="done">完了</option>
              </select>
              <button onClick={() => { handleOpenEditForm(todo) }}>編集</button>
              <button onClick={() => { handleDeleteTodo(todo) }}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
