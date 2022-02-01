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
import { hideFilters, setGenre } from '../../store/actions/videos';
import { Chip } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Filter, Genre } from '../../common/types';
import { styles } from './styles';

const FiltersScreen: FC<{
  onRefresh: any,
  dispatch: Dispatch,
  genres: Genre[],
  filters: Filter,
  isFiltersShowing: boolean,
}> = ({
  onRefresh,
  dispatch,
  genres,
  filters,
  isFiltersShowing
}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const hideModal = () => {
      dispatch(hideFilters());
      onRefresh();
    }

    const setGenreFilter = (genreId: number) => dispatch(setGenre(genreId));

    return (
      <Modal visible={isFiltersShowing} onDismiss={hideModal} style={styles.modal}>
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: '500' }}>Genres</Text>
            <TouchableOpacity onPress={() => hideModal()}>
              <Icon name='chevron-down' size={30} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, padding: 10 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {genres?.map(genre => <Chip key={genre.id} style={{ margin: 2 }} icon={filters.genre_id.indexOf(genre.id) > -1 ? 'check' : 'plus'} selected={filters.genre_id.indexOf(genre.id) > -1} onPress={() => setGenreFilter(genre.id)}>{genre.name}</Chip>)}
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginVertical: 20 }}>
              <TouchableOpacity onPress={() => { setGenre([]) }} style={{ backgroundColor: 'yellow', flex: 1, alignItems: 'center', marginVertical: 10, padding: 15, borderRadius: 10 }}>
                <Text>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal} style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', marginVertical: 10, padding: 15, borderRadius: 10 }}>
                <Text style={{ color: '#FFF' }}>Apply</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  };

const mapStateToProps = (state: any) => ({
  genres: state.videos.genres,
  filters: state.videos.filters,
  isFiltersShowing: state.videos.isFiltersShowing
});

export default connect(mapStateToProps)(FiltersScreen);
