import React, { Component, StyleSheet, Text, View, Image } from 'react-native';

const assets = {
  'thitkhotau': require('../../../assets/food/thitkhotau.jpeg')
};
export default class SignIn extends Component {
  render() {
    const { actions } = this.props;

    return (
      <View style={styles.container}>
        <Text onPress={actions.routes.tabBar.tab1()}>Click me to Sign In</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});