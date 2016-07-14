/* jshint esversion: 6 */
import React ,{
  AppRegistry,
  StyleSheet,
  Component,
  PixelRatio,
  View,
  Text,
  TextInput
} from 'react-native';

import LoadImg from './LoadImg';
var onePT = 1/PixelRatio.get();
var imgs = ['http://www.ituring.com.cn/bookcover/1442.796.jpg',
            'http://www.ituring.com.cn/bookcover/1668.553.jpg',
            'http://www.ituring.com.cn/bookcover/1521.260.jpg'];

class NextStep extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      value: ''
    };

  }

 getValue(text) {
   var value = text ;
   this.setState({
     show: true ,
     value: value,
   });
 }

 hide(val) {
   this.setState({
     show: false,
     value: val,
   });
 }

  render() {
    return (
      <View style={styles.flex,styles.flexDirection_column}>
      <View style={[styles.topStatus, styles.flexDirection]}>
        <View style={styles.flex}>
          <TextInput style={styles.input}
          autoFocus ="true"
          returnKeyType="search"
          placeholder = "请输入关键字"
          onEndEditing={() => this.hide.bind(this,this.props.value)}
          onChangeText={(text) => this.getValue(text)}
          />
        </View>
        <View style={styles.btn}>
          <Text style={styles.search} onPress={this.hide.bind(this,this.props.value)}>搜索</Text>
        </View>
      </View>

        {this.state.show ?
         <View style={styles.result}>
           <Text onPress={this.hide.bind(this,this.props.value + '庄')}
             style={styles.item} numberOfLines={1}>
             {this.state.value}庄
           </Text>
           <Text onPress={this.hide.bind(this,this.props.value + '园街')}
             style={styles.item} numberOfLines={1}>
             {this.state.value}园街
           </Text>
           <Text onPress={this.hide.bind(this,'80' + this.props.value + '综合商店')}
             style={styles.item} numberOfLines={1}>
             80{this.state.value}综合商店
           </Text>
         </View>
         :
         <LoadImg
           imgs={imgs}
           />
       }

      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexDirection_column: {
    flexDirection: 'column',
  },
  topStatus: {
    marginTop: 70,
  },
  input: {
    height: 45,
    borderWidth: 1/PixelRatio.get(),
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  result: {
    marginTop: onePT,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: onePT,
    borderBottomColor: '#ccc',
    borderLeftWidth: onePT,
    borderLeftColor: '#ccc',

  },
  item: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: onePT,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  },

});

module.exports = NextStep;
