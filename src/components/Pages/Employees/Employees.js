import { useEffect } from "react";
import "./Employees.css";

function Employees() {
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="Employees">
      Epmloyee
      <h1>{}</h1>
    </div>
  );
}

export default Employees;
