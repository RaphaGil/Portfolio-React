import PageWrapper from "../PageWrapper/Index";


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
          borderRadius: "5px",
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="row">
          <div
            className="col shadow align-self-center"
            style={{
              borderRadius: "15px",
              height: '50px',
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
            <p style={{ fontSize: "18px", color: "#ea5555"}}>Tailwind </p>
          </div>

          <div
            className="col shadow text-light-emphasis text-right align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
            <p style={{ fontSize: "18px", color: "#ea5555", }}>jQuery </p>
          </div>

          <div
            className="col shadow text-light-emphasis text-right align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
            <p style={{ fontSize: "18px",color: "#ea5555", }}>Git </p>
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              height: '50px',
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
            <p style={{ fontSize: "18px", color: "#ea5555", }}>Next.js </p>
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
           <p style={{ fontSize: "18px", color: "#ea5555", }}> Node.js</p>
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
              margin: "10px",
              padding: "10px",
              backgroundColor: "rgba(234, 85, 85, 0.2)",
              transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition for background color and padding
            }}
            // Apply hover effect
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.5)"; // Lighter background color on hover
              e.currentTarget.style.padding = "15px"}}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(234, 85, 85, 0.2)"; // Revert to original background color
              e.currentTarget.style.padding = "10px"; // Revert to original padding
            }}
          >
           <p style={{ fontSize: "18px", color: "#ea5555", }}> JavaScript</p>
          </div>

          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
           <p style={{ fontSize: "18px", color: "#ea5555", }}> HTML5 </p>
          </div>

             <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
           <p style={{ fontSize: "18px", color: "#ea5555", }}> CSS3 </p>
          </div>
          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
           <p style={{ fontSize: "18px", color: "#ea5555", }}> Bootstrap</p>
          </div>
          <div
            className="col shadow text-light-emphasis align-self-center"
            style={{
              borderRadius: "15px",
              maxWidth: '100px',
              height: '50px',
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
           <p style={{ fontSize: "18px", color: "#ea5555" }}> React</p>
          </div>

        
        
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
