import { StyleSheet, FlatList, View } from 'react-native';
import RestarantItem from '../../components/RestaruantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <RestarantItem restaurant={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
