import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Header></Header>
      <h1>Hello World</h1>
      <p>{import.meta.env.VITE_TEST}</p>
      <p>Ryan's cool test</p>

      <Footer></Footer>
    </>
  );
}

export default App;
