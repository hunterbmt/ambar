import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

const assets = {
  'thitkhotau': require('../../../assets/food/thitkhotau.jpg'),
  'suonram': require('../../../assets/food/suon_ram.jpg'),
  'canhgachien': require('../../../assets/food/canhgachien.jpg')
};

export default Master = (backgroundColor = '#F5FCFF') => class extends Component {
  render() {
    const { actions } = this.props;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.foodContainer}>
            <TouchableHighlight onPress={actions.routes.detail()}>
              <Image style={styles.foodCover} source={assets.thitkhotau}/>
            </TouchableHighlight>
            <View style={styles.foodInfo}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#f2f2f2', fontSize: 16, fontWeight: '500'}}>
                  Thịt Kho Trứng
                </Text>
              </View>
              <Text style={{color: '#f2f2f2'}}>
                6 người đã đặt món
              </Text>
            </View>
          </View>
          <View style={styles.foodContainer}>
            <TouchableHighlight onPress={actions.routes.detail()}>
              <Image style={styles.foodCover} source={assets.suonram}/>
            </TouchableHighlight>
            <View style={styles.foodInfo}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#f2f2f2', fontSize: 16, fontWeight: '500'}}>
                  Sườn ram chua ngọt
                </Text>
              </View>
              <Text style={{color: '#f2f2f2'}}>
                20 người đã đặt món
              </Text>
            </View>
          </View>
          <View style={styles.foodContainer}>
            <TouchableHighlight onPress={actions.routes.detail()}>
              <Image style={styles.foodCover} source={assets.canhgachien}/>
            </TouchableHighlight>
            <View style={styles.foodInfo}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#f2f2f2', fontSize: 16, fontWeight: '500'}}>
                  Cánh gà chiên nước mắt
                </Text>
              </View>
              <Text style={{color: '#f2f2f2'}}>
                Trở thành người đầu tiên đặt món
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  foodContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 3,
    overflow: 'hidden',
    position: 'relative'
  },
  foodCover: {
    flex: 1,
    height: 250
  },
  foodInfo: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent'
  },
  text: {
    color: '#FFF',
  },
});
