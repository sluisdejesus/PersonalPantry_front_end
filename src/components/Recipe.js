import React from "react";

const Recipe = ({chosenRecipe}) => {

   const instructionsList = chosenRecipe.instructions.map((instruction) => {
        return <li key={chosenRecipe.id}>{instruction}</li>   
    })

    const recipeIngredientsList = chosenRecipe.recipeIngredients.map((recipeIngredient) => {
        return (
            <ul key={recipeIngredient.id}>
                <li>{recipeIngredient.measure}{(recipeIngredient.ingredient.unitType).toLowerCase()} {recipeIngredient.ingredient.name}</li>
            </ul>
        )
    })
    
    return (
        <section>
        <img src={chosenRecipe.imageUrl} alt={chosenRecipe.name}/>
        <ul>
            <li>{chosenRecipe.name}</li>
            
            Ingredients
                {recipeIngredientsList}

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