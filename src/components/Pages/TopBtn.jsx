import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow-up icon 

class TopBtn extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  render() {
    return (
        <button onClick={this.scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', color: '#ea5555', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faArrowUp} /> {/* Use the FontAwesomeIcon component with the arrow-up icon */}
        </button>
    
    );
  }
}

export default TopBtn;
