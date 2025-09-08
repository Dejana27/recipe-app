import Link from "next/link";
import recipes from '../../data/recipes.json';
import Image from "next/image";
export default function RecipesPage () {
    return (
        <div className="main-container-all-recipes">
            <h1>All Recipes</h1>
            <div>
                {recipes.map((recipe) => (
                    <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}>
                        <div>
                            <h2>{recipe.title}</h2>
                            <Image src={recipe.image}
                            alt={recipe.title}
                            width={300}
                            height={300}
                            />
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}