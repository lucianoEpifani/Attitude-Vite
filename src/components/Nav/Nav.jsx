import { Fragment, useState } from 'react';
import './Nav.css';
import {BsBag} from 'react-icons/bs'; 
import { Link } from "react-router-dom";


function Nav({setVisible}){

    const [active, setActive] = useState(false);

    return (
        <>
        <div onClick={() =>{setActive(true); setVisible("")}} id="burger" className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
                <Link to="/app" style={{ textDecoration: 'none' }}>
                <h1>AttitudE</h1>
                </Link>
                <BsBag/>
        </div>
        {active ? <nav id="nav" className="navegacion">
        <div className="nav-titulo">
            <svg  onClick={() => { setActive(false); setVisible("container-products-active") }} id="close" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
              <h2>AttitudE</h2>
        </div>
        <ul className="genero">
            <li><a href="">Woman</a></li>
            <li><a href="">Man</a></li>
            <li><a href="">Kids</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">T-Shirts</a></li>
            <li><a href="">Jeans</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Winter Hat</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Tops | Bodies</a></li>
            <li><a href="">Perfume</a></li>
            <li><a href="">Lenceria | Pijama</a></li>
            <li><a href="">Chalecos</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Accesorios | Bisuteria</a></li>
            <li><a href="">Cazadoras</a></li>
            <li><a href="">Blazers</a></li>
            <li><a href="">Vestidos</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">T-Shirts</a></li>
            <li><a href="">Jeans</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Winter Hat</a></li>
        </ul>
    </nav> : <> </>}
        
    </>
    );
}

export default Nav