import React from 'react';
import {Text, View} from 'react-native';
import {TitledSelector} from '../TitledSelector';
import {DropDownData} from '../../common';
import styles from './styles';

interface Props {
  countries: DropDownData[];
  cities: DropDownData[] | undefined;
  onSelectCountry: (item: DropDownData) => void;
  onSelectCity: () => void;
}

let Component = ({countries, cities, onSelectCountry, onSelectCity}: Props) => {
  console.log('CITIES', cities);
  return (
    <View>
      <Text style={styles.title}>{'Location'}</Text>
      <TitledSelector
        placeholder={'Select your country ..'}
        zIndex={5000}
        title={'Country *'}
        onChangeValue={(item) => onSelectCountry(item)}
        data={countries}
      />
      <TitledSelector
        placeholder={
          cities?.length === 0
            ? 'Please select country first ..'
            : 'Select your city ..'
        }
        zIndex={4000}
        title={'City *'}
        disabled={cities?.length === 0}
        onChangeValue={() => onSelectCity()}
        data={cities}
      />
      {/* <TitledSelector
        placeholder={'Select your area ..'}
        zIndex={3000}
        title={'Area'}
      /> */}
    </View>
  );
};

let LocationForm = React.memo(Component);

export {LocationForm};
