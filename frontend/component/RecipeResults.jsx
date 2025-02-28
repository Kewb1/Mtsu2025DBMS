import React from "react";

function RecipeResults({ recipes }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Results:</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-md text-center">
              <img src={recipe.image} alt={recipe.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-gray-600">{recipe.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeResults;
