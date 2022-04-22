import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];
import { AntDesign } from '@expo/vector-icons';

const BasketDishItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Your Items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => {
          return <BasketDishItem item={item} />;
        }}
      />
      <View style={styles.seprator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  seprator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  price: {
    marginLeft: 'auto',
  },
  name: {
    fontWeight: '600',
  },
});

export default Basket;
