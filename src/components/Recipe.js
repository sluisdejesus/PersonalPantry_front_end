import React from "react";

const RecipeInfo = ({recipe}) => {
    return (
        <div>
        <ul>
            <li>{recipe.name}</li>
            <li>{recipe.instructions}</li>
            <li>{recipe.readyInMinutes}</li>
        </ul>
        </div>
    )

}

export default RecipeInfo;