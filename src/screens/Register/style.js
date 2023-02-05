import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  registerButton: {
    width: widthToDp(40),
    height: heightToDp(5),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: widthToDp(5),
  },
  ImageStyle: {
    width: 300,
    height: 300,
    margin: widthToDp(10),
  },
});

export default style;
