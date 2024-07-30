import "./App.css";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>{import.meta.env.VITE_TEST}</p>
      <p>Ryan's cool test</p>
      <UpdateProfile />
    </>
  );
}

export default App;
