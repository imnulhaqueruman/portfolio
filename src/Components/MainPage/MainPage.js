import React from 'react';
import './MainPage.css';
import image from '../../image/emon2.png'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const MainPage = () => {
    const download = "https://drive.google.com/uc?export=download&id=1FvOQ8na72T-WHB2iOnuNrpTjonWT36xH";
    return (
        <div className="container-fluid  overflow-hidden  my-5 mx-5">
            <div className="row col-sm-12 d-flex py-5 px-5">
                    <div className="col-md-6 col-sm-12 ms-auto">
                        <div>
                         <h4>Hello, I'M</h4>
                         <h1>Imnul Haque Ruman</h1>
                            <div className="d-flex">
                                <ul>
                                <li className="p-2">
                                    <Zoom bottom>
                                        <h4>Web developer</h4>
                                    </Zoom>
                                            
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-2">
                                        <Zoom bottom>
                                           <h4>Programmer</h4>
                                        </Zoom>
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                            A self-motivated Web Programmer with a deep interest in JavaScript and Python. 
                            Specializing in Front-end Developer and server-side developer with express.js and MongoDB.
                             Experienced with different approaches to the development of the dynamic web.
                              Strong background in IoT, Robotics, and Image Processing.
                               To work in the Software Industry with modern web technologies of Bangladesh
                                and another country and grow up my skills and increasing responsibilities
                            </p>
                        </div>
                        <div className="my-2">
                            <Link to="/aboutMe">
                                <button className="btn btn-success mx-2 my-2">About Me</button>
                            </Link>
                            <Link to="/contact">
                                <button className="btn btn-outline-success mx-2 my-2">Get in Touch</button>
                            </Link>
                            <button className="btn btn-outline-success mx-2 my-2">
                               <a className="text-white" href={download} >Resume</a>
                            </button>
                           
                        </div>
                    </div>
                   <div className="col-md-6 col-sm-12 ms-auto mb-5">
                         <img src={image} style={{height:400}} className="img-fluid" alt=""/>
                   </div>

            </div>
        </div>
    );
};

export default MainPage;