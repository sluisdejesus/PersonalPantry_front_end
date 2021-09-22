import React, {useState, useEffect} from "react";
import ShoppingList from "../components/ShoppingList"
import "./ShoppingListContainer.css";

const ShoppingListContainer = ({shoppingList}) => {

    // const [shoppingListMap, setShoppingListMap] = useState([])

    // useEffect(() => {
    //     getShoppingListMap()
    // }, [shoppingListClick])

    // const getShoppingListMap = () => {
    //    setShoppingListMap(Object.entries(shoppingList.ingredientList))
    // }

    return(
        <>
        <ShoppingList shoppingList={shoppingList}/>
        </>
    )
};

export default ShoppingListContainer;