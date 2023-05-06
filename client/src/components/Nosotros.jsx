import React from 'react'
import { Link } from 'react-router-dom';

export default function Nosotros() {
  return (  
  <div className="flex flex-col md:pb-6 lg:pb-8 mx-0 p-0 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3 bg-gradient-to-br from-green-700 via-yellow-100 via-yellow-200 to-green-700 min-h-screen w-screen">
  <div className="flex flex-col items-center w-full md:w-1/2 lg:w-2/3 md:relative md:top-16">
    <div className="max-w-lg md:mx-12 lg:mx-20 md:order-2">
        <Link to={"/cervezas"}>
            <button>
                Back to
            </button>
        </Link>
        <br></br>
      <h1 className="text-3xl ml-5 font-medium tracking-wide text-teal-700  md:text-4xl lg:text-5xl">
        Brewing Art
      </h1>
      <p className="font-semibold mt-4 mx-4 md:mx-8 text-teal-700">
        Somos una cervecería que está en constante búsqueda de la vanguardia, siempre poniendo la estética y la calidad por delante.
        Para nosotros, no se trata de vender productos, sino de crear experiencias y compartir momentos únicos con nuestros clientes.
        Nuestra cervecería es un espacio donde podrás disfrutar de cervezas artesanales de alta calidad, creadas con pasión y dedicación por nuestro equipo de expertos cerveceros.
        Además de nuestra amplia selección de cervezas, ofrecemos un ambiente acogedor y relajado, perfecto para compartir con amigos y familiares.
        En nuestra cervecería, el arte y la cultura también son parte fundamental de nuestra identidad.
        En nuestro espacio, podrás disfrutar de eventos culturales y artísticos, como exposiciones, recitales y performances en vivo.
        De esta manera, creamos una experiencia única que va más allá de la simple degustación de cervezas.
        Somos una cervecería que se preocupa por la calidad, la estética y la creación de experiencias únicas para nuestros clientes. 
        Si buscas un lugar para disfrutar de cervezas artesanales y compartir momentos únicos, nuestra cervecería es el lugar perfecto para vos.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:pb-6 lg:pb-8 mx-0 p-0 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3">
    <div className="flex-1 flex justify-center mt-20 items-center md:w-1/2">
      <img className="object-cover max-w-xs md:max-w-sm lg:max-w-xl" src="https://res.cloudinary.com/dgq6bkidp/image/upload/v1683330204/A_pint_of_beer__several_hops__some_gabiotas-removebg-preview_iuzf8j.png" alt="pues la marca" />
    </div>
  </div>
</div>
);
}
