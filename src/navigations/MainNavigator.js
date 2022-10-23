import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import {Home, Assignment1, FlatList, Screen1, Screen2} from 'src/screens';
import routes from 'src/constants/routes';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        headerLeft: null,
      }}>
      <Stack.Screen
        name={routes.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.ASSIGNMENT_1}
        component={Assignment1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SCREEN_1}
        component={Screen1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SCREEN_2}
        component={Screen2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
