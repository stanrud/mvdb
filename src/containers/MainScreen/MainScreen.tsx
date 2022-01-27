import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem, Text } from 'react-native';
import axios from 'axios';

const BASE_URL: string =
  'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

interface Video {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Response {
  genres: Genre[];
  videos: Video[];
}

const MainScreen: FC = () => {
  const [data, setData] = useState<Response>({ videos: [], genres: [] });

  useEffect(() => {
    axios.get<Response>(BASE_URL).then(response => setData(response.data));
  }, []);

  const renderItem: ListRenderItem<Video> = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data.videos}
      renderItem={renderItem}
      keyExtractor={(item): string => item.id.toString()}
    />
  );
};

export default MainScreen;
