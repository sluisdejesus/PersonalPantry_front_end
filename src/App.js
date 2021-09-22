import './App.css';
import AppContainer from "./containers/AppContainer"
import FinalLogoWhiteBackground from "./FinalLogoWhiteBackground.jpg";

function App() {

  return (
      <section className="app_container">
      <header className="header">
      <img src = {FinalLogoWhiteBackground}/>
      </header>      
      <AppContainer/>
      </section>
  );
}

export default App;

// - AppContainer
  // - RecipeCollection
  // - Recipe
  
  // - ShoppingList

  // - CreateRecipe
