import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
    const link="#";
    const download = "https://drive.google.com/uc?export=download&id=1FvOQ8na72T-WHB2iOnuNrpTjonWT36xH";
    return (
        <nav  className="navbar navbar-light my-2 ">
            <div  className="container">
                <a  className="navbar-brand" href={link}>
                  <h2 className="text-white">Ruman</h2>
                </a>
                <ul  className="nav justify-content-end">
                    <li  className="nav-item">
                        <Link  className=" nav-link text-white active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="/projects" className=" nav-link text-white">Projects</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="/blogs" className=" nav-link text-white" >Blogs</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="/contact" className=" nav-link text-white"  tabindex="-1" aria-disabled="true">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-success rounded-pill  ">
                            <a className="text-white" href={download} >Resume</a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;