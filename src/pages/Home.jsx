import { NavLink } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
        <div className="home-heading">
          <h1>Little Leaf Nursery</h1>
          <h3>Live colorfully and make someone happy.</h3>
        </div>
        <NavLink to="/Gallery">
          <button>Our Studio</button>
        </NavLink>
    </div> 
  );
};

export default Home;