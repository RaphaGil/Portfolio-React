import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import CV from "../../assets/RaphaeladoAmaralGil.pdf";

const ContactBtns = () => {
  return (
    <> 

    <div style={{ fontSize:'30px'}}>
    <a href="https://www.linkedin.com/in/raphaela-do-amaral-gil-0a9bb945/" style={{ marginRight: '10px', color:'#ea5555' }}>
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/RaphaGil" style={{ marginRight: '10px', color:'#ea5555' }}>
    <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="mailto:raphaela.gil@yahoo.com" style={{ marginRight: '10px', color:'#ea5555' }}>
    <FontAwesomeIcon icon={faEnvelope} />
    </a>
    </div>
  
    </>
  );
};

export default ContactBtns;