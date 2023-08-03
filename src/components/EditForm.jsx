import React from 'react';

const style = {
    width: '640px',
    color: '#fff',
    backgroundColor: '#a0cf92',
    margin: '5px',
    padding: '20px',
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
}

const EditForm = ({newTitle, handleEditFormChange, handleEditTodo, handleCloseEditForm}) => {
  return (
    <div>
      <input
        style={style}
        type="text"
        label="新しいタイトル"
        value={newTitle}
        onChange={handleEditFormChange}
      />
      <button onClick={handleEditTodo}>←編集し保存</button>
      <button onClick={handleCloseEditForm}>キャンセル</button>
    </div>
  )
}

export default EditForm;
