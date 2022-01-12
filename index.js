import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src/App';
import Test from './test';
import { appname } from './appconfigs';

AppRegistry.registerComponent(appname, () => App);
