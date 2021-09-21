import React from "react";

const Recipe = ({chosenRecipe}) => {

    return (
        <ul>
            <li>{chosenRecipe.name}</li>
            <li>Instructions - {chosenRecipe.instructions}</li>
            <li>Ready in - {chosenRecipe.readyInMinutes} minutes</li>
        </ul>
    )
    
}

export default Recipe;