import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const DiscountCard = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity 
                style={styles.card} 
                onPress={() => {
                    navigation.navigate('Restaurant', { 
                        name: props.name, 
                        img: props.img, 
                        price: props.price, 
                        cat: props.cat, 
                        location: props.location, 
                        des: props.des 
                    })
                }} 
            >
                <Image 
                    source={{ uri: props.img }} 
                    style={styles.cardImage} 
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{props.name}</Text>
                    <View style={styles.cardDetails}>
                        <Icon name='star-rate' size={20} color='#00CCBB' />
                        <Text style={styles.priceText}>{props.price}</Text>
                        <Text style={styles.categoryText}>{props.cat}</Text>
                    </View>
                    <View style={styles.location}>
                        <Icon name='location-on' size={20} color='#00CCBB' />
                        <Text style={styles.locationText}>nearby</Text>
                        <Text style={styles.locationText}>{props.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 8, // Adjusts the space between multiple cards
        marginBottom: 15, // Space below each card
    },
    card: {
        padding:10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        paddingBottom: 12,
        elevation: 5, // For Android shadow effect
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 10, // Round corners for the image
    },
    cardContent: {
        paddingLeft: 12,
        paddingTop: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    priceText: {
        fontSize: 16,
        color: '#00CCBB',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    categoryText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
});

export default DiscountCard;
