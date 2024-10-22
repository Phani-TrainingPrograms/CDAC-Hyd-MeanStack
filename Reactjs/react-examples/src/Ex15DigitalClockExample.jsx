import React, {useEffect, useState} from "react";

export default function Ex15DigitalClock(){
    const [time, setTime] = useState(new Date())
    

    useEffect(()=>{
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    }, [])

    function formatTime(){
        let hrs = time.getHours()
        const mins = time.getMinutes();
        const secs = time.getSeconds()
        const meridian = hrs >= 12 ? "PM" : "AM" 

        hrs = hrs % 12 || 12
        return `${padZero(hrs)}: ${padZero(mins)} : ${padZero(secs)} ${meridian}`
    }


    function padZero(number, length) {
        return (number < 10 ? "0" : "") + number;
    }
    return (
        <div className="clock-container">
            <div className="clock">
                <p>{formatTime()}</p>
            </div>
        </div>
    )
}