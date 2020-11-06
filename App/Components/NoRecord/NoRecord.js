import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './NoRecordStyles';
export default class NoRecord extends Component {
  render() {
    return (
      <View style={styles.noRecordContainer}>
        <Text>No record found.</Text>
        <TouchableOpacity
          style={styles.rescan}
          onPress={() => this.props.navigation.goBack()}>
          <Text>Rescan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
