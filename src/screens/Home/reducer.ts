import {IHomeAction, IHomeState, TYPES} from '../../common';

export const HomeReducer = (initialState: IHomeState, action: IHomeAction) => {
  switch (action.type) {
    case TYPES.SELECTED_COUNTRY:
      return {
        ...initialState,
        selectedCountry: action.payload,
        areas: [],
        cities: [],
      };
    case TYPES.UPDATE_CITIES:
      return {...initialState, cities: action.payload};
    case TYPES.UPDATE_AREAS:
      return {...initialState, areas: action.payload};
    default:
      return initialState;
  }
};
