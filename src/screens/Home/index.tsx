import React, {useCallback, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {DropDownData} from '../../common';
import {LocationForm} from '../../components';
import {useFetch} from '../../hooks';
import {getCountryCities} from '../../services/services';
import {reshapeDropdownData} from '../../utils';
import styles from './styles';

const Home = () => {
  const {data: countryData, loading: countriesLoading} = useFetch('/countries');
  const [cities, setCities] = useState<DropDownData[] | undefined>([]);

  const onSelectCountry = useCallback(async (item: DropDownData) => {
    const response = await getCountryCities(item);
    setCities(response);
  }, []);

  return countriesLoading ? (
    <ActivityIndicator style={styles.activityIndicator} />
  ) : (
    <View style={styles.container}>
      <LocationForm
        countries={reshapeDropdownData(countryData)}
        onSelectCountry={(item: DropDownData) => onSelectCountry(item)}
        onSelectCity={() => {}}
        cities={cities}
      />
    </View>
  );
};

export default Home;
