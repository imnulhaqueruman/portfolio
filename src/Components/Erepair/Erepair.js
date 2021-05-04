import React from 'react';
import './Erepair.css';
import E_repair from '../../image/e-repai.PNG';
const Erepair = () => {
    return (
        <div className="container my-5 py-5">
       <div className="row">
         <div className="col-md-7 col-sm-12">
              <div className="justify-content-center">
                  <img src={E_repair} className="img-fluid image" alt="" />
              </div>
         </div>
          
            <div className="col-md-5 col-sm-12 project-info">
              <div class="card text-white bg-dark mb-3">
                <div class="card-header">E-repair web app </div>
                <div class="card-body">
                  <small class="card-text">Develop a full-stack site for electronics repair web app where customers can bookings for any
                                        kind of electronic device.Built different dashboards for user & admin. A customer gives a review for services and also sees other customer’s reviews.
                                        Implement a payment system with stripe .js. </small>
                  <div className="technical-skill">
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">React</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Node.js</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">MongoDB</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Express.js</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Bootstrap</button>
                      <button className="btn   btn-success btn-sm m-2 p-2 rounded">Stripe.js</button>
                      
                  </div>
                </div>
             </div>
            </div>
          </div>
    </div>
    );
};

export default Erepair;