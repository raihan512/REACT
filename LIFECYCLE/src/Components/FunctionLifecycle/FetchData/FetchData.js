import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("Loaded");

    return () => {
      console.log("Removed");
    };
  }, [number]);
  return (
    <div>
      <h1>useEffect</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment + </button>
    </div>
  );
};

export default FetchData;
