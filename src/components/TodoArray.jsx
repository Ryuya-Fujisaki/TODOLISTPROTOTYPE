import React from 'react';

const style = {
    width: '840px',
    borderRadius: '6px',
    listStyleType: 'decimal',
    backgroundColor: '#ffd77a',
    color: '#1e38a1',
}

const TodoArray = ({todos, setTodos, setEditId, setIsEditable, setNewTitle, filteredTodos}) => {

    const handleStatusChange = (targetTodo, e) => {
        console.log(targetTodo)
    
    const newArray = todos.map((todo) => todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    )
    setTodos(newArray)
    }

    const handleDeleteTodo = (targetTodo) => {
        setTodos(todos.filter((todo) => todo !== targetTodo))
    }

    const handleOpenEditForm = (todo) => {
      setIsEditable(true)
      setEditId(todo.id)
      setNewTitle(todo.title)
    }

  return (
    <div style={style}>
        <ul>
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
  )
}

export default TodoArray;
