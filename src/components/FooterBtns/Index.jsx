import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './index.css'

const ContactBtns = () => {
  return (
    <> 
    <div style={{ fontSize:'30px'}}>
    <a href="https://www.linkedin.com/in/raphaela-do-amaral-gil-0a9bb945/" style={{ marginRight: '10px', color:'#ea5555', padding: '10px' }}
    className="hover-effect">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/RaphaGil" style={{ marginRight: '10px', color:'#ea5555', padding: '10px'  }}
    className="hover-effect">
    <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="mailto:raphaela.gil@yahoo.com" style={{ marginRight: '10px', color:'#ea5555', padding: '10px'  }}
    className="hover-effect">
    <FontAwesomeIcon icon={faEnvelope} />
    </a>
    </div>
    </>
  );
};

export default ContactBtns;