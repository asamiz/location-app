import React from 'react';
import {View} from 'react-native';
import {TitledSelector} from '../../components';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <TitledSelector
        placeholder={'Select your country ..'}
        zIndex={5000}
        title={'Country'}
      />
      <TitledSelector
        placeholder={'Select your city ..'}
        zIndex={4000}
        title={'City'}
      />
      <TitledSelector
        placeholder={'Select your area ..'}
        zIndex={3000}
        title={'Area'}
      />
    </View>
  );
};

export default Home;
