import { useEffect, useState } from "react";
let Timer = () => {
  let [ticker, setTicker] = useState(0);
  useEffect(() => {
      const time = setInterval(() => {
        setTicker((prev)=>prev+1);
      }, 1000);
    return ()=>{
        clearInterval(time);
    };
  }, []);
  useEffect(()=>{
    console.log(ticker)
  },[ticker]);
  return (
    <div>
      <h3>Ticker</h3>
      <h1>{ticker}</h1>
    </div>
  );
};

export default Timer
