import React, {useState, useEffect} from "react";
import PersonalPantryServices from "../services/PersonalPantryServices";
import RecipeContainer from "./RecipesContainer"
import ShoppingListContainer from "./ShoppingListContainer"
import CreateRecipeContainer from "./CreateRecipeContainer"
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

    const returnHome = () => {
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
            <RecipeContainer allRecipes={allRecipes} returnHome={returnHome} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
        )
    }


    if(shoppingListClick) {
        return(
            <ShoppingListContainer shoppingList={shoppingList} returnHome={returnHome} shoppingListClick={shoppingListClick}/>
        )
    }

    if(createRecipeClick) {
        return(
            <CreateRecipeContainer returnHome={returnHome}/>
        )
    }


    return(
        <section className="main_page">
        <div className ="homepage_button" onClick={handleAllRecipesClick}>View All Recipes</div>
        <div className ="homepage_button" onClick={handleShoppingListClick}>View Shopping List</div>
        <div className ="homepage_button" onClick={handleCreateRecipeClick}>Create a Recipe</div>
        </section>
    );
}

export default AppContainer;