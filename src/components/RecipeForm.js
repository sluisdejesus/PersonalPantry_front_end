import React, { useState } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./RecipeForm.css";

const RecipeForm = () => {   
    const [name, setName] = useState(0);
    const [readyInMinutes, setReadyInMinutes] = useState(0);
    const [caloriesPerServing, setCaloriesPerServing] = useState(0);
    const [description, setDescription] = useState(0);
    const [instructions, setInstructions] = useState(["","",""]);

    const handleName = (event) => setName(event.target.value);
    const handleReadyInMinutes = (event) => setReadyInMinutes(event.target.value);
    const handleCaloriesPerServing = (event) => setCaloriesPerServing(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);

    
    const handleSubmit = event => {
        event.preventDefault();
        const values = {
            name:(name)
        }
    }

    const handleClick = (event) => {
        event.preventDefault();  
        setInstructions([...instructions, ""])
    };


const instructionSteps = instructions.map((instruction, index) => {
    return <li key={index}><input type= "text" ></input></li>
})

return (
    <form className="recipe_form">
        <h2>New Recipe</h2>
        <div>
            <label htmlFor= "name">Recipe Name:  </label>
            <input type="text" id="name" onChange={handleName}></input>
            
        </div>
        <div>
            <label htmlFor="readyInMinutes">Cooking time:  </label>
            <input type= "number" id="readyInMinutes" min="0" onChange={handleReadyInMinutes} ></input>
            <label>mins</label>
        </div>
        <div>
            <label htmlFor="caloriesPerServing">Calories per Serving:  </label>
            <input type="number" id="caloriesPerServing" min="0" onChange={handleCaloriesPerServing}></input>
            <label>kcal</label>
        </div>
        <div>
            <label htmlFor="description">Description:  </label>
            <input type="text" id="description" onChange = {handleDescription}></input>
            </div>
        <p></p>
        <p></p>
        <div>
            <h4>Instructions</h4>
            <ul id="instruction_list">
            {instructionSteps}
            </ul>
            <button onClick={handleClick}>Add more steps</button>
            <i class="fas fa-plus">Add More Steps</i>
            <FontAwesomeIcon icon="coffee" />
       </div>
    <br></br>

    <button> Recipe</button>


    </form>
)

}


export default RecipeForm;