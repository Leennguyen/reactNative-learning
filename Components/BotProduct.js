/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
const styles = StyleSheet.create({
  proCardBot: {
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
    width: 130,
    height: 160,
    resizeMode: 'cover',
    padding: 10,
  },
  text: {
    paddingHorizontal: 5,
  },
});
const BotProduct = () => {
  return (
    <View style={styles.proCardBot}>
      <View style={styles.containProImg}>
        <Image
          source={{
            uri: 'https://pharmafactz.com/wp-content/uploads/2020/07/difference-between-a-drug-and-a-medicine.jpg',
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
export default BotProduct;
