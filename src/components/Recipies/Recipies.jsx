import recipies from "../../recipies.json";
import { Recipe } from "../Recipe/Recipe";

import "./Recipies.css";

export const Recipies = () => {
    return <ul className="recipiesList">
        {recipies.map((recipe) => (
            <Recipe key={recipe.id} name={recipe.name} time={recipe.time} servings={recipe.servings} calories={recipe.calories} difficulty={recipe.difficulty} image={recipe.image}/>
        ))}
    </ul>
}