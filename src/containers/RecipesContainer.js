import { useEffect, useState } from "react";
import AllRecipes from  "../components/AllRecipes"
import Recipe from  "../components/Recipe"

const RecipesContainer = ({allRecipes}) => {

    const [chosenRecipe, setChosenRecipe] = useState(null)
    
    const onRecipeChosen = (recipe) => {
        setChosenRecipe(recipe);
    };
     
    if(chosenRecipe) {
        return (
            <Recipe chosenRecipe={chosenRecipe}/>
        )
    }

    if(!chosenRecipe) {
        return (
            <AllRecipes allRecipes={allRecipes} onRecipeChosen={onRecipeChosen} chosenRecipe={chosenRecipe}/>
        )
    }

}

export default RecipesContainer;