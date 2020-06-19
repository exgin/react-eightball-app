import React, { useState } from 'react';
import './Eightball.css';

const Eightball = ({ answers }) => {
  // get random idx of the answers
  const randomIdx = (arr) => {
    const ranIdx = Math.floor(Math.random() * arr.length);
    return arr[ranIdx];
  };

  //   const [msg, setMsg] = useState(randomIdx(answers).msg);
  //   const [color, setColor] = useState(randomIdx(answers).color);

  const [order, setOrder] = useState(randomIdx(answers));
  const { color, msg } = order;

  const roll = () => {
    setOrder(randomIdx(answers));
  };

  return (
    <div className='Eightball' style={{ backgroundColor: color }}>
      <p className='Eightball-text'>{msg}</p>
      <button className='Eightball-btn' onClick={roll}>
        Roll 8 ball!
      </button>
    </div>
  );
};

/* Default Prop */

// Eightball.defaultProps = {
//   answers: [
//     { msg: 'It is certain.', color: 'green' },
//     { msg: 'It is decidedly so.', color: 'green' },
//     { msg: 'Without a doubt.', color: 'green' },
//     { msg: 'Yes - definitely.', color: 'green' },
//     { msg: 'You may rely on it.', color: 'green' },
//     { msg: 'As I see it, yes.', color: 'green' },
//     { msg: 'Most likely.', color: 'green' },
//     { msg: 'Outlook good.', color: 'green' },
//     { msg: 'Yes.', color: 'green' },
//     { msg: 'Signs point to yes.', color: 'goldenrod' },
//     { msg: 'Reply hazy, try again.', color: 'goldenrod' },
//     { msg: 'Ask again later.', color: 'goldenrod' },
//     { msg: 'Better not tell you now.', color: 'goldenrod' },
//     { msg: 'Cannot predict now.', color: 'goldenrod' },
//     { msg: 'Concentrate and ask again.', color: 'goldenrod' },
//     { msg: "Don't count on it.", color: 'red' },
//     { msg: 'My reply is no.', color: 'red' },
//     { msg: 'My sources say no.', color: 'red' },
//     { msg: 'Outlook not so good.', color: 'red' },
//     { msg: 'Very doubtful.', color: 'red' },
//   ],
// };

export default Eightball;
