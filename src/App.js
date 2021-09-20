import './App.css';
import RecipeComponent from './components/RecipeComponent';
import RecipeServices from './services/RecipeServices';
import { useEffect, useState } from 'react';

function App() {

    const [allData, setAllData] = useState([]);
  
    useEffect(() => {
      RecipeServices.getRecipeData()
        .then(Recipe => setAllData(Recipe));
    }, []);

  return (
    <div className="App">
    <p>App.js</p>
    <RecipeComponent recipeData = {allData}/>
    </div>
  );
}

export default App;
