import React, { Component } from "react";

import Nominee from "./Nominee.jsx";
import PrevCategoryButton from "./PrevCategoryButton";
import NextCategoryButton from "./NextCategoryButton";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

/**
 * This should be getting the categories from the store instead
 */
import categories from "../../constants/categories";

class Category extends Component {
  render() {
    const categoryId = parseInt(this.props.match.params.id);

    /* If loading, react should return the Loading component here */

    /* If there is an error, it should return the error message
     * "This is embarassing. We were unable to save your vote. Please try again later."
     * in the error message component
     */

    /**
     * You will need to change this line when you get the categories from the store
     */
    const { category, nominees } = categories[categoryId];
    return (
      <div>
        <h1 className="h2 text-center">{category}</h1>
        <div className="card-group mb-2">
          {nominees.map((nominee, index) => {
            const key = `nominee-${index}`;
            /**
             * If the nominee has been voted for, isSelected should be true
             */
            return <Nominee key={key} nominee={nominee} isSelected={false} />;
          })}
        </div>
        <div className="clearfix">
          <PrevCategoryButton currentCategoryId={categoryId} />
          <NextCategoryButton
            currentCategoryId={categoryId}
            maxCategoryId={Object.values(categories).length}
          />
        </div>
      </div>
    );
  }
}

export default Category;
