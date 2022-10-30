import "./Links.css";

import { NavLink } from "react-router-dom";

function Links() {
  // console.log(linksArray2);

  return (
    <div className="Links">
      <NavLink to="/home">דף הבית</NavLink>
      <NavLink to="/products">מוצרים</NavLink>
      <NavLink to="/testimonials">סיפורי הצלחה</NavLink>
      <NavLink to="/about">אודות</NavLink>
    </div>
  );
}

export default Links;
