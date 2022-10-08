import "./Links.css";

function Links() {
  const linksArray = [
    {
      linkName:
        "https://he.wikipedia.org/wiki/%D7%9B%D7%9C%D7%91_%D7%94%D7%91%D7%99%D7%AA",
    },
    { linkName: "https://www.youtube.com/watch?v=UUl3PLUv6dI" },
    { linkName: "https://www.purina.co.il/lobby-dogs" },
    { linkName: "https://www.cdc.gov/healthypets/pets/dogs.html" },
    { linkName: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs" },
  ];

  // console.log(linksArray2);

  return (
    <div className="Links">
      {linksArray.map((obj, index) => (
        <div className="link" key={index}>
          <span className="hide">{(obj.id = index)}</span>
          {console.log(obj)}
          <a href={obj.linkName}>{`קישור ${index + 1}`}</a>
        </div>
      ))}
    </div>
  );
}

export default Links;
