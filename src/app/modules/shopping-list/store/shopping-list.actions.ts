import {Action} from "@ngrx/store";
import {Ingredient} from "../../../shared/models/ingredient.model";

// ACTIONS CONSTANTS
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

// ACTIONS CREATORS
export class AddIngredient implements Action{
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action{
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

// ACTIONS TYPES
export type ShoppingListActions = AddIngredient | AddIngredients;
