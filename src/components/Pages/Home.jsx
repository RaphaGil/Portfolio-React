import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import myImage from '../../assets/img/me.png';
import PageWrapper from '../PageWrapper/Index';
import FooterBtns from '../FooterBtns/Index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSkillIndex: 0,
      skills: ['React', 'Next.js', 'JavaScript', 'Bootstrap', 'Node.js']
    };
  }

  componentDidMount() {
    // Start interval to change skills every 3 seconds
    this.skillInterval = setInterval(this.changeSkill, 3000);
  }

  componentWillUnmount() {
    // Clear interval when component is unmounted to prevent memory leaks
    clearInterval(this.skillInterval);
  }

  changeSkill = () => {
    // Update currentSkillIndex to cycle through skills array
    const { currentSkillIndex, skills } = this.state;
    const newIndex = (currentSkillIndex + 1) % skills.length;
    this.setState({ currentSkillIndex: newIndex });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { skills, currentSkillIndex } = this.state;
    const currentSkill = skills[currentSkillIndex];

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
                <h1 className="mt-4 mt-3 text-light-emphasis">Olá!</h1>
                <p className="text-light-emphasis" style={{ fontSize: '26px' }}>
                  I am <b>Raphaela Gil</b> &#128075; and I am a Frontend Web Developer based in London, UK
                </p>
                <p className="text-light-emphasis" style={{ fontSize: '20px' }}>
                  Welcome to my <b>portfolio</b>. This is my webpage where I share side projects that I've been working on in <b style={{ fontSize: '26px' }}>{currentSkill}</b>.
                </p>
              </div>
            </div>
          </section>
        </PageWrapper>
        <div className="p-4">
          <FooterBtns />
        </div>
        <button
          onClick={this.scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#ea5555',
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} /> {/* Use the FontAwesomeIcon component with the arrow-up icon */}
        </button>
      </>
    );
  }
}

export default Home;
