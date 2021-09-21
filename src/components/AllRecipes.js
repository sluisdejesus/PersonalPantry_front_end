import React from "react";
// import { render } from "@testing-library/react";
import Recipe from "./Recipe";

const AllRecipes = ({allRecipes, onRecipeChosen, chosenRecipe}) => {

    const handleClick = (event) => {
        
       const chosenRecipe = allRecipes[event.target.value]
       onRecipeChosen(chosenRecipe)
        
        // return(
        //     <Recipe recipe = {chosenRecipe}/>
        // )
    }

    const recipeNodes = allRecipes.map((recipe, index) => {
        return(
            <section key={recipe.id} onClick={handleClick} value={index}>
                <ul>
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
            <Recipe chosenRecipe={chosenRecipe}/>
            </>
        );
    };

export default AllRecipes