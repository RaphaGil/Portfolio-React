import PageWrapper from "../PageWrapper/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
      <h3 className="text-light-emphasis mt-2">
        A B O U T <br></br> M E
      </h3>
      <div className="container text-center text-light-emphasis">
        <div className="row" style={{ fontSize: "20px" }}>
          <div className="col">
            <p className="text-light-emphasis">
              With a solid foundation in quality assurance and customer support,
              I've finely tuned my abilities to uphold product excellence,
              demonstrating a keen eye for detail and a constant drive for
              process enhancement. Now, having obtained certification as a{" "}
              <b>Front-End Web Developer</b> through Edx, I'm excited to embrace
              this new career path. Fueled by my love for coding and a
              commitment to crafting user-centric interfaces, I am eager to
              harness my varied skill set to develop vibrant and intuitive web
              applications. Currently, I am actively augmenting my proficiency
              in testing automation and front-end development to further enrich
              my capabilities.
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
          maxWidth: "100%",
        }}
      >
        <div className="row">
          <div
            className="col shadow text-light-emphasis text-right align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <p style={{ fontSize: "18px", padding: "10px" }}>Tailwind </p>
          </div>
          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <p style={{ fontSize: "18px", padding: "10px" }}>Next.js </p>
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faCss3}
            />{" "}
            <br></br>
            CSS3
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faJs}
            /> <br></br>
            JavaScript
          </div>

          <div
            className="col shadow text-light-emphasis  align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faHtml5}
            />
            <br></br>
            HTML5
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
             onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faNode}
            />
            <br></br>
            Node
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faReact}
            />
            <br></br>
            React
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"; // Increased padding on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ea5555",
                paddingRight: "10px",
              }}
              icon={faBootstrap}
            /> <br></br>
            Bootstrap
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
