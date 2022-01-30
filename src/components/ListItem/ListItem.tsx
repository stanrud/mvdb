import React, { FC } from 'react';
import { View, Text, useColorScheme, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Badge from '../Badge';
import { styles } from './styles';

interface Video {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

const ListItem: FC<{ item: Video; genre: string | undefined }> = ({
  item,
  genre,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  if (!item) {
    return null;
  }

  return (
    <View style={styles.card}>
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
      {genre ? (
        <View style={styles.badge}>
          <Badge name={genre} />
        </View>
      ) : null}
    </View>
  );
};

export default ListItem;
