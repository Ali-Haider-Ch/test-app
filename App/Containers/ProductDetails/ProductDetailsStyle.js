import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.background,
    padding: 5,
    borderRadius: 50,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  category: {
    color: Colors.text,
    fontSize: 13,
    backgroundColor: Colors.background,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 5,
  },
  descrption: {
    fontSize: 16,
    color: Colors.text,
  },
});
