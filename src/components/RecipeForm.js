import React, { useState } from "react"; 

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


const instructionSteps = instructions.map((instruction) => {
    return <li><input type= "text" ></input></li>
})

return (
    <form>
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
            <label>kCal</label>
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

       </div>
    <br></br>

    <button onSubmit={handleSubmit}>Save Recipe</button>


    </form>
)

}


export default RecipeForm;