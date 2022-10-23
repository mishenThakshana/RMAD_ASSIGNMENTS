import {SafeAreaView} from 'react-native';
import RouteBtn from 'src/components/RouteBtn';
import ScreenTitle from 'src/components/ScreenTitle';
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
    </SafeAreaView>
  );
};

export default Home;
