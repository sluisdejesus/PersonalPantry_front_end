import React from "react";
import Recipe from "./Recipe";

const AllRecipes = ({allRecipes}) => {

    const handleClick = (event) => {
        
        const clickedRecipe = allRecipes["id"][event.target.value]
        
        return(
            <Recipe recipe = {clickedRecipe}/>
        );
    }

    const recipeNodes = allRecipes.map(recipe =>{
    return(
        <section key={recipe.id} onClick={handleClick} value={recipe.id}>
            <ul>
                <li>{recipe.name}</li>
                <li>Ready in {recipe.readyInMinutes} minutes</li>
                <li>{recipe.caloriesPerServing} calories per serving</li>
            </ul>        
        </section>
        );
});

        return (
            <>
            {recipeNodes}
            </>
        );
    };

export default AllRecipes