import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BasketTotal, selectBasketItems } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketCart = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const totalCost = useSelector(BasketTotal);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { navigation.navigate('Basket'); }}
    >
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{items.length}</Text>
      </View>
      <Text style={styles.viewBasketText}>View Basket</Text>
      <Text style={styles.totalCostText}>${totalCost.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00CCBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  itemCountContainer: {
    backgroundColor: '#12a397',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  viewBasketText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  totalCostText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BasketCart;
