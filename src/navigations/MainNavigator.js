import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Assignment1, FlatList} from 'src/screens';
import routes from 'src/constants/routes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
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
        name={routes.FLATLIST_ASSIGNMENT}
        component={FlatList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
