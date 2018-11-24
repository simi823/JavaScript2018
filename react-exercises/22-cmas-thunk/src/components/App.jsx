import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CategoryListContainer from "./CategoryList/CategoryListContainer.js";
import CategoryContainer from "./Category/CategoryContainer";
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
          <Route exact path="/" component={CategoryListContainer} />
          <Route exact path="/categories" component={CategoryListContainer} />
          <Route path="/category/:id/" component={CategoryContainer} />
          <Route path="/vote" component={SubmitVotes} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
