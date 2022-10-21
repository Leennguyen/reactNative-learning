/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
const BannerComponent = () => {
  const styles = StyleSheet.create({
    contain: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      marginVertical: 20,
      width: 370,
      height: 150,
      resizeMode: 'cover',
    },
  });
  return (
    <View style={styles.contain}>
      <Image
        source={{
          uri: 'https://www.iddo.org/sites/default/files/styles/slideshow/public/slideshow/2018-04/pexels-photo-415825_blue%20white%20pills.jpg?h=c5515ee6&itok=-tfLiODB',
        }}
        style={styles.img}
      />
    </View>
  );
};
export default BannerComponent;
