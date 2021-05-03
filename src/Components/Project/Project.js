import React from 'react';
import './Project.css';
const Project = (data) => {
    const{img,text, title, live, github} = data.data
    
    return (
        <div className="col-md-4 py-5  container-card">
            <div  className="card  rounded">
                 <img src={img} alt=" " className="card-img-top p-5"/>
                 <div className="card-body text-dark">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                 </div>
                 <div className="card-body">
                    <button className="btn btn-success  mx-2">
                        <a href={github}  className="text-white "  target="_blank"  >GitHub</a>
                    </button>
                    <button className="btn btn-success mx-2">
                        <a href={live} className="text-white " target="_blank">Website</a>
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default Project;