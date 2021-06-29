import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// npx react-native link

const App = () => {
  return (
    <View>
      <Text>Appp hai apni </Text>
      <Text>Appp hai apni </Text>
      <Text>Appp hai apni </Text>
      <Text>Appp hai apni </Text>
      <Text>Appp hai apni </Text>
      <Text style={styles.header}>Appp hai apni </Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Montserrat-Bold',
  },
});
