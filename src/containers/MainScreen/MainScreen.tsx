import React, { FC, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getVideos } from '../../store/actions/videos';
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
  isFiltersShowing
}) => {
    useEffect(() => {
      onRefresh();
    }, []);

    const onRefresh = () => {
      dispatch(getVideos(filters));
    };

    return (
      <View style={styles.container}>
        <Header filters={filters} />
        <FlatList
          key={2}
          numColumns={2}
          data={videos}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => <ListItem item={item} genres={genres} />}
          keyExtractor={(item): string => item.id.toString()}
          onRefresh={onRefresh}
          refreshing={isGetting}
          ListEmptyComponent={<ListEmpty />}
        />
        <FiltersScreen
          genres={genres}
          filters={filters}
          onRefresh={onRefresh}
          visible={isFiltersShowing}
        />
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
