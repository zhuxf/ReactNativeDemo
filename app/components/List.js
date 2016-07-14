/* jshint esversion: 6 */
import React ,{
  AppRegistry,
  StyleSheet,
  Component,
  PixelRatio,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class List extends Component {
  show() {
    alert(this.props.title);
  }
  render() {
    return(
      <View style={styles.listItem}>
        <TouchableOpacity
          onPress={this.show.bind(this)} >
          <Text style={styles.listFont}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  listFont: {
    fontSize: 16
  },
});

module.exports = List;
