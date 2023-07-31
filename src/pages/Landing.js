import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            A Job <span>Tracking</span> App
          </h1>
          <p>
            Welcome to Jobbs, the cutting-edge web application
            designed to streamline and simplified way to handle
            the job profiles. As businesses grow and evolve, it becomes
            crucial to manage job roles efficiently, ensuring the right talent
            is matched to the right position. With our user-friendly platform,
            organizations can effortlessly create, update, and organize job
            profiles, empowering them to make well-informed hiring decisions and
            foster a more productive workforce.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
