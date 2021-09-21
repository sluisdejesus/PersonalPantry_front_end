import React from "react";

const ShoppingListContainer = ({shoppingList, returnHome}) => {

    const handleClick = (event) => {
        returnHome();
    }

    return(
        <>
        <button onClick={handleClick}>Home</button>
        <h3>I am the shoppingList</h3>
        </>
    )
}

export default ShoppingListContainer;