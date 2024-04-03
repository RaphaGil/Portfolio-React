import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow-up icon
import myImage from '../../assets/img/me.png';
import PageWrapper from "../PageWrapper/Index";
import FooterBtns from "../FooterBtns/Index";

class Home extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  render() {
    return (
      <>
        <PageWrapper>
          <section className="jumbotron-hero" id="hero">
            <div className="clearfix p-5 col-sm-12 col-md-12 col-lg-12 d-flex text-center align-items-center justify-content-center flex-column flex-md-row">
              <img
                src={myImage}
                id="myProfile"
                style={{ width: '300px', height: 'auto' }}
                alt="Professional profile picture of a person crossing arms"
              />
              <div className="body">
                <h1 className=" mt-4 mt-3 text-light-emphasis">Olá!</h1>
                <p className="text-light-emphasis" style={{fontSize: '26px'}}>
                  I am <b>Raphaela Gil</b> &#128075; and I am a Frontend Web Developer based in London, UK
                </p>
                <p className="text-light-emphasis" style={{fontSize: '20px'}}>
                  Welcome to my <b>portfolio</b>. This is my webpage where I share side projects that I've been working on.
                </p>
              </div>
            </div>
          </section>
        </PageWrapper>
        <div className='p-4'>
          <FooterBtns />
        </div>
        <button onClick={this.scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', color: '#ea5555', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faArrowUp} /> {/* Use the FontAwesomeIcon component with the arrow-up icon */}
        </button>
      </>
    );
  }
}

export default Home;
