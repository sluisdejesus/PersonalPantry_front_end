import React from "react";

const Recipe = ({chosenRecipe}) => {

    if(chosenRecipe) {

   const instructionsList = chosenRecipe.instructions.map((instruction) => {
        return <li>{instruction}</li>   
})
    return (
        <ul>
            <li>{chosenRecipe.name}</li>
            
            <li>
            Instructions
                <ul>
                    {instructionsList}
                </ul>
            </li>
            <li>Ready in - {chosenRecipe.readyInMinutes} minutes</li>
        </ul>
    )
    }
}
export default Recipe;