import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { details } from "../redux/cervezasActions";

export default function Cervezas({ id, name, ibu, abv }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(details(id));
  };

  return (
    <div>
      <div>
        <h2>
          <Link to={`/description/${id}`} onClick={handleClick}>
            {name}
          </Link>
        </h2>
        <p>IBU: {ibu}</p>
        <p>ABV: {abv}</p>
      </div>
      
    </div>
  );
}



