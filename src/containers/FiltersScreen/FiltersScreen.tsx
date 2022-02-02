import React, { FC } from 'react';
import {
  Text,
  View,
  Modal,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  setGenre,
  removeGenre,
  hideFilters,
} from '../../store/actions/videos';
import { Chip } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Filter, Genre } from '../../common/types';
import { styles } from './styles';

const FiltersScreen: FC<{
  onRefresh: () => void,
  dispatch: Dispatch,
  genres: Genre[],
  filters: Filter,
  visible: boolean,
}> = ({
  onRefresh,
  dispatch,
  genres,
  filters,
  visible
}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const hideModal = () => {
      dispatch(hideFilters());
      onRefresh();
    }

    const setGenreFilter = (genreId: number) => dispatch(setGenre(genreId));
    
    const removeGenreFilter = () => dispatch(removeGenre());

    const renderGenres = () => {
      const selected = (genreId: number): boolean => filters.genre_id.indexOf(genreId) > -1;
    
      return(
        <View style={styles.genres}>
          {genres?.map(genre =>
            <Chip
              key={genre.id}
              style={{ margin: 2, backgroundColor: selected(genre.id) ? '#00587A' : Colors.light }}
              icon={selected(genre.id) ? 'check' : 'plus'}
              selected={selected(genre.id)}
              onPress={() => setGenreFilter(genre.id)}
            >
              <Text style={{ color: selected(genre.id) ? Colors.light : Colors.dark }}>
                {genre.name}
              </Text>
            </Chip>
          )}
        </View>
      )
    };

    return (
      <Modal visible={visible} onDismiss={hideModal} style={styles.modal}>
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, }}>
          <View style={styles.modalHeader}>
            <Text style={{ ...styles.headerText, color: isDarkMode ? Colors.lighter : Colors.darker }}>Genres</Text>
            <TouchableOpacity onPress={() => hideModal()}>
              <Icon name='chevron-down' size={30} color={isDarkMode ? Colors.lighter : Colors.darker} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalScroll}>
            {renderGenres()}
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => removeGenreFilter()} style={{ ...styles.button, backgroundColor: '#84A9AC' }}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal} style={{ ...styles.button, backgroundColor: '#00587A' }}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  };

export default connect()(FiltersScreen);
