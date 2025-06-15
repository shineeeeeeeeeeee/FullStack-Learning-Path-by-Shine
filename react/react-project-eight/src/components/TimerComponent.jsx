import React, { useEffect, useState } from 'react'

function TimerComponent(){

    const [sec, setSec] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("setInterval started!");
            setSec(prevSec => prevSec + 1);
        }, 1000);

        return() => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div>
      <h1>Seconds: {sec}</h1>
    </div>
  )
}

export default TimerComponent
