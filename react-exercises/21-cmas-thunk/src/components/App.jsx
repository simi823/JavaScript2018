import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Signin from "./Signin/Signin";
import CategoryList from "./CategoryList/CategoryList";
import Category from "./Category/Category";
import SubmitVotes from "./SubmitVotes/SubmitVotes";
import logo from "./52-CMA-Awards-Logo.jpg";

function App() {
  return (
    <div>
      <header className="text-center mt-4 mb-2">
        <Link to="/">
          <img src={logo} alt="52nd CMA Awards" width="250" height="167" />
        </Link>
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/categories" component={CategoryList} />
          <Route path="/category/:id/" component={Category} />
          <Route path="/vote" component={SubmitVotes} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
