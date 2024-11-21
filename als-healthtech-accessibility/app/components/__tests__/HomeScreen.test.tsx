// app/components/__tests__/HomeScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

// Mock navigation and route props
const mockNavigation = {
  navigate: jest.fn(),
} as any;

const mockRoute = {
  params: {},
} as HomeScreenProps['route'];

const renderWithNavigation = (component: JSX.Element) => {
  return render(
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
};

describe.skip('HomeScreen', () => {
  it('renders without crashing yayy', () => {
    const { getByTestId } = renderWithNavigation(
      <HomeScreen navigation={mockNavigation} route={mockRoute} />
    );

    expect(getByTestId('HomeScreen')).toBeTruthy();
  });
});

