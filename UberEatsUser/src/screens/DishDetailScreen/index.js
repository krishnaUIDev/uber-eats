import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
const dish = restaurants[0].dishes[0];
import { AntDesign } from '@expo/vector-icons';

const DishDetailScreen = () => {
  const [count, setCount] = useState(1);

  const onMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onPlus = () => {
    setCount(count + 1);
  };

  const getTotal = () => {
    return (count * dish.price).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seprator} />
      <View style={styles.row}>
        <AntDesign
          name="minuscircle"
          size={60}
          color={'black'}
          onPress={onMinus}
        />
        <Text style={styles.count}>{count}</Text>
        <AntDesign
          name="pluscircle"
          size={60}
          color={'black'}
          onPress={onPlus}
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {count} to Basket &#8226; (${getTotal()})
        </Text>
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
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  count: {
    fontSize: 25,
    marginHorizontal: 20,
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
});

export default DishDetailScreen;
