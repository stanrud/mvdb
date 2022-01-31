import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Badge: FC<{ name: string | undefined }> = ({ name }) => {
  if (!name) {
    return null;
  }

  return (
    <View style={styles.container} testID='badgeId'>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Badge;
