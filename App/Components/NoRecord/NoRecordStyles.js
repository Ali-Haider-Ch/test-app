import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  noRecordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rescan: {
    marginVertical: 20,
    backgroundColor: colors.background,
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
