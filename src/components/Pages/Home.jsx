import myImage from '../../assets/img/me.jpeg'; // Adjust the path based on your project structure
const Home = () => {

  return (
    <>
    <section className="jumbotron-hero" id="hero">
      <div className="clearfix p-5 col-sm-12 col-md-12 col-lg-12 d-flex text-center align-items-center justify-content-center flex-column flex-md-row">
        <img
          src={myImage}
          id="myProfile"
          className="m-4 ms-3 float-md-start float-end rounded-top-circle"
          style={{ width: '250px', height: 'auto' }}
          alt="Professional profile picture of a person crossing arms"
        />
        <div className="body">
          <h1 className="p-2 mt-4 mt-3 text-light-emphasis">Olá!</h1>
          <p className="text-light-emphasis form-control-lg">
            I am <b>Raphaela Gil</b> &#128075; and I am a front-end web developer based in London, UK
          </p>
          <p className="text-light-emphasis">
            Welcome to my <b>portfolio</b>. This is my webpage where I share side projects that I've been working on.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;