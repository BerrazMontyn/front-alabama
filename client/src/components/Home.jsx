import React, { useEffect } from 'react'
import { beer, details } from '../redux/cervezasActions'
import Cervezas from "./Cervezas"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function Home() {
    const cervezas = useSelector((state) => state.cervezas.cervezas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(beer())
    }, [dispatch])

    return (
        <div>
            <Link to={"/"}>
        <button>
          Back to inicio
        </button>
            </Link>
            {Array.isArray(cervezas) && cervezas.map((cerve) => {
                return (
                    <div key={cerve.id}>
                        <Cervezas
                            id={cerve.id}
                            name={cerve.name}
                            ibu={cerve.ibu}
                            abv={cerve.abv}
                        />
                    </div>
                );
            })}
        </div>
    );
}
