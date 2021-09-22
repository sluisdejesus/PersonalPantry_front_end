import React from "react";
import "./ShoppingList.css";

const ShoppingList = ({shoppingList}) => {

    const shoppingListIngredientsList = Object.entries(shoppingList.ingredientList).map(([key, value]) => {
        return(
        <li key={key}>{(value)}{key}</li>
        )
      })

    return (
        <section className="ingredient_list">
        <h3>This is this shopping list</h3>
        <div> 
        <ul>
        {shoppingListIngredientsList}
        </ul>
        </div>       
        </section>
    )
}

export default ShoppingList;