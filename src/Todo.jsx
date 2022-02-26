import React, { useState } from 'react';

function Todo({ categoryList }) {
  const [first, setfirst] = useState();

  // const handleOnChange

  return (
    <div>
      <select name="" id="">
        {categoryList.map((item) => {
          return (
            <option value="" key={Math.floor(Math.random * 1000 + 1)}>
              {item.category}
            </option>
          );
        })}
      </select>
      <select name="" id="">
        {categoryList.map((item) => {
          return (
            <option value="" key={Math.floor(Math.random * 1000 + 1)}>
              {item.status}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Todo;
