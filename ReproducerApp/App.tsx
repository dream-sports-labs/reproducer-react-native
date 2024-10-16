import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowOptions(true);
                setActiveCard(index);
              }}
            >
              <Text style={styles.buttonText}>Click me</Text>
            </TouchableOpacity>
            {showOptions && activeCard === index && (
              <View style={styles.optionsContainer}></View>
            )}
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    height: 100,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 8,
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    backgroundColor: 'yellow',
    borderRadius: 8,
    height: 80,
    width: '50%',
    position: 'absolute',
    top: 80,
    zIndex: 1
  },
  separator: {
    height: 20,
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
});
