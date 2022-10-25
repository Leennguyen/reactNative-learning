import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import BannerComponent from './Components/BannerComponent';
import TopProduct from './Components/TopProduct';
import BotProduct from './Components/BotProduct';
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  content1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
const myApp = () => {
  return (
    <ScrollView>
      <BannerComponent />
      <ScrollView horizontal={true} style={styles.content}>
        <TopProduct />
        <TopProduct />
        <TopProduct />
        <TopProduct />
      </ScrollView>
      <View style={styles.content1}>
        <BotProduct />
        <BotProduct />
        <BotProduct />
        <BotProduct />
        <BotProduct />
      </View>
    </ScrollView>
  );
};
export default myApp;
