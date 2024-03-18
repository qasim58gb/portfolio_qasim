import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Footer from "./component/footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
