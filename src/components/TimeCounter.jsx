import React, {useState, useEffect} from 'react';
import { randomIntegerGenerator } from '../utils/methods';

function TimeCounter({ timeIsUp, setTimeIsUp }) {
  const [seconds, setSeconds] = useState(randomIntegerGenerator(30, 60));

  useEffect(() => {
      if (seconds > 0 && !timeIsUp) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
      else {
        setTimeIsUp(true);
        setSeconds(0);
      }
  }, [seconds]);

  return (
    <div>
      <p>Time Left: {(seconds > 1 ? seconds + ' seconds' : seconds + ' second')}</p>
    </div>
  );
}

export default TimeCounter;