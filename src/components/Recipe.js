import React from "react";

const Recipe = ({chosenRecipe}) => {

    if(chosenRecipe != null) {

    return (
        <ul>
            <li>{chosenRecipe.name}</li>
            <li>Instructions - {chosenRecipe.instructions}</li>
            <li>Ready in - {chosenRecipe.readyInMinutes} minutes</li>
        </ul>
    )
    
    } else {
        return null
    }

}

export default Recipe;