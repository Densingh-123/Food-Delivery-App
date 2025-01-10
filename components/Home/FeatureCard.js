import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const FeatureCard = (props) => {

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
                    });
                }}
            >
                <Image source={{ uri: props.img }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.name}</Text>
                    <View style={styles.detailsRow}>
                        <Icon name='star-rate' size={20} color='#00CCBB' />
                        <Text style={styles.price}>{props.price}</Text>
                        <Text style={styles.category}>{props.cat}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Icon name='location-on' size={20} color='#00CCBB' />
                        <Text style={styles.locationText}>nearby</Text>
                        <Text style={styles.location}>{props.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 15, // Space between cards
        marginBottom: 20, // Space at the bottom
    },
    card: {
        backgroundColor: 'white',
        padding:10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
        paddingBottom: 16,
    },
    image: {
        width: 240,
        height: 160,
        borderRadius: 12,
    },
    textContainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    price: {
        fontSize: 16,
        color: '#00CCBB',
        marginLeft: 6,
    },
    category: {
        fontSize: 16,
        color: '#888',
        marginLeft: 12,
    },
    locationText: {
        fontSize: 16,
        color: '#888',
        marginLeft: 6,
    },
    location: {
        fontSize: 16,
        color: '#555',
        marginLeft: 6,
    },
});

export default FeatureCard;
