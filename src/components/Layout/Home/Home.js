import "./Home.css";

function Home() {
  function alertFunc(arg) {
    console.log(arg);
    alert(`לחצת את כפתור ${arg.target.firstChild.data}`);
  }

  return (
    <div className="Home">
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
