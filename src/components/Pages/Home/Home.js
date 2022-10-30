import "./Home.css";
import dogs from "../../../assets/img/dogs.jpg";
import cats from "../../../assets/img/cats.png";
import fishes from "../../../assets/img/fishes.png";
import parrot from "../../../assets/img/parrot.png";
import rodents from "../../../assets/img/rodents.png";
import RandumDog from "../../Layout/RandumDog/RandumDog";
import AnimalCat from "../../Layout/AnimalCategory/AnimalCat";

function Home() {
  function alertFunc(arg) {
    console.log(arg);
    alert(`לחצת את כפתור ${arg.target.firstChild.data}`);
  }

  return (
    <div className="Home">
      <div className="Animals">
        <AnimalCat
          cName="כלבים"
          cDesc="כאן תוכלו למצוא מגוון ענק של כלבים לאימוץ"
          cImg={dogs}
        />
        <AnimalCat
          cName="חתולים"
          cDesc="כאן תוכלו למצוא מגוון ענק של כלבים לאימוץ"
          cImg={cats}
        />
        <AnimalCat
          cName="דגי נוי"
          cDesc="כאן תוכלו למצוא מגוון ענק של כלבים לאימוץ"
          cImg={fishes}
        />
        <AnimalCat
          cName="תוכים"
          cDesc="כאן תוכלו למצוא מגוון ענק של כלבים לאימוץ"
          cImg={parrot}
        />
        <AnimalCat
          cName="מכרסמים"
          cDesc="כאן תוכלו למצוא מגוון ענק של כלבים לאימוץ"
          cImg={rodents}
        />
      </div>
      <RandumDog />
      <h2>שלום משתמש</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        veritatis nulla modi doloribus neque provident impedit dolores error
        iure, veniam quis atque animi amet cumque molestiae! At accusantium
        voluptatibus delectus, recusandae tempore deleniti et. Saepe error totam
        nam officiis, omnis amet eos quis eum, esse rem quo dicta autem sunt!
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
        eligendi. Molestias temporibus illum minima similique quaerat id numquam
        tempore libero recusandae voluptatum assumenda qui voluptas dolorem
        corrupti facere quisquam dolore dolor modi molestiae aspernatur vel
        natus minus, ipsum quas. Voluptates ipsum, ipsam debitis obcaecati
        perspiciatis voluptatem id illum nam fugit velit placeat saepe, dolorum
        fugiat! Suscipit, accusamus asperiores perferendis necessitatibus et
        nisi tempore aperiam in officia consequuntur, veniam repudiandae esse.
        Aperiam atque vero dicta minus eos non, nam nobis officia, earum
        dignissimos delectus voluptate, porro amet.
      </p>
      <div className="btns">
        <button onClick={(e) => alertFunc(e)} key="btn1">
          הרשמה לאתר
        </button>
        <button onClick={(e) => alertFunc(e)} key="btn2">
          קרא עוד
        </button>
      </div>
      <div className="youtube">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/ilMzs1UHEmw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
