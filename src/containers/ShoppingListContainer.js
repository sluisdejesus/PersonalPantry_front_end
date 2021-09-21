import React from "react";
import ShoppingList from "../components/ShoppingList"

const ShoppingListContainer = ({shoppingList, returnHome}) => {

    const handleClick = (event) => {
        returnHome();
    }

    return(
        <>
        <button onClick={handleClick}>Home</button>
        <h3>I am the shoppingList</h3>
        <ShoppingList shoppingList={ShoppingList}/>
        </>
    )
};

export default ShoppingListContainer;