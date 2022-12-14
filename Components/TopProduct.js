/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
const styles = StyleSheet.create({
  proCard: {
    margin: 10,
    width: 160,
    height: 250,
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 10,
  },
  containProImg: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  proImg: {
    width: 120,
    height: 150,
    resizeMode: 'cover',
    padding: 10,
  },
  text: {
    paddingHorizontal: 5,
  },
});
const TopProduct = () => {
  return (
      <View style={styles.proCard}>
        <View style={styles.containProImg}>
          <Image
          source={{
            uri: 'https://www.zoomnews.in/uploads_2019/newses/ajb_132753060_sm.webp',
          }}
          style={styles.proImg}
        />
        </View>

        <View style={styles.text}>
          <Text>Bánh mì bơ sữa, đặc biệt thơm ngon</Text>
          <Text>$2 ngàn 3 ngàn 1 ổ</Text>
        </View>
      </View>
  );
};
export default TopProduct;
