import React from 'react';
import Nav from '../Nav/Nav';
import Particles from 'react-particles-js';
import './Home.css';
import MainPage from '../MainPage/MainPage';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import Erepair from '../Erepair/Erepair';
import TalukderStore from '../TalukderStore/TalukderStore';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
const Home = () => {
    const particleOptions = {
        particles:{
               number:{
                line_linked: {
                    shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 5
                    }
                },
                   value:30,
                   density:{
                       enable:true,
                       value_area:800
                   }
               }
            
        }
    }
    return (
        <div>
             <Particles className="particles"
              params={
            		particleOptions
            	}
              style={{
                width: '100%'
              }}
            />
            <Nav></Nav>
            <MainPage></MainPage>
            
           <Slide left>
             <Card></Card>
            </Slide>
            <Slide right>
              <Erepair></Erepair>
            </Slide>
            <Slide left>
             <TalukderStore></TalukderStore>
            </Slide>
            <Slide right>
            <div className="d-flex justify-content-center mb-5">
                 <Link to="/projects" className="text-white"><button className="btn btn-outline-success">See more</button></Link>
            </div>
           </Slide>
            <Footer></Footer>
        </div>
    );
};

export default Home;