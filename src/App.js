import './App.css';
import RecipeComponent from './components/RecipeComponent';
import RecipeServices from './services/RecipeServices';
import { useEffect, useState } from 'react';
import RecipeForm from './components/RecipeForm';

function App() {

    const [allData, setAllData] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    useEffect(() => {      
      RecipeServices.getRecipeData()
        .then(Recipe => setAllData(Recipe));

    }, []);

  return (
    <div className="App">
    <p></p>
    <RecipeComponent recipeData = {allData}/>
    <RecipeForm/>
    </div>
  );
}

export default App;

