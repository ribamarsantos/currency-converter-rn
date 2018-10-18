import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $orange: '$primaryOrange',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };
  handleThemePress = (color) => {
    console.log(color);
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          checkmark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          checkmark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          checkmark={false}
          selected
          iconBackground={styles.$orange}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
