import { useEffect, useState } from "react";
import AllRecipes from  "../components/AllRecipes"
import Recipe from  "../components/Recipe"

const RecipeContainer = ({allRecipes}) => {

    const [chosenRecipe, setChosenRecipe] = useState(null)
    
    
    const onRecipeChosen = (recipe) => {
        setChosenRecipe(recipe);
    };
     

    return(
        <>
        <AllRecipes allRecipes={allRecipes} onRecipeChosen={onRecipeChosen} chosenRecipe={chosenRecipe}/>
        <Recipe chosenRecipe={chosenRecipe}/>
        </>
    )

}

export default RecipeContainer;