import React, {useCallback, useReducer} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {DropDownData, IHomeState, TYPES} from '../../common';
import {LocationForm} from '../../components';
import {useFetch} from '../../hooks';
import {getCitiesAreas, getCountryCities} from '../../services';
import {reshapeDropdownData} from '../../utils';
import {HomeReducer} from './reducer';
import styles from './styles';

const initialState: IHomeState = {
  selectedCountry: {},
  cities: [],
  areas: [],
};

const Home = () => {
  const {data: countryData, loading: countriesLoading} = useFetch('/countries');
  const [{cities, areas, selectedCountry}, dispatch] = useReducer(
    HomeReducer,
    initialState,
  );
  const onSelectCountry = useCallback(async (item: DropDownData) => {
    dispatch({type: TYPES.SELECTED_COUNTRY, payload: item});
    const response = await getCountryCities(item);
    dispatch({type: TYPES.UPDATE_CITIES, payload: response});
  }, []);

  const onSelectCity = useCallback(
    async (item: DropDownData) => {
      if (selectedCountry?.value === '56') {
        const response = await getCitiesAreas(selectedCountry, item);
        dispatch({type: TYPES.UPDATE_AREAS, payload: response});
      } else {
        dispatch({type: TYPES.UPDATE_AREAS, payload: []});
      }
    },
    [selectedCountry],
  );

  return countriesLoading ? (
    <ActivityIndicator style={styles.activityIndicator} />
  ) : (
    <View style={styles.container}>
      <LocationForm
        countries={reshapeDropdownData(countryData)}
        onSelectCountry={(item: DropDownData) => onSelectCountry(item)}
        onSelectCity={(item: DropDownData) => onSelectCity(item)}
        cities={cities}
        areas={areas}
      />
    </View>
  );
};

export default Home;
