import React from "react";
import "./Recipe.css";

const Recipe = ({chosenRecipe, recipeSelected, setDesiredServings}) => {

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

    const handleClick = (event) => {
        recipeSelected(event)
    }

    const onChange = (event) => {
        setDesiredServings(event.target.value)
    }
    
    return (
        <section className="individual_recipe">
        <label htmlFor="name">Serving size:</label>
<<<<<<< HEAD
        <input type="number" id="serving_size" min="1"></input>
        <button>Add to Shopping list</button>
        <img className="recipe_image"src={chosenRecipe.imageUrl} alt={chosenRecipe.name}/>
=======
        <input onChange={onChange} type="number" id="serving_size" min="1" placeholder="1"></input>
        <button onClick={handleClick}>Add to Shopping list</button>
        <img src={chosenRecipe.imageUrl} alt={chosenRecipe.name}/>
>>>>>>> develop
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