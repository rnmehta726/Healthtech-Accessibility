import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import {createStackNavigator } from '@react-navigation/stack';

import EditPage from '../EditPage';

type EditPageProps = StackScreenProps<RootStackParamList, 'EditPage'>;
const Stack = createStackNavigator<RootStackParamList>();



const mockNavigation = {
  navigate: jest.fn(),
  route: jest.fn(),
} as any;

const mockRoute = {
  params: {},
} as any;

const renderWithNavigation = (EditPage: JSX.Element) => {
    return render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EditPage" component={() => EditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

describe("Edit Page ", () => {

  test.only("should render title and saved phrases", () => {
    // arrange - setup your test

    // act
    // render the Edit Page component
    const {getByTestId} = renderWithNavigation(<EditPage route={mockRoute} navigation={mockNavigation}/>);

    // assert
    //validate the persona title
    expect(getByTestId('PersonaTitle')).toBe("");

  });
});
