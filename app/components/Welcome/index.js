import React, { Component, StyleSheet, Text, View } from 'react-native';

export default class Detail extends Component {
  render() {
    const { actions } = this.props;

    return (
      <View style={styles.container}>
        <Text onPress={actions.pop}>Go back!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
});
