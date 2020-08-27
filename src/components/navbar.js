import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

 const Navbar = () =>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">LOGO HERE</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* dropdown? */}
                        <li><ShoppingCartIcon to=""><i className="material-icons">ShoppingCartIcon</i></ShoppingCartIcon></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;