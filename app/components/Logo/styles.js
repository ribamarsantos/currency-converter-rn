import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerWidth: imageWidth,
  $largeImageWidth: imageWidth / 2,
  $smallContainerWidth: imageWidth / 4,
  $smallImageWidth: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerWidth',
    height: '$largeContainerWidth',
  },
  image: {
    width: '$largeImageWidth',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
