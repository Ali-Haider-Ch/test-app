import './App/Config/ReactotronConfig';
import {AppRegistry} from 'react-native';
import App from './App/Containers/App';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

AppRegistry.registerComponent('couponapp', () => App);
