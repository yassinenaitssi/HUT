import {defaultRecipesState} from '../store'

export default (state = defaultRecipesState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_RECIPES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_RECIPES_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_RECIPE': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_RECIPE': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(recipe => recipe._id !== action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'UPDATE_RECIPE': {
      let newElements = state.elements.slice()
      let recipe = state.elements.filter((recipe, i) => recipe._id === action.payload.recipeId)[0]
      const recipeIndex = newElements.indexOf(recipe)
      recipe = {
        ...recipe,
        ...action.payload.recipe
      }
      newElements[recipeIndex] = recipe
      return {
        ...state,
        elements: newElements
      }
    }
    default:
      return {
        ...state
      }
  }
}
