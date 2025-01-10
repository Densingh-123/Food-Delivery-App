import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket, selectBasketItems, BasketTotal } from '../features/basketSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const BasketScreen = () => {
  const items = useSelector(selectBasketItems);
  const subtotal = useSelector(BasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const basketItems = items.reduce((result, item) => {
      (result[item.name] = result[item.name] || []).push(item);
      return result;
    }, {});
    setGroupedItems(basketItems);
  }, [items]);

  const deliveryCost = Object.keys(groupedItems).length > 0 ? 5.99 : 0;

  return (
    <>
      <SafeAreaView>
        {/* Header area */}
        <View className='flex-row justify-between p-5 items-center bg-white rounded-t-3xl border-b border-[#00CCBB]'>
          <Icon2 name='basket-loaded' size={25} color='#00CCBB' />
          <Text className='text-2xl font-bold'>Basket</Text>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Icon name='closecircle' size={25} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='bg-white my-5 flex-row items-center justify-between px-4 py-4'>
          <View className='flex-row items-center space-x-3'>
            <Image source={{ uri: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" }} className="h-9 w-9 rounded-full" />
            <Text className='text-lg'>Deliver in 50-70 min</Text>
          </View>
          <Text className='text-lg text-[#00CCBB]'>Change</Text>
        </View>

        {/* Basket items */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='pb-96'>
            {
              Object.entries(groupedItems).map(([key, value]) => (
                <View className='flex-row justify-between items-center px-4 py-4 border-b border-gray-200 bg-white' key={key}>
                  <View className='flex-row justify-between items-center space-x-3'>
                    <Text className='text-[#00CCBB] font-bold'>{value.length} x </Text>
                    <Image source={{ uri: value[0].img }} className='h-12 w-12 rounded-full' />
                    <Text>{value[0].name}</Text>
                  </View>
                  <View className='flex-row justify-between items-center space-x-3'>
                    <Text>$ {(value[0].price * value.length).toFixed(2)}</Text>
                    <TouchableOpacity onPress={() => { dispatch(removeFromBasket({ id: value[0].id })) }}>
                      <Text className='text-[#00CCBB] font-semibold'>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Order summary and payment */}
      <View className='absolute left-0 right-0 bottom-0 bg-white'>
        <View>
          <View className='flex-row justify-between px-5 pt-6'>
            <Text className='text-gray-500'>Subtotal</Text>
            <Text className='text-gray-500'>$ {subtotal.toFixed(2)}</Text>
          </View>
          <View className='flex-row justify-between px-5 pt-4'>
            <Text className='text-gray-500'>Delivery fees</Text>
            <Text className='text-gray-500'>$ {deliveryCost.toFixed(2)}</Text>
          </View>
          <View className='flex-row justify-between px-5 pt-4'>
            <Text className='font-bold'>Order Total</Text>
            <Text className='font-bold'>$ {(subtotal + deliveryCost).toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity className='mx-4 my-5 p-3 rounded-lg bg-[#00CCBB]' onPress={() => { navigation.navigate("OrderPlacing") }}>
          <Text className='text-center text-lg text-white font-semibold'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketScreen;
