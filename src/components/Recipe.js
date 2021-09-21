import React from "react";

const Recipe = ({chosenRecipe}) => {

   const instructionsList = chosenRecipe.instructions.map((instruction) => {
        return <li key={chosenRecipe.id}>{instruction}</li>   
    })
    
    return (
        <section>
        <img src={chosenRecipe.imageUrl} alt={chosenRecipe.name}/>
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
        </section>
    )

}

export default Recipe;