import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, ListRenderItem } from 'react-native';
import { Video, Response } from '../../common/types';
import ListItem from '../../components/ListItem';
import { styles } from './styles';

const BASE_URL: string =
  'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

const MainScreen: FC = () => {
  const [data, setData] = useState<Response>({} as Response);
  const [loading, setLoading] = useState<true | false>(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    setLoading(true);
    axios
      .get<Response>(BASE_URL)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  const renderItem: ListRenderItem<Video> = ({ item }) => {
    const genre = data.genres?.find(i => i.id === item.genre_id)?.name;

    return <ListItem item={item} genre={genre} />;
  };

  return (
    <FlatList
      key={2}
      numColumns={2}
      data={data.videos}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={(item): string => item.id.toString()}
      onRefresh={onRefresh}
      refreshing={loading}
      testID='mainScreenId'
    />
  );
};

export default MainScreen;
