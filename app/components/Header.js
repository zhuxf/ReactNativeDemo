import React, {
  View,
  Text,
  StyleSheet,
  Component,
  AppRegistry,
  PixelRatio
} from 'react-native';

class Header extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <View style={styles.flex}>
          <Text style={styles.fontWhiteBg}>网易</Text>
          <Text style={styles.fontRedBg}>新闻</Text>
          <Text style={{fontSize: 25}}>有态度。</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    },
    container: {
      alignItems: 'center',
      height: 50,
      marginLeft: 5,
      marginRight: 5,
      borderBottomWidth: 3/PixelRatio.get(),
      borderBottomColor: '#EF2D36',
    },
    fontRedBg: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#CD1D1C'
    },
    fontWhiteBg: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#CD1D1C',
    },
});

module.exports = Header;
