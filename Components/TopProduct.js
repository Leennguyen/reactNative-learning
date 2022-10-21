/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
const TopProduct = () => {
  const styles = StyleSheet.create({
    proCard: {
      marginHorizontal: 10,
      width: 160,
      height: 250,
      borderColor: 'lightblue',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'wrap',
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
  return (
      <View style={styles.proCard}>
        <View style={styles.containProImg}>
          <Image
          source={{
            uri: 'https://m.economictimes.com/thumb/msid-94270374,width-1200,height-900,resizemode-4,imgsize-34152/overuse-of-medicine.jpg',
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
