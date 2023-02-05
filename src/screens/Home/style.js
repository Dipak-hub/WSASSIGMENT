import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';

const style = StyleSheet.create({
  container: {
    padding: widthToDp(5),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightToDp(10),
  },
  addProductButton: {
    width: widthToDp(80),
    height: heightToDp(10),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewProductButton: {
    width: widthToDp(80),
    height: heightToDp(10),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightToDp(5),
  },
  headerSection: {
    flexDirection: 'row',
  },
  logOutButton: {
    position: 'absolute',
    right: widthToDp(0),
  },
});

export default style;
