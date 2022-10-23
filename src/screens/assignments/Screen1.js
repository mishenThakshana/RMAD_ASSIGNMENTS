import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Input, Btn, ScreenTitle} from 'src/components';
import routes from 'src/constants/routes';

const Screen1 = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScreenTitle title="Login" />
      <Input handler={setUsername} placeholder="Username" value={username} />
      <Input handler={setEmail} placeholder="Email" value={email} />
      <Btn
        handler={() => navigation.navigate(routes.SCREEN_2, {username, email})}
        label="Login"
      />
    </SafeAreaView>
  );
};

export default Screen1;
