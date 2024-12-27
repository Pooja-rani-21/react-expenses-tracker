  
   
import React, { useState } from 'react';

export default function Checkbox() {
  const [checkbox, setCheckbox] = useState({
    Tamil: false,
    English: false,
    Maths: false,
  });

  function task(e) {
    let { name,checked } = e.target;
    setCheckbox((prev) => ({
      ...prev,[name]: checked,
    }));
    console.log(name);
  
  }

  return (
    <div>
      <h1>Subject </h1>
      <h3>
        <label>
          Tamil
          <input
            type="checkbox"
            name="Tamil"
            checked={checkbox.Tamil}
            onChange={task}
          />
        </label>
        <br />
        <label>
          English
          <input
            type="checkbox"
            name="English"
            checked={checkbox.English}
            onChange={task}
          />
        </label>
        <br />
        <label>
          Maths
          <input
            type="checkbox"
            name="Maths"
            checked={checkbox.Maths}
            onChange={task}
          />
        </label>
      </h3>
    </div>
  );
}


