import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { data } from '../../data/Data';
import MenuItemCard from './MenuItemCard';

const Menu = ({ category }) => {
  // Filter items based on the category
  const items = data.filter(item => item.category === category);

  return (
    <View style={styles.container}>
      {/* Conditional rendering if no items found */}
      {items.length === 0 ? (
        <Text style={styles.noItemsText}>No items available in this category.</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.map(info => (
            <MenuItemCard
              key={info.id}
              id={info.id}
              img={info.image}
              name={info.name}
              desc={info.desc}
              price={info.price}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});

export default Menu;
