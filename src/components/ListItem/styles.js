import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: SCREEN_WIDTH / 2,
    margin: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 2,
  },
  artist: {
    fontSize: 12,
    fontWeight: '400',
    color: '#555555',
  },
  badge: {
    top: 5,
    right: 5,
    position: 'absolute',
  },
});

export { styles };
