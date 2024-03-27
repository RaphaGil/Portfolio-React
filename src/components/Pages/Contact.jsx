import React from 'react';
import Form from './Form'
import FooterBtns from "../FooterBtns/Index";

const Contact = () => {
  return (
    <section className="about-contact p-4 mt-5" id="about-contact">
      <div className="row mb-3 column-gap-3 align-items-center text-center">
        <div className="col-md text-light-emphasis p-3">
          <h3>C O N T A C T <br/> M E </h3>
          <p style={{ fontSize: '20px'}}>Get in touch with me via social media or email. If you prefer, submit a form below:</p>
          <div className='p-4'>
          <Form />
          </div>
          <div className='p-4 mt-5'>
          <FooterBtns />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
