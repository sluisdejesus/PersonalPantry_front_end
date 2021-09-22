import React, {useState, useEffect} from "react";
import ShoppingList from "../components/ShoppingList"
import "./ShoppingListContainer.css";

const ShoppingListContainer = ({shoppingList, returnHome, shoppingListClick}) => {

    // const [shoppingListMap, setShoppingListMap] = useState([])

    // useEffect(() => {
    //     getShoppingListMap()
    // }, [shoppingListClick])

    // const getShoppingListMap = () => {
    //    setShoppingListMap(Object.entries(shoppingList.ingredientList))
    // }

    const handleClick = (event) => {
        returnHome();
    }

    return(
        <>
        <button onClick={handleClick}>Home</button>
        <h3>I am the shoppingList Container</h3>
        <ShoppingList shoppingList={shoppingList}/>
        </>
    )
};

export default ShoppingListContainer;