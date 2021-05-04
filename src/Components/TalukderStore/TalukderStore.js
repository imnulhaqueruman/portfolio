import React from 'react';
import './TalukderStore.css';
import Talukder from '../../image/fresh-valley.PNG';
const TalukderStore = () => {
    return (
        <div className="container my-5">
       <div className="row">
         <div className="col-md-7 col-sm-12">
              <div className="justify-content-center">
                  <img src={Talukder} className="img-fluid image" alt="" />
              </div>
         </div>
          
            <div className="col-md-5 col-sm-12 project-info">
              <div class="card text-white bg-dark mb-3">
                <div class="card-header">TalukderStore it is a shop app</div>
                <div class="card-body">
                  <small class="card-text"> Develop a full-stack shop web app that provides various types of products to the customer.
                  Here customer selects the products that he/she wants and add to their cart for checkout by google sign-in method.Built different dashboards for admin & user. </small>
                  <div className="technical-skill">
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">React</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Node.js</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">MongoDB</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Express.js</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Bootstrap</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Material UI</button> 
                  </div>
                </div>
             </div>
            </div>
          </div>
    </div>
    );
};

export default TalukderStore;