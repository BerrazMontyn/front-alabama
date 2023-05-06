import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { details } from "../redux/cervezasActions";


export default function Cervezas({ id, name, ibu, abv, cerveceria }) {
  

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(details(id));
  };

  return (
    <div>
      
        <Link
          to={`/description/${id}`}
          onClick={handleClick}
          >

        <p>{name} IBU: {ibu} ABV: {abv} Cerveceria: {cerveceria}</p>
        </Link>    
      
      {/* <p className="mb-2 text-white"></p> */}
    </div>
   
  );
}



