import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Wrapper>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path={["/portofolio"]}>
            <Portofolio />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default App;
