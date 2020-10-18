import React from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

interface Props {
  title: string;
  data: any;
  placeholder: string;
  zIndex: number;
}

const TitledSelector = ({title, data, placeholder, zIndex}: Props) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <DropDownPicker
        placeholder={placeholder}
        items={[
          {
            label: 'UK',
            value: 'uk',
          },
          {
            label: 'France',
            value: 'france',
          },
        ]}
        containerStyle={styles.dropDownContainer}
        itemStyle={styles.dropDownItem}
        dropDownMaxHeight={200}
        zIndex={zIndex}
      />
    </>
  );
};

export {TitledSelector};
