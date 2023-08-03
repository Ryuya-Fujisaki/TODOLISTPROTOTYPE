import React from 'react';

const Select = ({filter, setFilter}) => {
  return (
    <div className='todofilter'>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value='all'>すべて</option>
              <option value='notStarted'>未着手</option>
              <option value='inProgress'>作業中</option>
              <option value='done'>完了</option>
            </select>
    </div>
  )
}

export default Select;
