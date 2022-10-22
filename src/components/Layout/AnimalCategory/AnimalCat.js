import "./AnimalCat.css";

function AnimalCat(props) {
  return (
    <div className="AnimalCat">
      <h1>{props.cName}</h1>
      <h2>{props.cDesc}</h2>
      <img width="100%" src={props.cImg} alt="" />
    </div>
  );
}

export default AnimalCat;
