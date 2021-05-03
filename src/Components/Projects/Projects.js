import React from 'react';
import Nav from '../Nav/Nav';
import ema_john from '../../image/ema-john simple.png';
import E_repair from '../../image/rsz_e-repai.png';
import freshValley from '../../image/rsz_fresh-valley.png';
import Penguin from '../../image/rsz_penguin.png';
import FootBall from '../../image/rsz_football.png';
import Rider from '../../image/rsz_2rider.png';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
const Projects = () => {
    const bestProjects=[
        {
            img:ema_john,
            live:'https://ema-john-simple-a5ccb.firebaseapp.com/',
            github:'https://github.com/imnulhaqueruman/ema-john-simple',
            title:'Ema-john E-commerce',
            text:'It is an E-commerce site like Amazon '
        },
        {
            img:E_repair,
            live:'https://complete-website-client-361bc.firebaseapp.com/',
            github:'https://github.com/imnulhaqueruman/E-repair',
            title:'E-Repair',
            text:'A Electronics device repair site',

        },
        {
            img:freshValley,
            live:'https://fresh-valley-3527d.firebaseapp.com/',
            github:'https://github.com/imnulhaqueruman/talukder-store',
            title:'Talukder Store',
            text:'It is an Shop web app'
        },
        {
            img:Penguin,
            live:'https://imnulhaqueruman.github.io/responsive-assignment/',
            github:'https://github.com/imnulhaqueruman/responsive-assignment',
            title:'Penguin Fashion',
            text:'It is a Static E-commerce site',
        },
        {
            img:FootBall,
            live:'https://infallible-franklin-3aaf01.netlify.app/',
            github:'https://github.com/Porgramming-Hero-web-course/react-router-imnulhaqueruman',
            title:'English Premier League',
            text:'It is an Intermediate React Project'
        },
        {
            img:Rider,
            live:'https://react-auth-edc6c.web.app/',
            github:'https://github.com/Porgramming-Hero-web-course/react-auth-imnulhaqueruman',
            title:'Metropolis Rider',
            text:'It is an Ride sharing web app'
        }

    ]
    return (
        <section>
            <Nav></Nav>
            <div className="container-fluid">
                <Fade bottom>
                   <h3 className="text-center text-white">My Projects</h3>
                </Fade>
                
                <div className="row my-5 d-flex">
                    {
                        bestProjects.map(data => <Project data={data}></Project>)
                    }
                </div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default Projects;