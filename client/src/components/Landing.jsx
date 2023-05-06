import React from 'react'
import { Link } from 'react-router-dom'



export default function Landing() {
  return (
    <div >
      <div>
        <h1 className=' flex justify-center mt-6 font-sans '>Brewing Art</h1>
      </div>
      <Link to={"/cervezas"}>
      <button className="block mx-auto mt-8 px-4 py-2 text-lime-500 border border-green-500 rounded-lg hover:bg-yellow-200">
          <h1>Nuestras Cervezas</h1>
        </button>
      </Link>
      <div>
      <Link to={"/location"}>
      <button className="block mx-auto mt-8 px-4 py-2 text-lime-500 bg-transparent border border-green-500 rounded-lg hover:bg-yellow-200">
          Encontranos.
        </button>
      </Link>
      </div>
    </div>
  )
}