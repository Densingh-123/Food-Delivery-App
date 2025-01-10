import React from 'react'
import { Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Menu from '../components/ResturentMenu/Menu';
import BasketCart from '../components/ResturentMenu/BasketCart';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  
  const { img, name, price, cat, location, des } = params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Clicked Food details */}
        <View style={{ backgroundColor: 'white' }}>
          {/* Food image with back button */}
          <Image 
            source={{ uri: img }} 
            style={{ height: 250, width: '100%', resizeMode: 'cover' }} 
          />
          <TouchableOpacity 
            style={{ position: 'absolute', left: 16, top: 32, backgroundColor: 'white', borderRadius: 50, padding: 8 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="md-arrow-back-sharp" size={25} color="#00CCBB" />
          </TouchableOpacity>

          {/* Food description */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#333' }}>{name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon2 name="star-rate" size={20} color="#00CCBB" />
                <Text style={{ fontSize: 18, color: '#00CCBB' }}>{price}</Text>
                <Text style={{ fontSize: 18, color: '#777' }}>{cat}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon2 name="location-on" size={20} color="#00CCBB" />
                <Text style={{ fontSize: 18, color: '#777' }}>nearby</Text>
                <Text style={{ fontSize: 18, color: '#777' }}>{location}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, color: '#777', marginTop: 8 }}>{des}</Text>
          </View>

          {/* Allergy info */}
          <TouchableOpacity 
            style={{ marginTop: 16, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#ddd' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon3 name="questioncircleo" size={18} color="#00CCBB" />
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#333' }}>Have a food allergy?</Text>
            </View>
            <Icon3 name="right" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        {/* Food Menu */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 16, marginTop: 24 }}>Menu</Text>
        <Menu category={cat} />
      </ScrollView>

      {/* View Basket Button */}
      <View style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
        <BasketCart />
      </View>
    </SafeAreaView>
  );
}

export default RestaurantScreen;
