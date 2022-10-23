import {SafeAreaView} from 'react-native';
import {RouteBtn, ScreenTitle} from 'src/components';
import routes from 'src/constants/routes';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScreenTitle title="RMAD ASSIGNMENTS" />
      <RouteBtn
        handler={() => navigation.navigate(routes.ASSIGNMENT_1)}
        label="Assignment 1"
      />
      <RouteBtn
        handler={() => navigation.navigate(routes.FLATLIST_ASSIGNMENT)}
        label="FlatList Assignment"
      />
      <RouteBtn
        handler={() => navigation.navigate(routes.SCREEN_1)}
        label="Stack Nav Assignment"
      />
    </SafeAreaView>
  );
};

export default Home;
