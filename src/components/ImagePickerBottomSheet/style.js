import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlignVertical: 'center',
  },
});

export default style;
