import * as React from 'react';
import Badge from '../../src/components/Badge/Badge';
import { render } from '@testing-library/react-native';

const TEST_VALUE = 'TEST_VALUE';

describe('Badge component', () => {
  it('Renders Badge correctly by providing badge name', () => {
    const { queryByTestId } = render(<Badge name={TEST_VALUE} />);
    const badgeData = queryByTestId('badgeId');

    expect(badgeData).toHaveProperty('props');
    expect(badgeData.props).toHaveProperty('children');
    expect(badgeData.props.children).toHaveProperty('props');
    expect(badgeData.props.children.props).toHaveProperty('children');
    expect(badgeData.props.children.props.children).toMatch(TEST_VALUE);
  });

  it('Badge is not rendered due to missing name prop', () => {
    const { queryByTestId } = render(<Badge />);

    expect(queryByTestId('badgeId')).toBeNull();
  });
});
