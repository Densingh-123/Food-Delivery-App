import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../../features/basketSlice';

const MenuItemCard = (props) => {
    const [isPressed, setIsPressed] = useState(false);

    const dispatch = useDispatch();

    const addItemsToBasket = () => {
        dispatch(addToBasket({ id: props.id, name: props.name, price: props.price, desc: props.desc, img: props.img }));
    };

    const removeItemsFromBasket = () => {
        dispatch(removeFromBasket({ id: props.id }));
    };

    const items = useSelector((state) => selectBasketItemsWithId(state, props.id));

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.cardTouchable} onPress={() => setIsPressed(!isPressed)}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{props.name}</Text>
                    <Text style={styles.cardDescription}>{props.desc}</Text>
                    <Text style={styles.cardPrice}>${props.price}</Text>
                </View>
                <Image source={{ uri: props.img }} style={styles.cardImage} />
            </TouchableOpacity>
            {isPressed && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={removeItemsFromBasket} disabled={items.length === 0}>
                        <Icon name="minuscircle" size={30} color={items.length > 0 ? '#00CCBB' : '#808080'} />
                    </TouchableOpacity>

                    <Text style={styles.itemCount}>{items.length}</Text>

                    <TouchableOpacity onPress={addItemsToBasket}>
                        <Icon name="pluscircle" size={30} color="#00CCBB" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        backgroundColor: 'white',
        marginBottom: 16,
        borderRadius: 8,
        elevation: 2, // Add a shadow effect for Android
        shadowColor: '#000', // For iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardInfo: {
        flex: 1,
        paddingRight: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        color: '#777',
        fontSize: 14,
    },
    cardPrice: {
        color: '#00CCBB',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
    },
    itemCount: {
        fontSize: 16,
        marginHorizontal: 10,
        color: '#333',
    },
});

export default MenuItemCard;
