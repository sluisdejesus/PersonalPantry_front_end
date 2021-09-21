import React from "react"; 

const RecipeForm = ({}) => {

return (
    <form>
        <h2>New Recipe</h2>
        <div>
            <label htmlFor= "name">Recipe Name:  </label>
            <input type="text" id="name"></input>
            
        </div>
        <div>
            <label htmlFor="readyInMinutes">Cooking time:  </label>
            <input type= "number" id="readyInMinutes" min="0" ></input>
            <label>mins</label>
        </div>
        <div>
            <label htmlFor="caloriesPerServing">Calories per Serving:  </label>
            <input type="number" id="caloriesPerServing" min="0"></input>
            <label>kCal</label>
        </div>
        <div>
            <label htmlFor="description">Description:  </label>
            <input type="text" id="description"></input>
            </div>
        <p></p>
        <p></p>
        <div>
            <h4>Instructions</h4>
            <ul id="ingredient_list">
            <li><input type="text" id="instructions" value="Step One"></input></li>    
            <li><input type="text" id="instructions" value="Step Two"></input></li>
            <li><input type="text" id="instructions" value="Step Three"></input></li>
            </ul>
            <button>Add more steps</button>

       </div>
<br></br>

    <button>Save Recipe</button>  


    </form>
)

}

export default RecipeForm;