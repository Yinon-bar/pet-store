import { useState } from "react";
import { useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import "./Employees.css";

function Employees() {
  let [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((resp) => resp.json())
      .then((data) => {
        setEmployeeArray(data.results);
      });
  }, []);

  let id = 0;

  return (
    <div className="Employees">
      {console.log(employeeArray)}
      {employeeArray.map((empObj) => (
        <EmployeeCard key={id++} data={empObj} />
      ))}
    </div>
  );
}

export default Employees;
