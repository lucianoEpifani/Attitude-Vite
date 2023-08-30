import { Fragment, useState } from 'react';
import './Nav.css';
import {BsBag} from 'react-icons/bs'; 
import { Link } from "react-router-dom";
import {IoCloseOutline} from 'react-icons/io5';
import {RxHamburgerMenu} from 'react-icons/rx'



function Nav({setVisible}){

    const [active, setActive] = useState(false);

    return (
        <>
            <div id="burger" className="menu-icon">
            <div className={`menu-container ${active ? 'active' : ''}`}>
                    <RxHamburgerMenu onClick={() => { setActive(true); setVisible("") }} className="burger" />
            </div>   
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>Attitude</h1>
                    </Link>
                    <BsBag className='bag' />
        </div>    
        {active ?  <nav id="nav" className="navegacion">
        <div className="nav-titulo">
              <IoCloseOutline onClick={() => { setActive(false); setVisible("container-products-active") }} id="close" className='xclose'/>
              <h2>Attitude</h2>
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