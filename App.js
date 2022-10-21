import React from 'react';
import { ScrollView, View } from 'react-native';
import BannerComponent from './Components/BannerComponent';
import TopProduct from './Components/TopProduct';
const myApp = () => {
  return (
    <ScrollView> 
      <BannerComponent />
      <TopProduct />
      <TopProduct />
      <TopProduct />
      <TopProduct />
    </ScrollView>
  );
};
export default myApp;
