import React from "react";
import "./Recipe.css";

const Recipe = ({chosenRecipe, recipeSelected, setDesiredServings}) => {

   const instructionsList = chosenRecipe.instructions.map((instruction) => {
        return <li className="instruction_points"key={chosenRecipe.id}>{instruction}</li>   
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

            <div id = "individual_recipe_header">
                <label htmlFor="name">Serving size:</label>
                <input onChange={onChange} type="number" id="serving_size" min="1" placeholder="1"></input>
                <button id="add_recipe_button" onClick={handleClick}>Add to Shopping list</button>
            </div>

            <h3 id = "individual_recipe_name">{chosenRecipe.name}</h3>

            <div id = "individual_recipe_image">
                <img className="recipe_image" src={chosenRecipe.imageUrl} alt={chosenRecipe.name}/>
            </div>
            
            <ul>
                <h5>Ingredients</h5>
                    {recipeIngredientsList}

                <li>
                <h5>Instructions</h5>
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