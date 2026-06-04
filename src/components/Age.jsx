import React, { useState } from 'react';
import Increment from './Increment';

function Age() {
  const initialAge = 22;
  const [age, setAge] = useState(initialAge);

  return (
    <>
      <>
      <Increment />
      </>
      <p>My current age is: {age}</p>

      <div>
        <p>Click the button for finding my next year's age.</p>

        <button onClick={() => setAge(age + 1)}>
          Click me
        </button>
      </div>
      <div>
        <button onClick={() => setAge(initialAge)}>
          Reset
        </button>
      </div>
    </>
  
  );
}

export default Age;