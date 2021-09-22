import React, {useState, useEffect} from "react";
import PersonalPantryServices from "../services/PersonalPantryServices";
import RecipeContainer from "./RecipesContainer"
import ShoppingListContainer from "./ShoppingListContainer"
import CreateRecipeContainer from "./CreateRecipeContainer"
import FinalLogoWhiteBackground from "../FinalLogoWhiteBackground.jpg";

import "./AppContainer.css";

const AppContainer = () => {

    const [allRecipes, setAllRecipes] = useState([])
    const [shoppingList, setShoppingList] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [recipesListClick, setRecipesListClick] = useState(false)
    const [shoppingListClick, setShoppingListClick] = useState(false)
    const [createRecipeClick, setCreateRecipeClick] = useState(false)
    

    useEffect(() => {
        PersonalPantryServices.getRecipes()
            .then(allRecipes => setAllRecipes(allRecipes));

        
        PersonalPantryServices.getIngredients()
            .then(ingredients => setIngredients(ingredients));

        
        PersonalPantryServices.getShoppingLists()
            .then(shoppingList => setShoppingList(shoppingList));
    }, [])


    const handleClick = () => {
        setShoppingListClick(false);
        setRecipesListClick(false);
        setCreateRecipeClick(false);
    }

    const handleAllRecipesClick = event => {
        setRecipesListClick(true)
    }

    const handleShoppingListClick = event => {
        setShoppingListClick(true)
    }

    const handleCreateRecipeClick = event => {
        setCreateRecipeClick(true)
    }


    if(recipesListClick) {
        return(
            <>
                <img src={FinalLogoWhiteBackground} onClick={handleClick} />
                <RecipeContainer allRecipes={allRecipes} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
            </>
        )
    }

    if(shoppingListClick) {
        return(
            <>
                <img src={FinalLogoWhiteBackground} onClick={handleClick} />
                <ShoppingListContainer shoppingList={shoppingList} shoppingListClick={shoppingListClick}/>
            </>
        )
    }

    if(createRecipeClick) {
        return(
            <>
                <img src={FinalLogoWhiteBackground} onClick={handleClick} />
                <CreateRecipeContainer/>
            </>
        )
    }


    return(

        <section className="main_page">
            <img src={FinalLogoWhiteBackground} onClick={handleClick} />
            <div className ="homepage_button" onClick={handleAllRecipesClick}>View All Recipes</div>
            <div className ="homepage_button" onClick={handleShoppingListClick}>View Shopping List</div>
            <div className ="homepage_button" onClick={handleCreateRecipeClick}>Create a Recipe</div>
        </section>
    );
}

export default AppContainer;