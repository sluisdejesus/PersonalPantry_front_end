// import { render } from "@testing-library/react";
// import React from "react";

// // import RecipeServices from "../services/RecipeServices";
// import RecipeInfo from "./Recipe";

// const RecipeComponent = ({recipeData}) => {

//     //const [nameOfState, setNameOfState] = useState(starting value i.e 0, null)



//     const recipeDataNodes = recipeData.map(recipe =>{

//         const handleClick = (event) => {
//                    render(                   
//                    <><RecipeInfo 
//         key = {recipe._id}
//         recipe = {recipe}
//         />
        
//         </>)

        
//         }
//         return(<>
//         <ul onClick={handleClick}>
//         <li><p>Recipe name: {recipe.name}</p></li>
//         <li><p>Ready in {recipe.readyInMinutes} minutes</p></li>
//         <li><p>{recipe.caloriesPerServing} calories per serving</p></li>
//         </ul>     

//         </>)
        
//     })
    

//     return (
//         <>
//         {recipeDataNodes}
        
//         <p></p>
//         </>
//         )
// }


// export default RecipeComponent;