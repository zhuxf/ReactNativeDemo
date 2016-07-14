
import React , {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Text,
  PixelRatio
} from 'react-native';

class ImportantNews extends Component {

  show(title) {
    alert(title);
  }
  render() {
    var news = [] ;
    for (var i in this.props.news) {
      var text = (
        <Text
        onPress={this.show.bind(this , this.props.news[i])}
        numberOfLines={2}
        style={styles.news_item}>{this.props.news[i]}</Text>
      );
      news.push(text);
    }
    return(
      <View style={styles.container}>
        {news}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news_item: {
    height: 35,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0015A9',
    justifyContent: 'center',
  },
  container: {
    marginTop: 10,
    flex: 1,
  }
});

module.exports = ImportantNews;
