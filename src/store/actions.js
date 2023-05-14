import { COUNTRIES_API } from "../constants/services"
import { ACTIVE_FILTER, IS_FETCHING_COUNTRIES, IS_MOBILE_MENU_OPEN, SET_COUNTRIES, SET_REGION_FILTERS } from "./types"

export const setIsFetchingCountries = payload => ({ type: IS_FETCHING_COUNTRIES, payload })

export const setRegionFilters = payload => ({ type: SET_REGION_FILTERS, payload })

export const fetchCountries = () => {
  return async dispatch => {
    dispatch(setIsFetchingCountries(true))
    const countries = await fetch(COUNTRIES_API).then(res => res.json())
    dispatch({
      type: SET_COUNTRIES,
      payload: countries
    })
    const regions = ["All", ...new Set(countries.map(item => item.region))];
    dispatch(setRegionFilters(regions))
    dispatch(setIsFetchingCountries(false))
  }
}

export const setActiveFilter = payload => ({ type: ACTIVE_FILTER, payload })

export const setIsMobileMenuOpen = payload => ({ type: IS_MOBILE_MENU_OPEN, payload })