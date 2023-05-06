import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const hamburguerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleHamburguerClick = () => {
    hamburguerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     if (storedIsLoggedIn === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-images">
          <a href="/">
            <h2>Estas son Nuestras Cervezas, <span>Conocelas!</span></h2>
          </a>
        </div>
        <ul className="nav-menu" ref={navMenuRef}>
          <a href="/">
            Inicio
          </a>
          <a
            href={"/nosotros"}
            activeClass="active"
            // spy={true}
            // smooth={true}
            // offset={-70}
            // duration={500}
          >
            Sobre Nosotros
          </a>
          <a
            href={"/location"}
            activeClass="active"
           
          >
            Encontranos
            </a>
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacto
          </Link>
          <div className="instagram-image">
          <a href="https://www.instagram.com/juancii14/" target="_blank">
            <img
              class=""
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="instagram"
              width={50}
              height={50}
            />
          </a>
          </div>
        </ul>
        <div
          className="hamburguer"
          ref={hamburguerRef}
          onClick={handleHamburguerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;