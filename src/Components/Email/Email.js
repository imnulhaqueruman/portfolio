import React from 'react';
import emailjs from 'emailjs-com';
const Email = () => {
    const handleEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_algq0o7', 'template_jxirgob', e.target, 'user_wIWUKfa8cmdpl6Gwt8hVm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div className="container my-5 py-5">
            <div style={{backgroundColor:'#172A45'}} className="mx-auto rounded my-3 p-3 px-4 col-md-6">
                <h2 className="text-center text-white">Get in Touch</h2>
                <form onSubmit={handleEmail}>
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Your Name" id="formBasicEmail" class="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Your Email" id="formBasicEmail" class="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="text" name="subject" placeholder="Your subject" id="formBasicEmail" class="form-control"/>
                    </div>
                    <div className="form-group">
                       <textarea name="message" rows="4" placeholder="Your Message" id="formBasicPassword" class="form-control"/>
                    </div>
                    <div className="form-group">
                       <button type="submit" class="btn btn-success btn-block">Send</button>
                    </div>
                </form>
                
            </div>
        </div>
        
    );
};

export default Email;