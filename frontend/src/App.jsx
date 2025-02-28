import React, { useState } from "react";
import RecipeSearch from "./components/RecipeSearch";
import RecipeResults from "./components/RecipeResults";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Recipe Finder</h1>
      <RecipeSearch setRecipes={setRecipes} />
      <RecipeResults recipes={recipes} />
    </div>
  );
}

export default App;

