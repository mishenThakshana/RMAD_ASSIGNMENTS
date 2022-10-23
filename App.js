import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigations/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
