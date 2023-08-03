import React from 'react';

const style = {
    width: '780px',
    color: '#fff',
    padding: '20px',
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    margin: '5px, 5px, 10px, 5px',
    backgroundColor: '#a0cf92',
}

const InputForm = ({todos, setTodos, todoId, setTodoId, todoTitle, setTodoTitle}) => {

    const handleAddFormChanges = (e) => { setTodoTitle(e.target.value) }

    const handleAddTodo = () => {
      setTodos([...todos, { id: todoId, title: todoTitle, status: "notStarted" }])
      setTodoId(todoId + 1)
      setTodoTitle('')
    }

  return (
    <div>
        <input
          style={style}
          type="text"
          label="タイトル"
          value={todoTitle}
          onChange={handleAddFormChanges}
          className='todo'
          placeholder="ここにTODOを入力し作成ボタンを押してください"
        />
        <button onClick={handleAddTodo}>作成</button>
    </div>
  )
}

export default InputForm;
