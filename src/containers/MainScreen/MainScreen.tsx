import React, { FC, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  useColorScheme,
} from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getVideos, hideFilters } from '../../store/actions/videos';
import { Video, Filter, Genre } from '../../common/types';
import ListItem from '../../components/ListItem';
import ListEmpty from '../../components/ListEmpty';
import { styles } from './styles';
import Header from '../../components/Header';
import FiltersScreen from '../FiltersScreen/FiltersScreen';

const MainScreen: FC<{
  dispatch: Dispatch,
  videos: Video[],
  genres: Genre[],
  filters: Filter,
  isGetting: boolean,
  isFiltersShowing: boolean,
}> = ({
  dispatch,
  videos,
  genres,
  filters,
  isGetting,
}) => {
    const [visible, setVisible] = useState(false);
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
      onRefresh();
    }, []);

    const onRefresh = () => {
      dispatch(getVideos(filters));
    };

    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          key={2}
          numColumns={2}
          data={videos}
          // style={styles.container}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => <ListItem item={item} genres={genres} />}
          keyExtractor={(item): string => item.id.toString()}
          onRefresh={onRefresh}
          refreshing={isGetting}
          testID='mainScreenId'
          ListEmptyComponent={<ListEmpty />}
        />
        <FiltersScreen onRefresh={onRefresh} />
      </View>
    );
  };

const mapStateToProps = (state: any) => ({
  videos: state.videos.videos,
  genres: state.videos.genres,
  filters: state.videos.filters,
  isGetting: state.videos.isGetting,
  isFiltersShowing: state.videos.isFiltersShowing
});

export default connect(mapStateToProps)(MainScreen);
