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
              With a background of over 10 years in quality control, chemistry, and customer support, I have gained my problem-solving and communication skills, such as improving processes via new ideas. Having recently earned certification as a Frontend Web Developer through edX, since my first ‘Hello World’, web development has been my passion and I am excited to continue improving myself and contribute to new web projects. Driven by user-driven thinking as a web developer, I am eager to utilise my keen eye for detail and creativity skills to develop accessible applications for all users. Currently, I am focused on improving my abilities in testing and frontend development.
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
              padding:'10px',
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
              padding:'10px',
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
              padding:'10px',
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
              padding:'10px',
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
