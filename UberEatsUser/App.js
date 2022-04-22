import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestarantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrdersScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <DishDetailScreen /> */}
      {/* <Basket /> */}
      {/* <RestarantDetailsScreen /> */}
      <OrderScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
});
