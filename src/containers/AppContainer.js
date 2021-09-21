import React, {useState, useEffect} from "react";
// import AllRecipes from "../components/AllRecipes";
// import ShoppingList from "../components/ShoppingList";
import PersonalPantryServices from "../services/PersonalPantryServices";
// import Recipe from "../components/Recipe";
import RecipeContainer from "./RecipeContainer"
import ShoppingListContainer from "./ShoppingListContainer"

const AppContainer = () => {

    const [allRecipes, setAllRecipes] = useState([])
    const [shoppingList, setShoppingList] = useState({})
    const [ingredients, setIngredients] = useState([])

    const [shoppingListClick, setShoppingListClick] = useState(false)
    const [recipesListClick, setRecipesListClick] = useState(false)
    
    useEffect(() => {
        PersonalPantryServices.getRecipes()
            .then(allRecipes => setAllRecipes(allRecipes));

        
        PersonalPantryServices.getIngredients()
            .then(ingredients => setIngredients(ingredients));

        
        PersonalPantryServices.getShoppingLists()
            .then(shoppingList => setShoppingList(shoppingList));
    }, [])


    const handleAllRecipesClick = event => {
        setRecipesListClick(true)
    }


    const handleShoppingListClick = event => {
        setShoppingListClick(true)
    }


    if(recipesListClick === true) {
        return(
            <RecipeContainer allRecipes={allRecipes}/>
        )
    }


    if(shoppingListClick === true) {
        return(
            <ShoppingListContainer shoppingList={shoppingList}/>
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