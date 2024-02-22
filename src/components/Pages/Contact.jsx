import React from 'react';

import Form from './Form'
import FooterBtns from "../FooterBtns/Index";

const Contact = () => {
  return (
    <section className="about-contact" id="about-contact">
      <div className="row mb-3 column-gap-3 align-items-center text-center">
        <div className="col-md">
          <h3>C O N T A C T <br></br> M E </h3>
          <p>_______________________________</p>
          <p>Get in touch with me via social media or email. If you prefer, submit a form below:</p>
          
          <div className='p-4'>
          <Form />
          </div>
          <div className='p-4'>
          <FooterBtns />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
