import React from 'react';
import './MainPage.css';
import image from '../../image/emon2.png'
import { Link } from 'react-router-dom';
const MainPage = () => {
    return (
        <div className="container-fluid my-5 mx-5">
            <div className="row d-flex py-5 px-5">
                    <div className="col-md-6 ms-auto">
                        <div>
                         <h4>Hello, I'M</h4>
                         <h1>Imnul Haque Ruman</h1>
                            <div className="d-flex">
                                <ul>
                                <li className="p-2">
                                            <h4>Web developer</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-2">
                                        <h4>Programmer</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                            A self-motivated Web Programmer with a deep interest in JavaScript and Python. Specializing in Front-end Developer and server-side developer with express.js and MongoDB. Experienced with different approaches to the development of the dynamic web. Strong background in IoT, Robotics, and Image Processing. To work in the Software Industry with modern web technologies of Bangladesh and another country and grow up my skills and increasing responsibilities
                            </p>
                        </div>
                        <div>
                            <Link to="/aboutMe">
                                <button className="btn btn-success mx-2">About Me</button>
                            </Link>
                            <Link to="/contact">
                                <button className="btn btn-outline-success mx-2">Get in Touch</button>
                            </Link>
                           
                        </div>
                    </div>
                   <div className="col-md-6 ms-auto mb-5">
                         <img src={image} style={{height:400}} className="img-fluid" alt=""/>
                   </div>

            </div>
        </div>
    );
};

export default MainPage;