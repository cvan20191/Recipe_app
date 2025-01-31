import { useState } from "react";
import RecipeCard from "./RecipeCard";

// fetching from api now rather than hardcoding it
//const RECIPE = {
//  name: "Pho",
//  image_url: "https://static-task-assets.react-formula.com/239035.jpg"
//};

export default function App() {
  //renders object for recipe rather than just print it out
  const [recipe, setRecipe] = useState(null); //using null for init
  const handleClick = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/using-fetch/recipes"
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data)
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      {recipe ? <RecipeCard recipe={recipe} /> : null}
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        Get random Recipe
      </button>
    </div>
  );
}
