'use client';
import React, { useState } from 'react';

function MyButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? '클릭됨' : '클릭해봐'}
    </button>
  );
}

export default MyButton;
