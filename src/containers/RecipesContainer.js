import { useEffect, useState } from "react";
import AllRecipes from  "../components/AllRecipes"
import Recipe from  "../components/Recipe"

const RecipesContainer = ({allRecipes, returnHome}) => {

    const [chosenRecipe, setChosenRecipe] = useState(null)
    
    const onRecipeChosen = (recipe) => {
        setChosenRecipe(recipe);
    };

    const handleClick = () => {
        returnHome()
    }

    const handleRecipeClick = () => {
        setChosenRecipe(null)
    }
     
    if(chosenRecipe) {
        return (
            <>
            <button onClick={handleRecipeClick}>Back</button>
            <Recipe chosenRecipe={chosenRecipe}/>
            </>
        )
    }

    if(!chosenRecipe) {
        return (
            <>
            <button onClick={handleClick}>Home</button>
            <AllRecipes allRecipes={allRecipes} onRecipeChosen={onRecipeChosen} chosenRecipe={chosenRecipe}/>
            </>
        )
    }

}

export default RecipesContainer;