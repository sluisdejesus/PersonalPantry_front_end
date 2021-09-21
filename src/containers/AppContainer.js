import React, {useState, useEffect} from "react";
import AllRecipes from "../components/AllRecipes";
import RecipeForm from "../components/RecipeForm";
import ShoppingList from "../components/ShoppingList";
import PersonalPantryServices from "../services/PersonalPantryServices";
import Recipe from "../components/Recipe";

const AppContainer = () => {

    const [allRecipes, setAllRecipes] = useState([])
    const [shoppingList, setShoppingList] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [chosenRecipe, setChosenRecipe] = useState(null)

    useEffect(() => {
        PersonalPantryServices.getRecipes()
            .then(allRecipes => setAllRecipes(allRecipes));

        
        PersonalPantryServices.getIngredients()
            .then(ingredients => setIngredients(ingredients));

        
        PersonalPantryServices.getShoppingLists()
            .then(shoppingList => setShoppingList(shoppingList));
    }, [])

    const onRecipeChosen = (recipe) => {
        setChosenRecipe(recipe)
    }

    // useEffect(() => {

    // }, [chosenRecipe])

    return(
        <>
        <h1>This is the App Container</h1>
        <AllRecipes allRecipes={allRecipes} onRecipeChosen={onRecipeChosen} chosenRecipe={chosenRecipe}/>
        <Recipe chosenRecipe={chosenRecipe}/>
        <ShoppingList shoppingList={shoppingList}/>
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