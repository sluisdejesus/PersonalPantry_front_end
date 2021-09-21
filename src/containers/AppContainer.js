import React, {useState, useEffect} from "react";
import PersonalPantryServices from "../services/PersonalPantryServices";
import RecipeContainer from "./RecipeContainer"
import ShoppingListContainer from "./ShoppingListContainer"

const AppContainer = () => {

    const [allRecipes, setAllRecipes] = useState([])
    const [shoppingList, setShoppingList] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [recipesListClick, setRecipesListClick] = useState(false)
    const [shoppingListClick, setShoppingListClick] = useState(false)
    
    useEffect(() => {
        PersonalPantryServices.getRecipes()
            .then(allRecipes => setAllRecipes(allRecipes));

        
        PersonalPantryServices.getIngredients()
            .then(ingredients => setIngredients(ingredients));

        
        PersonalPantryServices.getShoppingLists()
            .then(shoppingList => setShoppingList(shoppingList));
    }, [])

    const returnHome = () => {
        setShoppingListClick(false);
        setRecipesListClick(false);
    }


    const handleAllRecipesClick = event => {
        setRecipesListClick(true)
    }


    const handleShoppingListClick = event => {
        setShoppingListClick(true)
    }


    if(recipesListClick) {
        return(
            <RecipeContainer allRecipes={allRecipes} returnHome={returnHome}/>
        )
    }


    if(shoppingListClick) {
        return(
            <ShoppingListContainer shoppingList={shoppingList} returnHome={returnHome}/>
        )
    }


    return(
        <>
        <button onClick={handleAllRecipesClick}>View All Recipes</button>
        <button onClick={handleShoppingListClick}>View Shopping List</button>
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