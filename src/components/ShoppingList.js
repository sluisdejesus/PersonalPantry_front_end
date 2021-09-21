import React from "react";

const ShoppingList = ({shoppingList}) => {

    const shoppingListIngredientsList = Object.entries(shoppingList.ingredientList).map(([key, value]) => {
        return(
        <li>{value} {key}</li>
        )
      })

    return (
        <>
        <h3>This is this shopping list</h3>
        <ul>
        {shoppingListIngredientsList}
        </ul>
        </>
    )
}

export default ShoppingList;