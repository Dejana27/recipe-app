import { useRouter } from "next/router";
import Image from "next/image";
import recipes from "../../data/recipes.json";

export default function RecipeHomePage () {
    const router = useRouter();
    const {slug} = router.query;

    const recipe = recipes.find((recipe) => recipe.slug === slug);
    
    if(!recipe) return <p>Recipe not found.</p>

    return (
        <section className="main-container-recipes">
            <div>
                <h1>Recipes</h1>

            </div>
        </section>
    )
}