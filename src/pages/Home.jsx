import { Link } from "react-router-dom";
// import GetCharacters from "../components/charComponents/GetCharacters";
import GetUserCharacters from "../components/charComponents/GetUserCharacters";

const Home = ({ userCharacters }) => {
  return (
    <div>
      <h1>Character Vault</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/add-character">Add Character</Link>
      {/* <GetCharacters/> */}
      <GetUserCharacters userCharacters={userCharacters} />
    </div>
  );
};

export default Home;
