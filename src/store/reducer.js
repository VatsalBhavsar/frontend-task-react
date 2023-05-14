import { ACTIVE_FILTER, IS_FETCHING_COUNTRIES, IS_MOBILE_MENU_OPEN, SET_COUNTRIES, SET_REGION_FILTERS } from "./types";

const initialState = {
  countries: [],
  regionFilters: [],
  isFetchingCountries: false,
  isMobileMenuOpen: false,
  activeFilter: "All"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case SET_REGION_FILTERS:
      return {
        ...state,
        regionFilters: action.payload
      }
    case IS_FETCHING_COUNTRIES:
      return {
        ...state,
        isFetchingCountries: action.payload
      }
    case IS_MOBILE_MENU_OPEN:
      return {
        ...state,
        isMobileMenuOpen: action.payload
      }
    case ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      }
    default:
      return state
  }
}

export default reducer;