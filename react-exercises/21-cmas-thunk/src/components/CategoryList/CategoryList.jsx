import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

/**
 * This should be getting the categories from the store instead
 */
import categories from "../../constants/categories";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <p className="text-center mb-4">
          <Link to="/category/1" className="btn btn-outline-primary btn-lg">
            Start Voting
          </Link>
        </p>
        <h1 className="h4 text-center">Categories</h1>
        {/* If loading, diplay Loading component here */}
        {/* If error, display error message "Oops! The CMAs are down. Are engineers are aware of the problem and
            are hard at work trying to fix it. Please come back later.." with the ErrorMessage component here */}
        {/* Only dispay this when the categories load */}
        <ul className="list-group text-center">
          {/* You will need to change this line when you get the categories from the store */
          Object.entries(categories).map(([index, category]) => {
            const key = "category-" + index;
            return (
              <li className="list-group-item" key={key}>
                {category.category}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
