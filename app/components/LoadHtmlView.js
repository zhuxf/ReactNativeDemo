/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
  Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var appKey = '4263807830';
var callback = 'http://127.0.0.1:3000';
var url = 'http://api.weibo.com/oauth2/authorsize?client_id=' +
  appKey + '&redirect_uri=' + callback ;

export default class LoadHtmlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
    };
  }

  // navChange(state) {
  //     var _that = this ;
  //     if(state.url.indexOf(callback + "/?code=")){
  //       var result = state.url.split('?code=')[1];
  //       this.setState({
  //         code = result
  //       });
  //     }
  // }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          contentInset={{left:-10,top:-28}}
          scrollEnabled={false}
          url="http://baidu.com"
          injectedJavaScript="alert('欢迎使用RN')"
          style={{width:width , height: height , flex: 1}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
  },
});
