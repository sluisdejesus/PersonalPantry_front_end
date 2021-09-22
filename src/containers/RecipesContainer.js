import { useEffect, useState } from "react";
import AllRecipes from  "../components/AllRecipes"
import Recipe from  "../components/Recipe"
import "./RecipesContainer.css";
import PersonalPantryServices from "../services/PersonalPantryServices";

const RecipesContainer = ({allRecipes, shoppingList, setShoppingList}) => {

    const [chosenRecipe, setChosenRecipe] = useState(null)
    const [desiredServings, setDesiredServings] = useState(0)
    
    const onRecipeChosen = (recipe) => {
        setChosenRecipe(recipe);
    };

    const handleRecipeClick = () => {
        setChosenRecipe(null)
    }
     
    const recipeSelected = () => {
        PersonalPantryServices.addSelectedRecipe({
            recipe: chosenRecipe,
            desiredServings: desiredServings,
            shoppingList: shoppingList
        })
        .then((recipe) => {
        PersonalPantryServices.getShoppingLists()
            .then(shoppingList => setShoppingList(shoppingList));
        })
    };

    if(chosenRecipe) {
        return (
            <>
            <button id="back_button" onClick={handleRecipeClick}>Back</button>
            <Recipe chosenRecipe={chosenRecipe} recipeSelected={recipeSelected} setDesiredServings={setDesiredServings}/>
            </>
        )
    }

    if(!chosenRecipe) {
        return (
            <>
            <AllRecipes allRecipes={allRecipes} onRecipeChosen={onRecipeChosen} chosenRecipe={chosenRecipe}/>
            </>
        )
    }
}

export default RecipesContainer;