import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5 
  },
  searchBar: {
    flex: 1,
    elevation: 0,
    height: 40
  },
  filtersIcon: {
    marginLeft: 5
  }
});

export { styles };
