import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import CV from "../../assets/RaphaeladoAmaralGil.pdf";

const ContactBtns = () => {
  return (
    <>
      <Button
        style={{ color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }}
        href="https://www.linkedin.com/in/raphaela-do-amaral-gil-0a9bb945/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>
      <Button
        style={{ color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }}
        href="https://github.com/RaphaGil"
      >
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </Button>
      <Button
       style={{ color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }}
        href="mailto:raphaela.gil@yahoo.com"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Email Me
      </Button>
      <Button
        style={{ color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }}
        href={CV}
        download="RaphaeladoAmaralGil.pdf"
      >
        <FontAwesomeIcon icon={faFileDownload} /> Download CV
      </Button>
    </>
  );
};

export default ContactBtns;