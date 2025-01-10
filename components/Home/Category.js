import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { data } from '../../data/Data';
import CategoryCard from './CategoryCard';

const Category = () => {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
        >
            {
                data.map((category) => {
                    return (
                        <View key={category.id} style={styles.categoryContainer}>
                            <CategoryCard 
                                img={category.image} 
                                name={category.name} 
                            />
                        </View>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        paddingTop: 10,
        paddingHorizontal: 7,
    },
    categoryContainer: {
        marginBottom:5,
        marginRight: 15,  // Adding margin between category cards
        padding: 5,       // Padding inside the container for better spacing
        borderRadius: 10, // Rounded corners for each category container
        overflow: 'hidden', // Ensures the image doesn't overflow rounded corners
        backgroundColor: '#fff', // White background to make the cards stand out
        shadowColor: '#000', // Adding shadow for a subtle 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // For Android shadow effect
    },
});

export default Category;
