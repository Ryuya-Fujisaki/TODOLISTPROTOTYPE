import React, { useEffect, useState } from 'react';
import './styles.css';
import TodoArray from './components/TodoArray';
import InputForm from './components/InputForm';
import Select from './components/Select';
import EditForm from './components/EditForm';

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState(todos.length + 1)
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [filter, setFilter] = useState('notStarted')
  const [filteredTodos, setFilteredTodos] = useState([])

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
        {/* 三項演算子により、ステートisEditableがtrueなら、EditFormコンポーネント（編集要素）を出力し、
        falseなら、InputFormコンポーネント（入力要素）とSelectコンポーネント（todoステータスのプルダウンリスト）を出力する
        ことを定義。 */}
        {isEditable ? (
          // {/* InputFormコンポーネント（todo入力とstate更新）を出力。AppからInputFormに渡すステートと関数を定義。*/}
          <EditForm
            newTitle={newTitle}
            handleEditFormChange={handleEditFormChange}
            handleEditTodo={handleEditTodo}
            handleCloseEditForm={handleCloseEditForm}
          />
        ) : (
          <div>
            {/* InputFormコンポーネント（todo入力とstate更新）を出力。AppからInputFormに渡すステートと関数を定義。 */}
            <InputForm
              todos={todos}
              setTodos={setTodos}
              todoId={todoId}
              setTodoId={setTodoId}
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
            />
            <br />
            {/* Selectコンポーネント（todoステータスのプルダウンリスト）を出力。AppからSelectに渡すステートと関数を定義。 */}
            <Select filter={filter} setFilter={setFilter} />
          </div>
        )}
        {/* TodoArrayコンポーネント（todos配列）を出力。AppからTodoArrayに渡すステートと関数を定義。 */}
        <TodoArray
          todos={todos}
          setTodos={setTodos}
          setIsEditable={setIsEditable}
          setEditId={setEditId}
          setNewTitle={setNewTitle}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
}

export default App;
