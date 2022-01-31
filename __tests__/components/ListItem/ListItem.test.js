import * as React from 'react';
import ListItem from '../../../src/components/ListItem/ListItem';
import { render } from '@testing-library/react-native';

const videoItem = {
  id: 123,
  artist: 'string',
  title: 'string',
  release_year: 1998,
  genre_id: 1234,
  image_url: 'string',
};

describe('ListItem component', () => {
  it('Renders ListItem correctly', () => {
    const { queryByTestId } = render(
      <ListItem item={videoItem} genre='test-genre' />,
    );
    const listItemData = queryByTestId('listItemId');

    expect(listItemData).toHaveProperty('props');
    expect(listItemData.props).toHaveProperty('children');
    expect(listItemData.props.children).toHaveLength(4);
  });

  it('Badge is not rendered due to missing item prop', () => {
    const { queryByTestId } = render(<ListItem />);

    expect(queryByTestId('listItemId')).toBeNull();
  });
});
