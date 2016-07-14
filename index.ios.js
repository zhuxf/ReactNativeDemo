/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  TabBarIOS,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

var Header = require('./app/components/Header')
import List from './app/components/List';
var ImportantNews = require('./app/components/ImportantNews');
import NextStep from './app/components/NextStep';
import LoadHtmlView from './app/components/LoadHtmlView';

class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: '',
          component: Box,
        }}
      />
    );
  }
}

class Box extends Component {

  constructor(props){
    super(props);
    this.state = {
      tab: 'message'
    };
  }

  select(tabName) {
    this.setState({
      tab: tabName
    });
  }

  goToHtmlView() {
    this.props.navigator.push({
      title: '百度',
      component: LoadHtmlView,

    });
  }

  onPress() {
    this.props.navigator.push({
      title: 'nextStep',
      component: NextStep,
      passProps: {
        text: 'kalsdj;alsdjqoweiuqpw;eon,.zxcn.z,x',
        title: 'haha',
      }
    });
  }


  render() {
    return (
      <TabBarIOS style={styles.flex} translucent={true}>
        <TabBarIOS.Item
          title="首页"
          icon={{uri: 'message'}}
          onPress={this.select.bind(this,'message')}
          selected={this.state.tab === 'message'}
          selectedIcon={{uri: 'message'}} >
            <ScrollView>
            <View style={styles.flex}>
            <Header></Header>
            <View style={styles.container}>
            <TouchableHighlight
              style={[styles.item,styles.center]}
              onPress={this.onPress.bind(this)}>
                <View >
                  <Text style={styles.font}>酒店</Text>
                </View>
              </TouchableHighlight>

              <View style={[styles.item,styles.lineLeftRight]}>
                <TouchableOpacity style={[styles.center ,styles.flex, styles.lineCenter]}
                  onPress={this.goToHtmlView.bind(this)} >
                  <View style={[styles.center ,styles.flex]}>
                    <Text style={styles.font}>海外酒店</Text>
                  </View>
                  </TouchableOpacity>
                <View style={[styles.center , styles.flex]}>
                  <Text style={styles.font}>特惠酒店</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={[styles.center , styles.flex, styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.center , styles.flex]}>
                  <Text style={styles.font}>客栈.公寓</Text>
                </View>
              </View>
            </View>
            <List title='宇航员在太空宣布“三体”获奖'></List>
            <List title='NASA发短片纪念火星征程50年'></List>
            <List title='男生连续做一周苦瓜吃吐女友'></List>
            <List title='女生遭鲨鱼袭击又下水救伙伴'></List>
            <ImportantNews news = {['1、刘慈恩《三体》获“雨果奖”为中国作家首次','2、京津协同发展定位明确：北京无经济中心表述','3、刘慈恩《三体》获“雨果奖”为中国作家首次。北京无经济中心表述','4、京津协同发展定位明确：北京无经济中心表述。刘慈恩《三体》获“雨果奖”为中国作家首次。京津协同发展定位明确：北京无经济中心表述。刘慈恩《三体》获“雨果奖”为中国作家首次。']}></ImportantNews>

            </View>
            </ScrollView>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="骷颅"
          icon={{uri: 'phone'}}
          onPress={this.select.bind(this,'phone')}
          selected={this.state.tab === 'phone'} >
          <View style={[styles.flex,styles.marginTop]}>
            <List title='宇航员在太空宣布“三体”获奖'></List>
            <List title='NASA发短片纪念火星征程50年'></List>
            <List title='男生连续做一周苦瓜吃吐女友'></List>
            <List title='女生遭鲨鱼袭击又下水救伙伴'></List>
            <ImportantNews news = {['1、刘慈恩《三体》获“雨果奖”为中国作家首次','2、京津协同发展定位明确：北京无经济中心表述','3、刘慈恩《三体》获“雨果奖”为中国作家首次。北京无经济中心表述','4、京津协同发展定位明确：北京无经济中心表述。刘慈恩《三体》获“雨果奖”为中国作家首次。京津协同发展定位明确：北京无经济中心表述。刘慈恩《三体》获“雨果奖”为中国作家首次。']}></ImportantNews>

          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="企鹅"
          icon={{uri: 'star'}}
          onPress={this.select.bind(this,'star')}
          selected={this.state.tab === 'star'} >

          <NextStep />

        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    padding:2,
    height:84,
    borderRadius:5,
    flexDirection: 'row',
    backgroundColor: '#FF0067',
  },
  item:{
  	height: 80,
  	flex: 1
  },
  flex:{
  	flex: 1
  },
  marginTop: {
    marginTop: 20
  },
  center:{
  	 justifyContent: 'center',
  	 alignItems: 'center'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  font:{
  	color: '#fff',
  	fontSize: 16,
  	fontWeight: 'bold',
  },
  message: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  message_title: {
    fontSize: 15,
    color: '#18B5FF',
    marginBottom: 5
  },
  list: {
    height: 30,
    fontSize: 15,
    marginLeft: 5,
    marginTop: 5
  },
  tabItem: {
    height: 40,
    width: 40
  },

});
// alert(AppRegistry.runApplication);
AppRegistry.registerComponent('Box', () => Navigation);
