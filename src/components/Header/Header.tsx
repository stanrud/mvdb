import React, { FC, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getVideos, showFilters } from '../../store/actions/videos';
import { Searchbar } from 'react-native-paper';
import { Filter } from '../../common/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const Badge: FC<{ dispatch: Dispatch, filters: Filter }> = ({ dispatch, filters }) => {
  const [search, setSearch] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.lighter : Colors.darker;

  const submitSearch = (text: string) => {
    setSearch(text);
    dispatch(getVideos({ ...filters, search: text.trim().toLowerCase() }));
  };
  const clearSearch = () => {
    setSearch('');
    dispatch(getVideos({ ...filters, search: '' }));
  };

  const triggerFilters = () => dispatch(showFilters());

  return (
    <View
      testID='headerId'
      style={styles.headerContainer}
    >
      <Searchbar
        value={search}
        placeholder='Type artist or song name'
        inputStyle={{ color: textColor }}
        placeholderTextColor={textColor}
        iconColor={textColor}
        selectionColor={textColor}
        autoCorrect={false}
        onChangeText={submitSearch}
        style={{
          ...styles.searchBar,
          backgroundColor: isDarkMode ? Colors.dark : Colors.light
        }}
        onIconPress={clearSearch}
      />
      <TouchableOpacity style={styles.filtersIcon} onPress={triggerFilters}>
        <Icon name='filter-variant' size={30} color={isDarkMode ? Colors.lighter : Colors.darker} />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Badge);
