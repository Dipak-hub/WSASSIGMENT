import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 300,
    height: 300,
  },
  registerLinkContainer: {
    flexDirection: 'row',
    padding: heightToDp(5),
  },
  registerButton: {
    width: widthToDp(40),
    height: heightToDp(5),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: widthToDp(5),
  },
});

export default style;
