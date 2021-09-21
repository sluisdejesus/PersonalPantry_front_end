import React from "react";
import AllRecipes from "../components/AllRecipes";
import ShoppingList from "../components/ShoppingList";


const AppContainer = () => {

    return(
        <>
        <h1>This is the App Container</h1>
        <ShoppingList/>
        <AllRecipes/>
        </>
    );
}

export default AppContainer;
























//     const [allData, setAllData] = useState([]);
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
  
//     useEffect(() => {      
//       RecipeServices.getRecipeData()
//         .then(Recipe => setAllData(Recipe));

//     }, []);

//   return (
//     <div className="App">
//     <p></p>
//     <RecipeComponent recipeData = {allData}/>
//     </div>
//   );
// }