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
      "Pit bull",
      "German Shepherd",
      "Border Collie",
      "Labrador retriever",
      "Labradoodle",
      "Dogue de Bordeaux",
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
      <h3>סוגי כלבים גזעיים במאגר כרגע:</h3>
      <h3 id="dog"> {rndDog}</h3>
    </div>
  );
}

export default RandumDog;
