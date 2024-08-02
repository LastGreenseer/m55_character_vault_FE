import { Link } from "react-router-dom";
import GetCharacters from "../components/charComponents/GetCharacters";

const Home = () => {
  return (
    <div>
      <h1>Character Vault</h1>
      <Link to="/profile">Profile</Link>
      <GetCharacters/>
    </div>
  );
};

export default Home;
