import React from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropDownData} from '../../common';
import styles from './styles';

interface Props {
  title: string;
  data: DropDownData[] | undefined;
  placeholder: string;
  zIndex: number;
  disabled?: boolean;
  onChangeValue?: (item: DropDownData) => void;
}

const TitledSelector = ({
  title,
  data,
  placeholder,
  zIndex,
  disabled,
  onChangeValue,
}: Props) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <DropDownPicker
        placeholder={placeholder}
        items={data!}
        containerStyle={styles.dropDownContainer}
        itemStyle={styles.dropDownItem}
        dropDownMaxHeight={200}
        disabled={disabled}
        onChangeItem={(item) => onChangeValue && onChangeValue(item)}
        zIndex={zIndex}
      />
    </>
  );
};

export {TitledSelector};
