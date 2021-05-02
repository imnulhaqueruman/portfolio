import React from 'react';
import Nav from '../Nav/Nav';
import Particles from 'react-particles-js';
import './Home.css';
import MainPage from '../MainPage/MainPage';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;