import React from 'react';
import './About.css';
import image from '../../image/emon2.png';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';


const About = () => {
    return (
        <div className="container my-2">
            <Nav></Nav>
          <div className="row d-flex">
                <div className="col-md-6">
                  <div>
                      <Bounce top>
                        <img src={image} style={{height:300}} className="img-fluid" alt=" " />  
                      </Bounce>
                      
                  </div>
                 <div>
                    <h4>Hello, I'M</h4>
                    <h1>Imnul Haque Ruman</h1>
                    <h3>I am Studying Mechatronics and Industrial Engineering at CUET</h3>
                 </div>
                </div>
                <div className="col-md-6">
                    <div className="container my-5">
                        <h1 className="mb-3 text-white">Technical Skill</h1>
                        <Slide left>
                        <div className="technical-skill mb-3">
                            <button className="btn   btn-success m-2 p-2 rounded">JavaScript</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Python</button>
                            <button className="btn   btn-success m-2 p-2 rounded">C</button>
                            <button className="btn   btn-success m-2 p-2 rounded">React</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Redux</button>
                            <button className="btn   btn-success m-2 p-2 rounded">React Native</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Node.js</button>
                            <button className="btn   btn-success m-2 p-2 rounded">TypeScript</button>
                            <button className="btn   btn-success m-2 p-2 rounded">MongoDB</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Express.js</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Bootstrap</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Sass</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Material UI</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Git</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Heroku</button>
                            <button className="btn   btn-success m-2 p-2 rounded">Postman</button>
                        </div>
                        </Slide>
                       
                        <h1 className="text-white mb-3">Other Skill</h1>
                        <Slide right>
                        <div className="technical-skill">
                              <button className="btn btn-success m-2 p-2 rounded">IoT</button>
                              <button className="btn   btn-success m-2 p-2 rounded">Robotics</button>
                              <button className="btn   btn-success m-2 p-2 rounded">OpenCv</button>
                              <button className="btn   btn-success m-2 p-2 rounded">Arduino</button>
                              <button className="btn   btn-success m-2 p-2 rounded">Image Processing</button>
                        </div>
                        </Slide>
                       
                    </div>
                </div>
            </div>
        <div className="my-5 py-5 mb-0">
           <Footer></Footer>
        </div>
          
        </div>
    );
};

export default About;