import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="EmploteeCard">
      <h1>{props.name.first}</h1>
      <h1>Employee</h1>
    </div>
  );
}

export default EmployeeCard;
