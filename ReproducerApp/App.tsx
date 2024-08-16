import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Margin and Padding Example, Ideally margin of 100 should be applied but only 20 is getting applied</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: 'lightblue',
    // Individual margin
    marginLeft: 20,
    marginRight: 20,
    // Aggregate margin (should override marginLeft & marginRight)
    marginHorizontal: 100,
    // Individual padding
    paddingRight: 10,
    paddingLeft: 10,
    // Aggregate padding (should override paddingLeft & paddingRight)
    paddingHorizontal: 100,
  },
});

export default App;
