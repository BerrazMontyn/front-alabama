import React, { useEffect } from 'react'
import { beer, details } from '../redux/cervezasActions'
import Cervezas from "./Cervezas"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import foto from "../imagenes/Designer.png"
import NavBar from './NavBar';

export default function Home() {
    const cervezas = useSelector((state) => state.cervezas.cervezas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(beer())
    }, [dispatch])

    return (
        <div >
          <NavBar />
            <div className="relative">
  <img className='h-96 w-5/6 border-solid border-4 mt-9 ml-24'
    src={foto} 
    alt='pizzaron'
  />
  {/* {Array.isArray(cervezas) && (

    <table className="absolute top-0 right-0 mr-70 w-full">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>IBU</td>
          <td>ABV</td>
          <td>Cervecería</td>
        </tr>
      </thead>
      <tbody >
        {cervezas.map((cerve) => (
          <Cervezas
            key={cerve.id}
            id={cerve.id}
            name={cerve.name}
            ibu={cerve.ibu}
            abv={cerve.abv}
            cerveceria={cerve.cerveceria}
          />
        ))}
      </tbody>
    </table>
  )} */}
</div>
</div>

    );
}

