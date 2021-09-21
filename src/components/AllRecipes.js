import React , {render} from "react";
// import { render } from "@testing-library/react";
import Recipe from "./Recipe";

const AllRecipes = ({allRecipes, onChosenRecipe}) => {

    const handleClick = (event) => {
        
        const chosenRecipe = allRecipes[event.target.value]
        onChosenRecipe(chosenRecipe)
        
        render(
            <Recipe recipe = {chosenRecipe}/>
        )
    }

    const recipeNodes = allRecipes.map((recipe, index) => {
        return(
            <section key={recipe.id} onClick={handleClick} value={index}>
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