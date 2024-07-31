import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Character Vault</h1>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Home;
