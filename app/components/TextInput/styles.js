import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $btnBackgrdColorBase: '$white',
  $btnBackgrdColorModifier: 0.1,
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '$white',
    height: INPUT_HEIGHT,
    justifyContent: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputtext',
  },
});
