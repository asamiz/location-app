import {DropDownData} from '../common/types';

export interface IHomeState {
  cities: DropDownData[];
  areas: DropDownData[];
  selectedCountry: DropDownData | {};
}

export interface IHomeAction {
  type: string;
  payload?: any;
}
