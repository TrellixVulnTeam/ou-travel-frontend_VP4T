import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./reset.css";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Home from "./pages/Home";
import TourDetail from "./pages/TourDetail";
import About from "./pages/About";

const AllTours = React.lazy(() => import("./pages/AllTours"));
const NewsPage = React.lazy(() => import("./pages/NewsPage"));

function App() {
  useEffect(() => {
    const navbar = document.querySelector(".header-navbar");
    window.onscroll = () => {
      mySticky();
    };
    var sticky = navbar.offsetTop;
    function mySticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    return () => {
      window.removeEventListener("scroll", mySticky);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tours">
              <AllTours />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/tours/:id">
              <TourDetail />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;