import { useEffect, useState } from "react";
import "./RandumDog.css";

function RandumDog() {
  function rndNum(array) {
    let num1 = Math.floor(Math.random() * array.length);
    console.log(num1);
    return num1;
  }

  const [rndDog, setRndDog] = useState("מחפש כלב...");

  useEffect(() => {
    const dogsArray = [
      "Pitbull",
      "German Sheperd",
      "border koli",
      "labradour",
      "Labradoodle",
    ];
    const intervalId = setInterval(() => {
      const returnNum = rndNum(dogsArray);
      setRndDog(dogsArray[returnNum]);
      // console.log(dogsArray[returnNum]);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="RandumDog">
      <h3>{rndDog}</h3>
    </div>
  );
}

export default RandumDog;
