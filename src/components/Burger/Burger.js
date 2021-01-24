import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// {
//   ingredients: {
//     salad: 1,
//     bacon: 1,
//     cheese: 2,
//     meat: 2,
//   },
// };

const Burger = (props) => {
  // console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingrName) => {
      return [...Array(props.ingredients[ingrName])].map((_, i) => {
        return <BurgerIngredient key={ingrName + i} type={ingrName} />;
      });
    })
    .reduce((acc, el) => {
      return acc.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
