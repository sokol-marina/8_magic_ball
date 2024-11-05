import React, { useState } from 'react';
import answersList from './../answersList';

const EightBall = () => {
  const [message, setMessage] = useState({ msg: '8', color: 'black' });
  const [greenCount, setGreenCount] = useState(0);
  const [goldenrodCount, setGoldenrodCount] = useState(0);
  const [redCount, setRedCount] = useState(0);

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answersList.length);
    const newMessage = answersList[randomIndex];
    setMessage(newMessage);

    // Update the color count
    if (newMessage.color === 'green') {
      setGreenCount(greenCount + 1);
    } else if (newMessage.color === 'goldenrod') {
      setGoldenrodCount(goldenrodCount + 1);
    } else if (newMessage.color === 'red') {
      setRedCount(redCount + 1);
    }
  };

  const clearAnswer = () => {
    setMessage({ msg: '8', color: 'black' });
  };

  return (
    <div className="eight-ball-container">
      <div className="eight-ball" style={{ backgroundColor: message.color }}>
        <div className="message-text">{message.msg}</div>
      </div>
      <button className="button" onClick={getRandomAnswer}>
        Shake the Magic 8-Ball
      </button>
      <button className="button" onClick={clearAnswer}>
        Clear
      </button>
      <div className="color-counts">
        <p>Green Count: {greenCount}</p>
        <p>Goldenrod Count: {goldenrodCount}</p>
        <p>Red Count: {redCount}</p>
      </div>
    </div>
  );
};
export default EightBall;
