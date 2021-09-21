import React from "react";

const Recipe = ({chosenRecipe}) => {

    if(chosenRecipe) {

   const instructionsList = chosenRecipe.instructions.map((instruction) => {
        return <li key={chosenRecipe.id}>{instruction}</li>   
})
    return (
        <section>
        <img src={chosenRecipe.imageUrl}/>
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
    } else{
        return null}

}
export default Recipe;