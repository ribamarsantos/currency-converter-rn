import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '$white',
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300',
  },
});

export default styles;
