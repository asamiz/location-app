import React from 'react';
import {Text, View} from 'react-native';
import {TitledSelector} from '../TitledSelector';
import {DropDownData} from '../../common';
import styles from './styles';

interface Props {
  countries: DropDownData[];
  cities: DropDownData[] | undefined;
  areas: DropDownData[] | undefined;
  onSelectCountry: (item: DropDownData) => void;
  onSelectCity: (item: DropDownData) => void;
}

let Component = ({
  countries,
  cities,
  areas,
  onSelectCountry,
  onSelectCity,
}: Props) => {
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
      {cities?.length !== 0 && (
        <TitledSelector
          placeholder={'Select your city ..'}
          zIndex={4000}
          title={'City *'}
          disabled={cities?.length === 0}
          onChangeValue={(item: DropDownData) => onSelectCity(item)}
          data={cities}
        />
      )}
      {areas?.length !== 0 && (
        <TitledSelector
          placeholder={'Select your area ..'}
          zIndex={3000}
          disabled={areas?.length === 0}
          title={'Area (Optional)'}
          data={areas}
        />
      )}
    </View>
  );
};

let LocationForm = React.memo(Component);

export {LocationForm};
