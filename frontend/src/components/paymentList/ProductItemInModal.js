/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../common/AppText';
import {Thumbnail} from 'native-base';

const ProductItemInModal = ({product}) => {
  return (
    <>
      <View style={styles.wrap}>
        <Thumbnail
          square
          style={styles.prodImage}
          source={{
            uri: 'data:image/png;base64,' + product.item.prodImage,
          }}
        />
        <View style={styles.prodInfo}>
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{...styles.font12, ...styles.prodName}}>
            {product.item.prodName}
          </AppText>
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{...styles.font12, ...styles.prodPrice}}>
            {Number(product.item.prodPrice).toLocaleString()}원 ·{' '}
            {product.item.qty}개
          </AppText>
        </View>
      </View>
    </>
  );
};

export default ProductItemInModal;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginHorizontal: 9,
    paddingHorizontal: 8,
    marginVertical: 2,
    borderBottomColor: 'rgb(144,144,144)',
    borderBottomWidth: 0.5,
  },
  font12: {
    fontSize: 12,
  },
  prodImage: {
    resizeMode: 'cover',
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  prodInfo: {
    justifyContent: 'center',
    height: 50,
    marginLeft: 10,
  },
  prodName: {
    // height: 20,
  },
  prodPrice: {
    marginTop: 5,
    fontWeight: '700',
  },
});
