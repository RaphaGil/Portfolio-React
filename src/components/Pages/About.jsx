import PageWrapper from "../PageWrapper/Index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCss3, faJs, faHtml5, faBootstrap, faNode, faReact } from '@fortawesome/free-brands-svg-icons'; // Importing the FontAwesome icons

const About = () => {
  return (
    <PageWrapper>
      <h3 className="text-light-emphasis">
        A B O U T <br></br> M E
      </h3>
      <p> __________________________ </p>
      <div className="container text-center text-light-emphasis">
        <div className="row">
          <div className="col">
            <p className='text-light-emphasis'>
              I'm diving into the world of <b>web development</b> at Edx Bootcamp
              in London. Believe it or not, I used to play with chemicals before
              this—mixing stuff up and watching the <b>magic happen</b>. But now,
              I'm swapping test tubes 🧪for code 💻 and loving it! The way web
              developers work their magic has always <b>fascinated me</b>.
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

      <h2 className="text-light-emphasis">
        T E C H N I C A L <br></br> S K I L L S
      </h2>
      <p className="text-light-emphasis"> ___________________________________________</p>
      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn <br></br>
      <FontAwesomeIcon icon={faGithub} /> GitHub <br></br>
      <FontAwesomeIcon icon={faCss3} /> CSS 3 <br></br>
      <FontAwesomeIcon icon={faJs} /> JS <br></br>
      <FontAwesomeIcon icon={faHtml5} /> HTML5 <br></br>
      <FontAwesomeIcon icon={faBootstrap} /> Bootstrap <br></br>
      <FontAwesomeIcon icon={faNode} /> Node <br></br>
      <FontAwesomeIcon icon={faReact} /> React <br></br>
    </PageWrapper>
  );
};

export default About;
