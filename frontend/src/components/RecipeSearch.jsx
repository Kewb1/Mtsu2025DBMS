import React, { useState } from "react";

function RecipeSearch({ setRecipes }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock data for now
    setRecipes([
      { name: "Spaghetti Carbonara", time: "30 mins", image: "https://via.placeholder.com/150" },
      { name: "Avocado Toast", time: "10 mins", image: "https://via.placeholder.com/150" },
    ]);
  };

  return (
    <form onSubmit={handleSearch} className="my-4 flex flex-col items-center gap-2">
      <input
        type="text"
        placeholder="Enter ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded-md w-80"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default RecipeSearch;
