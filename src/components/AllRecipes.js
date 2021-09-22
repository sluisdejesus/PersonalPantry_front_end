import React from "react";
import Recipe from "./Recipe";
import "./AllRecipes.css"; 

const AllRecipes = ({allRecipes, onRecipeChosen}) => {

    const handleClick = (recipeIndex) => {
       const chosenRecipe = allRecipes[recipeIndex]
       onRecipeChosen(chosenRecipe)
    }

    const recipeNodes = allRecipes.map((recipe, index) => {
        return(
            <section className="recipe_section" key={recipe.id} value={index} onClick={() => handleClick(index)}>
                
                <ul>
                    <img className="recipe_image" src={recipe.imageUrl} alt={recipe.name}/>
                    <h3>{recipe.name}</h3>
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