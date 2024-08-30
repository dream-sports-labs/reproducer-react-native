import { FlatList, Pressable, SafeAreaView, StyleSheet,  Text,  View } from 'react-native';
import React, { useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';

const largeArray = Array.from({ length: 2000 }, (_, i) => i);

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = useCallback(({ item, index }: { item: number; index: number }) => (
    <Pressable onPress={() => {navigation.navigate('DetailsScreen', {})}}>
    <View style={styles.cardStyle}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
    </Pressable>
  ), []);

  return (
    <SafeAreaView>
    <View style={styles.container}>
      {(
        <FlatList
          data={largeArray}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
    // height: height
  },
  cardStyle:{margin: 20, width: 200, borderWidth: 1, backgroundColor: 'orange', height: 100, justifyContent: 'center', alignItems: 'center'},
  itemText: {textAlign: 'center', fontSize: 30}
});
