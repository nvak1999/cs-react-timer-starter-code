import { useState, useRef, useEffect } from "react";

const useTimer = (init = 0) => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isStart, setIsStart] = useState("");
  const [refInterval, setRefInterval] = useState(null);

  const active = useRef(null);

  useEffect(() => {
    const resetTime = new Date(0, 0, 0, 0, 0, 0);
    const currenTime = time;
    switch (isStart) {
      case "stop":
        setTime(currenTime);
        break;
      case "start":
        setTimeout(() => {
          const newTime = new Date(
            0,
            0,
            0,
            time.getHours(),
            time.getMinutes(),
            time.getSeconds() + 1
          );
          setTime(newTime);
        }, 1000);
        break;
      case "reset":
        setTime(resetTime);
        break;
      default:
    }
  }, [time, isStart]);

  const startTimer = () => {
    setIsStart("start");
    active.current.disabled = true;
  };
  const stopTimer = () => {
    setIsStart("stop");
    setRefInterval(time);
    console.log(refInterval);
  };
  const resetTimer = () => {
    setIsStart("reset");
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
