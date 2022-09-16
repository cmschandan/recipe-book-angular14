import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'This is simply a test',
        'https://www.cookipedia.co.uk/wiki/images/6/61/Tuna_curry_recipe.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Christmas Circle Cookies', 'Create several decorated holiday cookies with just one simple round cookie cutter.','https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17623-christmas-circle-cookies-600x600.jpg?ext=.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShopping(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}