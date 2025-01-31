// App.jsx
import RecipeCard from "./RecipeCard";

const RECIPE= {
  name: "Pho",
  image_url: "https://static-task-assets.react-formula.com/239035.jpg",
}

const App = () => {
  return (
    <div>
      <RecipeCard recipe = {RECIPE}/>
    </div>
  );
};

export default App;