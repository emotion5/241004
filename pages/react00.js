
import React, { useState } from 'react';

function MyButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? '클릭됐다니깐' : '클릭해봐'}
    </button>
  );
}

export default MyButton;
