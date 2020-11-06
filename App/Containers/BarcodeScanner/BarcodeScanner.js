import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../Themes';
import styles from './BarcodeScannerStyle';
import {RNCamera} from 'react-native-camera';
export default class BarcodeScanner extends Component {
  scanBarcode = () => {};
  barcodeScanned = barcode => {
    if (barcode) {
      this.props.navigation.navigate('ProductDetails', {barcode: barcode.data});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          onBarCodeRead={barcode => this.barcodeScanned(barcode)}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}> Scan the barcode here</Text>
        </View>
      </View>
    );
  }
}
