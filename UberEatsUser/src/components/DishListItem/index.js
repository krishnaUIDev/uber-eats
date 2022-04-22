import { View, Text, StyleSheet, Image } from 'react-native';

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
  },
  description: {
    color: 'gray',
    marginVertical: 5,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
