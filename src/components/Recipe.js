import React from "react";

const Recipe = ({chosenRecipe}) => {

    return (
        <div>
        <ul>
            <li>{chosenRecipe.name}</li>
            <li>Instructions - {chosenRecipe.instructions}</li>
            <li>Ready in - {chosenRecipe.readyInMinutes} minutes</li>
        </ul>
        </div>
    )

}

export default Recipe;