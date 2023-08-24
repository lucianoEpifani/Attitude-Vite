import { Fragment, useState } from 'react';
import './Nav.css';
import {BsBag} from 'react-icons/bs'; 
import { Link } from "react-router-dom";


function Nav({setVisible}){

    const [active, setActive] = useState(false);

    return (
        <>
        <div  id="burger" className="menu-icon">
        <span><svg onClick={() =>{setActive(true); setVisible("")}} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg></span>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <h1>AttitudE</h1>
                </Link>
                <BsBag className='bag'/>
        </div>
        {active ?  <nav id="nav" className="navegacion">
        <div className="nav-titulo">
            <svg  onClick={() => { setActive(false); setVisible("container-products-active") }} id="close" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
              <h2>AttitudE</h2>
        </div>
        <ul className="genero">
            <li><a href="">Donna</a></li>
            <li><a href="">Uomo</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Camicia</a></li>
            <li><a href="">Pantaloni</a></li>
            <li><a href="">Cappello</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Top | Bodies</a></li>
            <li><a href="">Corpi</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Bikini</a></li>
            <li><a href="">Abito</a></li>
            <li><a href="">Borsa</a></li>
        </ul>
    </nav>  : <> </>}
        
    </>
    );
}

export default Nav