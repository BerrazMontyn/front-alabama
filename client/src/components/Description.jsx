import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { details} from "../redux/cervezasActions";

export default function Description({props}) {
  
  const { id } = useParams();
  const descripcion = useSelector((state) => state.cervezas.cervezas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(details(id));
  }, [dispatch, id]);

  return (
    <div>
      
        <Link to="/cervezas">Back to Cervezas.</Link>
    
      <div>
        <p>Descripcion: {descripcion?.description}</p>
      </div>
    </div>
  );
}

