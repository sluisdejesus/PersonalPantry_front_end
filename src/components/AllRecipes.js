import React from "react";
import Recipe from "./Recipe";

const AllRecipes = ({allRecipes, onRecipeChosen}) => {

    const handleClick = (recipeIndex) => {
       const chosenRecipe = allRecipes[recipeIndex]
       onRecipeChosen(chosenRecipe)
    }

    const recipeNodes = allRecipes.map((recipe, index) => {
        return(
            <section key={recipe.id} value={index} onClick={() => handleClick(index)}>
                <ul>
                    <img src={recipe.imageUrl} alt={recipe.name}/>
                    <li>{recipe.name}</li>
                    <li>Ready in {recipe.readyInMinutes} minutes</li>
                    <li>Calories {recipe.caloriesPerServing} kcal</li>
                </ul>        
            </section>
            );
        });

    return (
        <>
        {recipeNodes}
        </>
        )
    }

export default AllRecipes