import React, { FC } from 'react';
import { View, Text, useColorScheme, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Genre, Video } from '../../common/types';
import Badge from '../Badge';
import { styles } from './styles';

const ListItem: FC<{ item: Video; genres: Genre[] }> = ({
  item,
  genres,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  if (!item) {
    return null;
  }
  const genreName = genres?.find(i => i.id === item.genre_id)?.name;

  return (
    <View style={styles.card} testID='listItemId' key={item.id}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text
        numberOfLines={1}
        style={{
          ...styles.title,
          color: isDarkMode ? Colors.lighter : Colors.darker,
        }}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.artist}>
        {item.artist}
      </Text>
      {genreName ? (
        <View style={styles.badge}>
          <Badge name={genreName} />
        </View>
      ) : null}
    </View>
  );
};

export default ListItem;
