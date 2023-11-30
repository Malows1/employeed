"use client";
import React from "react";
const TimeTracker = () => {
  const [time, setTime] = React.useState({
    time_in: "",
    time_out: "",
  });

  const handleTimeIn = () => {
    // Allow time_in update only if it's not set yet
    if (!time.time_in && !time.time_out) {
      setTime({
        ...time,
        time_in: new Date().toLocaleTimeString(),
      });
    }
  };

  const handleTimeOut = () => {
    // Allow time_out update only if time_in is set and time_out is not set
    if (time.time_in && !time.time_out) {
      setTime({
        ...time,
        time_out: new Date().toLocaleTimeString(),
      });
    }
  };

  return (
    <div>
      <h2>Time Tracker</h2>
      <p>Time In: {time.time_in || "Not yet timed in"}</p>
      <p>Time Out: {time.time_out || "Not yet timed out"}</p>
      <button
        onClick={handleTimeIn}
        disabled={time.time_in && !time.time_out ? true : false}
      >
        Time In
      </button>
      {time.time_in && !time.time_out && (
        <button onClick={handleTimeOut}>Time Out</button>
      )}
    </div>
  );
};

export default TimeTracker;
