import React, { FC } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const ListEmpty: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.emptyContainer}>
      <Icon name='music' size={60} color={isDarkMode ? Colors.lighter : Colors.darker} />
      <Text style={{ ...styles.emptyText, color: isDarkMode ? Colors.lighter : Colors.darker }}>
        No Results found
      </Text>
    </View>
  );
};

export default ListEmpty;
