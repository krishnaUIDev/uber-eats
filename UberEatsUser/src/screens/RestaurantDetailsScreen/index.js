import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
const restaurant = restaurants[0];
import Header from './Header';
import styles from './styles';

export default function RestarantDetailsScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </View>
    </View>
  );
}
