import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import BarcodeScanner from '../Containers/BarcodeScanner/BarcodeScanner';
import ProductDetails from '../Containers/ProductDetails/ProductDetails';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    BarcodeScanner: {screen: BarcodeScanner},
    ProductDetails: {screen: ProductDetails},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'BarcodeScanner',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
