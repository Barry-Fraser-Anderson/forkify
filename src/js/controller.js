import { state, loadRecipe } from './model.js'
import recipeView from './views/recipeView.js';

import 'core-js/stable';
//import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
  
    if (!id) return;
    recipeView.renderSpinner();
    
    await loadRecipe(id);
    recipeView.render(state.recipe);

  } catch (error) {
    console.error(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
