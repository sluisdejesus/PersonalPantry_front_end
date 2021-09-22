import React, { useState } from "react"; 
import "./RecipeForm.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



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

    
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const values = {
    //         name:(name)
    //     }
    // }

    const handleClick = (event) => {
        event.preventDefault();  
        setInstructions([...instructions, ""])
    };


const instructionSteps = instructions.map((instruction, index) => {
    return <li  key={index}><input className="input_box" type= "text" ></input> <br></br></li>
})

return (
    <form className="recipe_form">
        <h2 className ="input_label" >New Recipe</h2>
        <div >
            <label className ="input_label" htmlFor= "name">Recipe Name:  </label>
            <input className="input_box"type="text" id="name" onChange={handleName}></input>
            
        </div>
        <br></br>
        <div>
            <label className ="input_label" htmlFor="readyInMinutes">Cooking time:  </label>
            <input className="input_box" type= "number" id="readyInMinutes" min="0" onChange={handleReadyInMinutes} ></input>
            <label className ="input_label">mins</label>
        </div>
        <br></br>
        <div>
            <label className ="input_label" htmlFor="caloriesPerServing">Calories per Serving:  </label>
            <input className="input_box"type="number" id="caloriesPerServing" min="0" onChange={handleCaloriesPerServing}></input>
            <label className ="input_label">kcal</label>
        </div>
        <br></br>
        <div>
            <label className ="input_label" htmlFor="description">Description:  </label>
            <input className="input_box" type="text" id="description" onChange = {handleDescription}></input>
            </div>
<br></br>
        <div>
            <h4 className ="input_label">Ingredients</h4>
            <ul id="ingredient_list">
            <>{instructionSteps}</>
            </ul>
            <FontAwesomeIcon icon={faPlus} onClick={handleClick} className="plusButton" color="#ef8276"/>
        </div>
        <br></br>
        <div>
            <h4 className ="input_label">Instructions</h4>
            <ul id="instruction_list">
            {instructionSteps}
            </ul>
            <FontAwesomeIcon icon={faPlus} onClick={handleClick} color="#ef8276"/>


       </div>
    <br></br>

    <button>Save Recipe</button>


    </form>
)

}


export default RecipeForm;