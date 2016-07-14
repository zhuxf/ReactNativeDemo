/* jshint esversion: 6 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

class LoadImg extends Component {
  constructor(props){
    super(props);
    var imgs = this.props.imgs;
    this.state = {
      imgs: imgs,
      count: 0
    };
  }

  goNext() {
    var count = this.state.count;
    count ++ ;
    if(count < this.props.imgs.length){
      this.setState({
        count: count
      });
    }
  }

  goPreview() {
    var count = this.state.count;
    count -- ;
    if(count >= 0){
      this.setState({
        count: count
      });
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.image}>
          <Image style={styles.img}
            source={{uri: this.state.imgs[this.state.count]}}
            resizeMode="contain" />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={this.goPreview.bind(this)}>
          <View style={[styles.btn,styles.marginRight]}>
            <Text >上一张</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goNext.bind(this)}>
          <View style={[styles.btn]}>
            <Text >下一张</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  flex: {
    flex: 1,
    alignItems: 'center'
  },

  image: {
    height: 200,
    width: 240,
    borderWidth: 1/PixelRatio.get(),
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',

    marginTop: 5
  },

  btns: {
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },

  img: {
    height: 200,
    width: 240
  },

  btn: {
    width: 70,
    height: 40,
    borderWidth: 1/PixelRatio.get(),
    borderColor: '#0089FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  marginRight: {
    marginRight: 20
  },

});

export default LoadImg;
