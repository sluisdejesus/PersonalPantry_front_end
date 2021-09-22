import './App.css';
import AppContainer from "./containers/AppContainer"
// import FinalLogoWhiteBackground from "./FinalLogoWhiteBackground.jpg";

function App() {

  return (
      <>
      <header className="header">
      {/* <img src={'./FinalLogoWhiteBackground.jpg'} /> */}
      <h1 className="header_text">Personal Pantry</h1>
      </header>      
      <AppContainer/>
      </>
  );
}

export default App;

// - AppContainer
  // - RecipeCollection
  // - Recipe
  
  // - ShoppingList

  // - CreateRecipe
