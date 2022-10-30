import { useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import "./Employees.css";

function Employees() {
  const employeeArray = [];

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="Employees">
      Epmloyee
      {employeeArray.map((empObj) => (
        <EmployeeCard key="empObj.results.id.value" data="empObj" />
      ))}
    </div>
  );
}

export default Employees;
