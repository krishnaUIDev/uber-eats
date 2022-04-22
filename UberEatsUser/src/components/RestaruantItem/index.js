import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function RestarantItem({ restaurant }) {
  const { image, deliveryFee, rating, name, minDeliveryTime, maxDeliveryTime } =
    restaurant;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  subtitle: {
    color: 'grey',
  },
});
