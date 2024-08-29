import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import DiscoverScreen from './DiscoverScreen';

const Tab = createMaterialTopTabNavigator();

function IndexScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}
export default IndexScreen;