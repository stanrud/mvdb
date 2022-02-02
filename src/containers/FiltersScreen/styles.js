import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500'
  },
  modalScroll: {
    flex: 1,
    padding: 10
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  }
});

export { styles };
