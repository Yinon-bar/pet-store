import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="EmploteeCard">
      {console.log(props.data.name.first)}
      <h3>{props.data.name.first}</h3>
    </div>
  );
}

export default EmployeeCard;
