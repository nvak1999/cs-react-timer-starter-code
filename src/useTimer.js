import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    if (isStart.current) {
      refInterval.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
