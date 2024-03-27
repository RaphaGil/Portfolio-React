import PageWrapper from "../PageWrapper/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCss3,
  faJs,
  faHtml5,
  faBootstrap,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons"; // Importing the FontAwesome icons

const About = () => {
  return (
    <PageWrapper>
      <h3 className="text-light-emphasis p-4 mt-5">
        A B O U T <br></br> M E
      </h3>
      <div className="container text-center text-light-emphasis">
        <div className="row" style={{ fontSize: "20px", marginBottom: "50px" }}>
          <div className="col">
            <p className="text-light-emphasis">
              I'm diving into the world of <b>web development</b> at Edx
              Bootcamp in London. Believe it or not, I used to play with
              chemicals before this—mixing stuff up and watching the{" "}
              <b>magic happen</b>. But now, I'm swapping test tubes 🧪for code
              💻 and loving it! The way web developers work their magic has
              always <b>fascinated me</b>.
            </p>
          </div>
          <div className="col">
            <p className="text-light-emphasis">
              So, I got curious and jumped headfirst into this coder universe.
              Turns out, turning ideas into cool websites feels like creating
              secret potions! I've got this knack for solving puzzles and making
              things easier for folks. Thinking through problems and making tech
              stuff that people enjoy using — it's like turning work into a{" "}
              <b>fun game!</b>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-light-emphasis p-4">
        T E C H N I C A L <br></br> S K I L L S
      </h2>

      <div
        className="container"
        style={{
          padding: "15px",
          borderRadius: "5px",
          width: "30%",
        }}
      >
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px" }}
        >
          <p style={{ fontSize: '18px',padding: '10px'}}>
            UI/UX Desing</p>
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px" }}
        >
          <p style={{fontSize: '18px', padding: '10px'}}>
             Tailwind </p>
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px" }}
        >
          <p style={{ fontSize: '18px', padding: '10px'}}>
           Next.js </p>
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px'}}
        >
           <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink", paddingRight: '10px' }}
            icon={faCss3}
          /> CSS3
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px' }}
        >
       <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink", paddingRight: '10px' }}
            icon={faJs}
          /> JavaScript
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px' }}
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink", paddingRight: '10px' }}
            icon={faHtml5}
          /> HTML5
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px' }}
        >
           <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink",  paddingRight: '10px' }}
            icon={faNode}
          /> Node
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px'}}
        >
         
         <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink", paddingRight: '10px'}}
            icon={faReact}
          /> React
        </div>
        <div
          className="shadow text-light-emphasis"
          style={{ borderRadius: "10px", marginBottom: "20px", padding: '10px'}}
        >
            <FontAwesomeIcon
            style={{ fontSize: "30px", color: "pink", paddingRight: '10px'}}
            icon={faBootstrap}
          /> Bootstrap
        </div>
      </div>
      
    </PageWrapper>
  );
};

export default About;
