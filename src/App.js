import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Udemy視聴React学習' },
    { id: 2, title: 'ReactTODOリストアイデア思案' },
    { id: 3, title: '8月プログラミング学習スケジュール確認' }
  ])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState(todos.length + 1)
  const handleAddFormChanges = (e) => { setTodoTitle(e.target.value) }
  const handleAddTodo = () => {
    setTodos([...todos, { id: todoId, title: todoTitle }])
    setTodoId(todoId + 1)
    setTodoTitle('')
  }

  const handleDeleteTodo = (targetTodo) => {
    console.log(targetTodo)

    setTodos(todos.filter((todo) => todo !== targetTodo))
  }

  return (
    <div className="App">
      <input
        type="text"
        label="タイトル"
        value={todoTitle}
        onChange={handleAddFormChanges}
      />
      <button onClick={handleAddTodo}>作成</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
