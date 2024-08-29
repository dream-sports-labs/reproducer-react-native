import { Button, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>SecondScreen</Text>
      <Button onPress={() => {navigation.goBack()}} title='Go Back'/>
    </View>
  );
};

export default DetailsScreen;

