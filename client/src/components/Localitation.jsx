import React from 'react'
import { Link } from 'react-router-dom'

export default function Localitation() {
  return (
    <div>
        <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.857231541588!2d-58.52536622419441!3d-33.00753928058979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007899ad542f3%3A0xc3c5428999567724!2sParaguay%2093%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1682986500137!5m2!1ses!2sar" 
      width="600" 
      height="350" 
      >
        Nuestra localizacion
      </iframe>
      <Link to={"/"} >
        Go Home
      </Link>
    </div>
  )
}
