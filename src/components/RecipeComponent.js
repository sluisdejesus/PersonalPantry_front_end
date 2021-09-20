import React from "react";

import RecipeServices from "../services/RecipeServices";

const RecipeComponent = ({recipeData}) => {
    const recipeDataNodes = recipeData.map(recipe =>{
        return (
        <p>
            {recipe.name}
        </p>
        )
    })
    

    return (
        <>
        {recipeDataNodes}
        
        <p>Is this showing?</p>
        </>
        )
}


export default RecipeComponent;