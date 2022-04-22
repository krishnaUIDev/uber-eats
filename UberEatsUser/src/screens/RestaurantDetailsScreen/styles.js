import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  subtitle: {
    color: '#525252',
    fontSize: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  menuTitle: {
    marginVertical: 15,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
