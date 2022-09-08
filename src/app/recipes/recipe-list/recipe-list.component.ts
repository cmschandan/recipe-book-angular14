import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test','https://www.cookipedia.co.uk/wiki/images/6/61/Tuna_curry_recipe.jpg'),
    new Recipe('Christmas Circle Cookies', 'Create several decorated holiday cookies with just one simple round cookie cutter.','https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17623-christmas-circle-cookies-600x600.jpg?ext=.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
