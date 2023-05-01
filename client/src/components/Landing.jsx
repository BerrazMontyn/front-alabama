import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
      <div>
        <Link to={"/cervezas"}>
            <button className= "bg-violet-500"  >
        <h1 className='text-red'>Nuestras Cervezas</h1>

            </button>
        </Link>
    </div>
  )
}
